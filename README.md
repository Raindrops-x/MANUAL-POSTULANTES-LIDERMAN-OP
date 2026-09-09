# Manual de postulantes Liderman OP

## Backend local

El backend se encuentra en `use/app.py` y utiliza Google Cloud TTS para generar los audios.

### Instalación de paquetes

Desde la carpeta principal del proyecto, ejecuta:

```powershell
py -m pip install fastapi uvicorn edge-tts requests python-dotenv
```

### Iniciar el servidor

Desde la carpeta principal del proyecto:

```powershell
py -m uvicorn use.app:app --host 0.0.0.0 --port 5000
```

Servidor local:

[http://127.0.0.1:5000](http://127.0.0.1:5000/)

> Nota: La primera solicitud de cada texto puede tardar un poco más porque el servidor genera el audio mediante Google Cloud TTS y lo guarda localmente. Las reproducciones posteriores del mismo texto serán más rápidas gracias a la caché local.
