App.py en carpeta "use"

Agregar para descargar paquetes:
py -m pip install fastapi uvicorn edge-tts

L.Host -> http://127.0.0.1:5000

Para iniciar el servidor desde la carpeta principal:
py -m uvicorn use.app:app --host 0.0.0.0 --port 5000

Nota: El primer arranque puede tardar un poco más, ya que el sistema genera el archivo de audio de Edge TTS en el servidor local. Una vez creado, las reproducciones posteriores serán mucho más rápidas e inmediatas.
