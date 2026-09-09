import base64
import hashlib
import logging
import os
import threading
from pathlib import Path

import requests
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse, Response
from pydantic import BaseModel


# ============================================================
# RUTAS
# ============================================================

ROOT_DIR = Path(__file__).resolve().parent.parent

AUDIO_DIR = ROOT_DIR / "audio"
AUDIO_DIR.mkdir(parents=True, exist_ok=True)


# ============================================================
# VARIABLES DE ENTORNO
# ============================================================

load_dotenv(ROOT_DIR / ".env")


GOOGLE_TTS_API_KEY = os.getenv("GOOGLE_TTS_API_KEY")

GOOGLE_TTS_ENDPOINT = (
    "https://texttospeech.googleapis.com/v1/text:synthesize"
)

GOOGLE_TTS_LANGUAGE = os.getenv(
    "GOOGLE_TTS_LANGUAGE",
    "es-ES",
)

GOOGLE_TTS_VOICE = os.getenv(
    "GOOGLE_TTS_VOICE",
    "es-ES-Standard-H",
)

GOOGLE_TTS_RATE = float(
    os.getenv("GOOGLE_TTS_RATE", "1.02")
)

GOOGLE_TTS_PITCH = float(
    os.getenv("GOOGLE_TTS_PITCH", "1")
)

MAX_TTS_CHARS = int(
    os.getenv("MAX_TTS_CHARS", "5000")
)

PORT = int(
    os.getenv("PORT", "5000")
)


# ============================================================
# LOGGING
# ============================================================

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)

logger = logging.getLogger("manual-tts")


# ============================================================
# FASTAPI
# ============================================================

app = FastAPI(
    title="Manual de Registro del Postulante",
    version="2.0.0",
)


# ============================================================
# CORS
# ============================================================
#
# Durante las pruebas locales dejamos CORS abierto.
#
# En producción, si frontend y backend estarán en el mismo
# dominio, podemos eliminar completamente CORS.
#
# ============================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)


# ============================================================
# MODELO DE PETICIÓN
# ============================================================

class SolicitudTTS(BaseModel):
    text: str = ""


# ============================================================
# LOCK
# ============================================================
#
# Evita que dos peticiones simultáneas generen el mismo audio
# al mismo tiempo.
#
# ============================================================

tts_lock = threading.Lock()


# ============================================================
# UTILIDADES
# ============================================================

def obtener_hash_texto(texto: str) -> str:
    """
    Genera un identificador estable para el texto.

    SHA-256 evita utilizar directamente el texto como nombre
    de archivo.
    """

    return hashlib.sha256(
        texto.encode("utf-8")
    ).hexdigest()


def obtener_ruta_audio(texto: str) -> Path:
    """
    Devuelve la ruta donde se almacenará el MP3.
    """

    hash_texto = obtener_hash_texto(texto)

    return AUDIO_DIR / f"tts-{hash_texto}.mp3"


def respuesta_audio(mp3_bytes: bytes) -> Response:
    """
    Devuelve el MP3 al navegador.
    """

    return Response(
        content=mp3_bytes,
        media_type="audio/mpeg",
        headers={
            "Cache-Control": "public, max-age=31536000, immutable",
            "Content-Disposition": "inline; filename=audio.mp3",
        },
    )


# ============================================================
# HEALTH CHECK
# ============================================================

@app.get("/health")
def health():
    """
    Endpoint para comprobar que el backend funciona.
    """

    archivos_audio = list(AUDIO_DIR.glob("*.mp3"))

    return {
        "ok": True,
        "status": "tts-backend",
        "provider": "google-cloud",
        "voice": GOOGLE_TTS_VOICE,
        "language": GOOGLE_TTS_LANGUAGE,
        "audio_files": len(archivos_audio),
        "audio_directory": str(AUDIO_DIR),
    }


# ============================================================
# GENERACIÓN TTS
# ============================================================

@app.post("/tts")
def generar_tts(solicitud: SolicitudTTS):

    texto = solicitud.text.strip()

    # --------------------------------------------------------
    # VALIDACIÓN 1
    # --------------------------------------------------------

    if not texto:
        return JSONResponse(
            status_code=400,
            content={
                "error": "No se recibió texto para sintetizar."
            },
        )

    # --------------------------------------------------------
    # VALIDACIÓN 2
    # --------------------------------------------------------

    if len(texto) > MAX_TTS_CHARS:
        return JSONResponse(
            status_code=413,
            content={
                "error": (
                    f"El texto supera el límite de "
                    f"{MAX_TTS_CHARS} caracteres."
                )
            },
        )

    # --------------------------------------------------------
    # VALIDACIÓN 3
    # --------------------------------------------------------

    if not GOOGLE_TTS_API_KEY:

        logger.error(
            "GOOGLE_TTS_API_KEY no está configurada."
        )

        return JSONResponse(
            status_code=500,
            content={
                "error": (
                    "El backend no tiene configurada "
                    "la API Key de Google TTS."
                )
            },
        )

    # --------------------------------------------------------
    # RUTA DEL MP3
    # --------------------------------------------------------

    ruta_audio = obtener_ruta_audio(texto)

    # --------------------------------------------------------
    # CACHE EN DISCO
    # --------------------------------------------------------
    #
    # Si ya existe el MP3, NO llamamos a Google.
    #
    # Esto es fundamental para ahorrar consumo.
    #
    # --------------------------------------------------------

    if ruta_audio.exists():

        logger.info(
            "CACHE HIT | caracteres=%s | archivo=%s",
            len(texto),
            ruta_audio.name,
        )

        return FileResponse(
            ruta_audio,
            media_type="audio/mpeg",
            headers={
                "Cache-Control": (
                    "public, max-age=31536000, immutable"
                )
            },
        )

    # --------------------------------------------------------
    # LOCK
    # --------------------------------------------------------

    with tts_lock:

        # Otra petición pudo haber generado el archivo
        # mientras esperábamos el lock.

        if ruta_audio.exists():

            logger.info(
                "CACHE HIT POST-LOCK | archivo=%s",
                ruta_audio.name,
            )

            return FileResponse(
                ruta_audio,
                media_type="audio/mpeg",
                headers={
                    "Cache-Control": (
                        "public, max-age=31536000, immutable"
                    )
                },
            )

        # ----------------------------------------------------
        # PAYLOAD GOOGLE TTS
        # ----------------------------------------------------

        payload = {
            "input": {
                "text": texto
            },

            "voice": {
                "languageCode": GOOGLE_TTS_LANGUAGE,
                "name": GOOGLE_TTS_VOICE,
            },

            "audioConfig": {
                "audioEncoding": "MP3",
                "speakingRate": GOOGLE_TTS_RATE,
            },
        }

        logger.info(
            "GOOGLE TTS | caracteres=%s | voz=%s",
            len(texto),
            GOOGLE_TTS_VOICE,
        )

        # ----------------------------------------------------
        # PETICIÓN A GOOGLE
        # ----------------------------------------------------

        try:

            respuesta = requests.post(
                GOOGLE_TTS_ENDPOINT,
                params={
                    "key": GOOGLE_TTS_API_KEY
                },
                json=payload,
                timeout=30,
            )

        except requests.RequestException:

            logger.exception(
                "Error de conexión con Google Cloud TTS."
            )

            return JSONResponse(
                status_code=502,
                content={
                    "error": (
                        "No se pudo conectar con "
                        "Google Cloud Text-to-Speech."
                    )
                },
            )

        # ----------------------------------------------------
        # ERROR GOOGLE
        # ----------------------------------------------------

        if not respuesta.ok:

            logger.error(
                "Google TTS HTTP %s: %s",
                respuesta.status_code,
                respuesta.text[:1000],
            )

            return JSONResponse(
                status_code=502,
                content={
                    "error": (
                        "Google Cloud Text-to-Speech "
                        "no pudo generar el audio."
                    )
                },
            )

        # ----------------------------------------------------
        # PROCESAR RESPUESTA
        # ----------------------------------------------------

        try:

            datos = respuesta.json()

            audio_base64 = datos.get(
                "audioContent"
            )

            if not audio_base64:

                logger.error(
                    "Google TTS no devolvió audioContent."
                )

                return JSONResponse(
                    status_code=502,
                    content={
                        "error": (
                            "Google TTS no devolvió "
                            "contenido de audio."
                        )
                    },
                )

            mp3_bytes = base64.b64decode(
                audio_base64
            )

        except Exception:

            logger.exception(
                "No se pudo procesar la respuesta "
                "de Google TTS."
            )

            return JSONResponse(
                status_code=502,
                content={
                    "error": (
                        "La respuesta de Google TTS "
                        "no pudo procesarse."
                    )
                },
            )

        # ----------------------------------------------------
        # VALIDAR AUDIO
        # ----------------------------------------------------

        if not mp3_bytes:

            logger.error(
                "Google TTS devolvió audio vacío."
            )

            return JSONResponse(
                status_code=502,
                content={
                    "error": (
                        "Google TTS devolvió audio vacío."
                    )
                },
            )

        # ----------------------------------------------------
        # GUARDAR MP3
        # ----------------------------------------------------

        try:

            ruta_audio.write_bytes(
                mp3_bytes
            )

        except OSError:

            logger.exception(
                "No se pudo guardar el MP3."
            )

            # Aunque falle el guardado, podemos devolver
            # el audio generado.

            return respuesta_audio(
                mp3_bytes
            )

        logger.info(
            "TTS GENERADO | caracteres=%s | "
            "archivo=%s | tamaño=%s KB",
            len(texto),
            ruta_audio.name,
            round(
                len(mp3_bytes) / 1024,
                1
            ),
        )

        # ----------------------------------------------------
        # DEVOLVER AUDIO
        # ----------------------------------------------------

        return FileResponse(
            ruta_audio,
            media_type="audio/mpeg",
            headers={
                "Cache-Control": (
                    "public, max-age=31536000, immutable"
                )
            },
        )


# ============================================================
# SERVIR FRONTEND
# ============================================================

@app.get("/")
def index():

    return FileResponse(
        ROOT_DIR / "index.html"
    )


@app.get("/manual.js")
def manual_js():

    return FileResponse(
        ROOT_DIR / "manual.js",
        media_type="text/javascript",
    )


@app.get("/estilos.css")
def estilos_css():

    return FileResponse(
        ROOT_DIR / "estilos.css",
        media_type="text/css",
    )


# ============================================================
# SERVIR IMÁGENES
# ============================================================

@app.get("/img/{nombre_archivo:path}")
def servir_imagen(nombre_archivo: str):

    imagen_dir = ROOT_DIR / "img"

    if not imagen_dir.exists():

        return JSONResponse(
            status_code=404,
            content={
                "error": (
                    "La carpeta img/ no existe."
                )
            },
        )

    archivo = imagen_dir / nombre_archivo

    if not archivo.exists():

        return JSONResponse(
            status_code=404,
            content={
                "error": "Imagen no encontrada."
            },
        )

    return FileResponse(
        archivo
    )


# ============================================================
# SERVIR AUDIO
# ============================================================

@app.get("/audio/{nombre_archivo:path}")
def servir_audio(nombre_archivo: str):

    archivo = AUDIO_DIR / nombre_archivo

    if not archivo.exists():

        return JSONResponse(
            status_code=404,
            content={
                "error": "Audio no encontrado."
            },
        )

    return FileResponse(
        archivo,
        media_type="audio/mpeg",
        headers={
            "Cache-Control": (
                "public, max-age=31536000, immutable"
            )
        },
    )


# ============================================================
# EJECUCIÓN LOCAL
# ============================================================

if __name__ == "__main__":

    import uvicorn

    uvicorn.run(
        app,
        host="0.0.0.0",
        port=PORT,
    )