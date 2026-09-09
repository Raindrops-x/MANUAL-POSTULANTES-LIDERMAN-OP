const pasos = [
  {
    titulo: "Ingreso a la plataforma",
    descCorta: "Accede al portal oficial <a href='https://postulantes.liderman.org/login' target='_blank' rel='noopener noreferrer'><b>https://postulantes.liderman.org/login</b></a> y presiona el botón de registro para comenzar y crear tu usuario.",
    texto: "Ingresa a https://postulantes.liderman.org/login, donde se mostrará la pantalla de bienvenida. En esta pantalla debes presionar el botón Regístrate para crear tu usuario.",
    img: ["img/paso1.png"]
  },
  {
    titulo: "Registro de datos básicos",
    descCorta: "Ingresa tus datos de identificación principales con atención al detalle:<ul class=\"lista-paso-desc\"><li><b>Datos requeridos:</b> Nombre completo, apellidos, correo electrónico personal, teléfono, tipo y número de documento de identidad.</li></ul><b>Nota:</b> Esta información no se podrá modificar una vez enviada. Una vez listo, le damos en <b>registrar</b>",
    texto: "Ingresa tus datos básicos: nombres, apellidos, correo electrónico personal, teléfono, tipo y número de documento de identidad. Verifica que todo esté correcto, porque esta información no podrá modificarse después. Cuando termines, presiona Registrar.",
    img: ["img/paso2.png"]
  },
  {
    titulo: "Validación por correo",
    descCorta: "Verifica tu cuenta ingresando el código de confirmación enviado a tu correo electrónico.<br><b>Sugerencia:</b> Revisa la bandeja de <b>spam</b> o correo no deseado si no lo encuentras en la bandeja de entrada.",
    texto: "Llegará un código de 6 dígitos al correo que registraste. Ingresa ese código en la plataforma para habilitar el formulario y comenzar a completar tu información.",
    img: ["img/paso3.png"]
  },
  {
    titulo: "Ficha de datos personales",
    descCorta: "Registra la información completa sobre tu perfil, residencia y núcleo familiar:<ul class=\"lista-paso-desc\"><li><b>Datos personales:</b> Nombres, apellidos, correo, teléfono, género, DNI, estado civil, edad, fecha de nacimiento y brevete (si aplica).</li><li><b>Domicilio:</b> Dirección completa, departamento, provincia, distrito y referencia.</li><li><b>Datos familiares:</b> Datos generales y contacto de cónyuge/conviviente, hijos y padres.</li><li><b>Contacto de emergencia:</b> Datos generales y parentesco, dirección y distrito.</li><li><b>Experiencia laboral y educativa:</b> Datos de la institución educativa o laboral y fechas/temporalidad.</li></ul>",
    texto: "Completa tus datos personales, incluyendo género, DNI, estado civil, edad, fecha de nacimiento y brevete si corresponde. Luego registra tu domicilio completo, los datos de tu cónyuge o conviviente, hijos y padres, datos de contacto de emergencia, información educativa y tu experiencia laboral. Verifica que todos los campos obligatorios estén llenos.",
    img: ["img/Paso4.gif"]
  },
  {
    titulo: "Firma digital",
    descCorta: "Dibuja tu firma en el recuadro interactivo utilizando tu mouse o pantalla de celular. Puedes borrarla y volver a intentarlo cuantas veces lo requieras.<br><b>Importante:</b> Debe coincidir con la firma de tu documento de identidad.",
    texto: "Dibuja tu firma en el recuadro usando el mouse o pantalla de celular y vuelve a intentarlo si es necesario. La firma debe coincidir con la de tu documento de identidad.",
    img: ["img/Firma.gif"]
  },
  {
    titulo: "Boletín e Información Previsional",
    descCorta: "Revisa la información institucional y selecciona tu sistema de pensiones. Esto te permitirá conocer tus obligaciones laborales, beneficios y aspectos relevantes para tus actividades. Si no cuentas con un sistema de pensiones, puedes afiliarte desde el formulario.",
    texto: "Lee atentamente el boletín informativo institucional y luego selecciona el sistema de pensiones al que perteneces (AFP u ONP) antes de continuar con el proceso, tambien puedes afiliarte desde el formulario.",
    img: ["img/paso6.gif"]
  },
  {
    titulo: "Cláusula de consentimiento",
    descCorta: "Acepta los términos sobre confidencialidad y protección de datos. En Liderman nos comprometemos a proteger tu información y te brindamos las consideraciones sobre tu privacidad.",
    texto: "Lee y acepta la cláusula sobre confidencialidad y protección de tus datos personales. Allí se explican las consideraciones de privacidad y el compromiso de Liderman con el cuidado de tu información.",
    img: ["img/paso8.png"]
  },
  {
    titulo: "Elección de jornada de trabajo",
    descCorta: "Selecciona el turno laboral 8 o 8 horas con sobretiempo de 4 horas (12 horas) acordado previamente con tu reclutador, sujeto a la disponibilidad de las vacantes. <br>Nota: Si no conoces exactamente tu jornada laboral, <b>tratar de comunicarte</b> lo antes posible con tu reclutador",
    texto: "Selecciona la jornada laboral de 8 o 8 horas con sobre tiempo de 4 horas que acordaste con tu reclutador. Si no conoces tu jornada exacta, comunícate con él o ella lo antes posible, porque la opción depende de las vacantes disponibles.",
    img: ["img/paso9.png"]
  },
  {
    titulo: "Visita domiciliaria",
    descCorta: "Responde los cuestionarios solicitados. <br>Debes complementar tu información personal y familiar/convivientes, así como aspectos de tu domicilio (evaluación de potenciales vulnerabilidades del sector) y vías de acceso a tu vivienda como calles, iluminación, etc.",
    texto: "Responde los cuestionarios sobre tu información personal, familiar y domicilio, incluyendo las posibles vulnerabilidades de tu hogar. Completa la información adaptado a tu situación incluyendo las vulnerabilidades de tu zona y seguridad.",
    img: ["img/paso10.gif"]
  },
  {
    titulo: "Autorizaciones, Convenios y Declaración Jurada",
    descCorta: `<ul class="lista-paso-desc">
        <li><strong>Tratamiento de datos personales:</strong> Autorización para el uso de imagen y voz con fines corporativos.</li>
        <li><strong>Cargo de entrega de documentos laborales:</strong> Conformidad de documentos recibidos al ingreso.</li>
        <li><strong>Convenio de descuento:</strong> Por permanencia mínima a partir de 12 meses de participación en la empresa, en donde se podrían tener beneficios especiales.</li>
        <li><strong>Declaraciones generales:</strong> Conformidad sobre políticas de sustancias psicoactivas, SST, evaluación poligráfica y antecedentes.</li>
      </ul>`,
    texto: "Revisa y acepta la autorización para el uso de tu imagen y voz, la conformidad de entrega de documentos laborales y el convenio de descuento por permanencia mínima de doce meses. Finalmente, acepta las declaraciones sobre sustancias psicoactivas, seguridad y salud en el trabajo, evaluación poligráfica y antecedentes.",
    img: ["img/autoGif.gif"]
  },
   {
    titulo: "Condiciones laborales",
    descCorta: `Este documento debe ser entregado por tu reclutador, debe incluir tus datos completos como datos personales, estructura salarial y otros datos relacionados con tu trabajo, este al seguir con el proceso se considerará como firmado. Si es que tu documento está incompleto, comunícate inmediatamente con tu reclutador</li>
            <br> <b>Nota:</b> No descargues formularios externos o intentes crear uno manualmente, debe ser propiamente el otorgado por tu reclutador. Además, el modelo presentado aquí únicamente es con propósitos ilustrativos.`,
    texto: "Revisa la ficha de condiciones laborales que te entrega tu reclutador. Debe incluir tus datos personales, la estructura salarial y la información relacionada con tu trabajo completamente. No descargues formularios externos ni crees uno manualmente, porque el modelo mostrado es solo ilustrativo, ni tampoco edites la información del documento.",
    img: ["img/paso21_1.png"]
  },
  {
    titulo: "Compromiso de Activos, informes y descuentos",
    descCorta: `<ul class="lista-paso-desc">
      <li><strong>Conflicto de intereses:</strong> Declaración de vínculos familiares o conocidos en la empresa para garantizar transparencia, siendo el caso de detallarlo si existe vinculo.</li>
      <li><strong>Gestión de activos:</strong> Conformidad de haber sido instruido en el manejo de equipos de la empresa y compromiso para el cuidado de activos.</li>
      <li><strong>Informe medico:</strong> Se declara constancia de que se realizo el proceso de informe medico y entrega de resultados de informe medico ocupacional</li>
      <li><strong>Capacitación de app:</strong> Se declara que se ha sido capacitado correctamente en el uso de la <b>app liderman</b></li>
      <li><strong>Protección de bienes:</strong> Cobertura responsable frente a pérdida, daño o uso negligente de los activos.</li>
      </ul>`,
    texto: "Acepta la declaración de conflicto de intereses, confirma la recepción de tu informe médico ocupacional y la capacitación de la app, y revisa los compromisos de cuidado y protección de activos asignados para continuar con el proceso.",
    img: ["img/descGif.gif"]
  },
  {
    titulo: "Subir Currículum Vitae",
    descCorta: "Adjunta tu CV actualizado (de preferencia en formato PDF). Contarás con un botón para buscar el archivo localmente en tu celular o computadora. Selecciona el archivo en formato PDF y súbelo a la plataforma.",
    texto: "Adjunta tu currículum vitae actualizado, preferentemente en formato PDF. Usa el botón para buscar el archivo en tu celular o computadora y luego súbelo a la plataforma.",
    img: ["img/paso14_1.gif"]
  },
  {
    titulo: "Subir DNI",
    descCorta: "Carga imágenes nítidas de ambas caras de tu documento de identidad dentro de un documento PDF. Asegúrate de que los datos sean legibles y no tengan reflejos ni elementos que los cubran. <br><b>Recuerda que el archivo debe incluir ambas caras del DNI, evitar enviar una sola cara</b>.",
    texto: "Carga en un solo documento PDF las imágenes nítidas de ambas caras de tu DNI. Asegúrate de que los datos sean legibles, sin reflejos ni elementos que los cubran, y completa la fecha de vencimiento, la fecha de emisión y el ubigeo.",
    img: ["img/DNI corregido.jpg"]
  },
  {
    titulo: "Certificado Único Laboral",
    descCorta: "Adjunta tu CUL (tramitado gratis en <a href='https://www.empleosperu.gob.pe' target='_blank' rel='noopener noreferrer'>https://www.empleosperu.gob.pe</a>) Este certificado tiene una vigencia de 3 meses, se tiene que considerar su vigencia.<br><b>Nota:</b> En caso de figurar con observaciones en algún aparatado del antecedente, presiona el botón 'Tengo observaciones' para continuar. <br> <b>Guia de como obtener tu CUL:</b> <br><iframe class=\"video-instruccion\" src=\"https://www.youtube.com/embed/KtGfO-rGN90\" title=\"Instrucciones para tramitar el CUL\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
    texto: "Obtén gratis tu Certificado Único Laboral en empleosperu.gob.pe y adjúntalo a la plataforma. Recuerda que tiene una vigencia de tres meses. Si aparece una observación en algún apartado de antecedentes, presiona 'Tengo observaciones' para presentar los documentos correspondientes de forma individual.",
    img: ["img/paso16_1.png", "img/paso16_2.png"]
  },
  {
    titulo: "Certificado de estudios",
    descCorta: "Adjunta tus constancias de estudios (básicos, técnicos o superiores). En caso contrario, deberás presentar una declaración jurada notarial para su validez.",
    texto: "Sube tu certificado de estudios básicos o superiores. Si no cuentas con ninguno, deberás formalizar una declaración jurada de estudios ante un notario para que sea válida.",
    img: ["img/paso17_1.png", "img/paso17_2.png"]
  },
  {
    titulo: "Certificados de trabajo",
    descCorta: "Adjunta los certificados que sustenten tu experiencia laboral previa. En caso de no poseerlos, podrás reemplazarlos por una declaración jurada simple.",
    texto: "Adjunta tus certificados de trabajos anteriores. Si no cuentas con alguno, puede reemplazarse por una declaración jurada de trabajo simple.",
    img: ["img/paso18_1.png"]
  },
  {
    titulo: "Croquis y foto de domicilio",
    descCorta: `Sube el plano de ubicación de tu domicilio (hecho a mano o mediante herramientas de GPS como Google Maps) y una fotografía actual de la fachada, <b> No utilices fotos de internet de tu vivienda, toma una imagen que enfoque bien la fachada de tu vivienda tal como los ejemplos</b>.
    <br>
    <b>Recuerda:</b>
    <ul>
      <li>Si tu croquis es hecho a mano, debe ser legible.</li>
      <li>Si tu croquis es una captura de Google Maps, tiene que mostrarse el pin que ubica tu casa.</li>
      <li>La foto de fachada debe ser actual y enfocar completamente tu fachada.</li>
    </ul>`,
    texto: "Sube un croquis legible de tu domicilio, hecho a mano o mediante una captura de imagen de Google Maps tal como en la ilustración. Si usas una captura, debe mostrar el pin que ubica tu casa. Adjunta también una fotografía actual que enfoque completamente la fachada el cual no debe ser extraído de internet y actual.",
    img: ["img/paso19_1.png", "img/paso19_2.png"]
  },
    {
    titulo: "Asignación familiar",
    descCorta: `Aplica si tienes hijos <b>menores de 18 años o hijos de 18 a 24 años</b> en etapa escolar/superior.
    <br>
    <ul>
      <li>Si tu hijo es menor de edad, adjuntar su dni en un documento incluyendo ambas caras.</li>
      <li>Si tu hijo es mayor de edad, adjuntar su dni en un documento con ambas caras, partida de nacimiento y certificado de estudios.</li>
    </ul>
    Si no aplica a tu situación, omite este paso.`,
    texto: "Este paso corresponde si tienes hijos menores de 18 años o hijos de 18 a 24 años que se encuentran estudiando. Si tu hijo es menor de edad, debes adjuntar su DNI incluyendo ambas caras. Si tiene entre 18 y 24 años y estudia, debes adjuntar su DNI por ambas caras, la partida de nacimiento y el certificado de estudios. Si esta situación no aplica a tu caso, puedes omitir este paso.",
    img: ["img/paso20_1.png", "img/paso20_2.png"]
  },
  {
    titulo: "DJ de huellas dactilares",
    descCorta: `<ul class="lista-paso-desc">
        <li><strong>DJ de huellas dactilares:</strong> Formato descargable para registrar tu firma y huella.</li>
      </ul>
      <b>Opciones para completar el formato:</b>
      <ul class="lista-paso-desc">
        <li>Imprimir, llenar a mano, escanear y adjuntar.</li>
        <li>Completar digitalmente en formato PDF con firma y huella en alta resolución.</li>
      </ul>
      <b>Nota:</b> Recuerda que tanto la firma como la huella dactilar deben ser legibles y sin errores de resolución.`,
    texto: "Descarga la declaración jurada de autenticidad dactilar, imprímela, complétala a mano con tu firma y huella dactilar, y súbela a la plataforma. Con esto tu registro quedará finalizado y será revisado por el área de gestión documental.",
    img: ["img/paso21_2.png"]
  }
];


let indice = 0;
let hablando = false;
let cargandoAudio = false;
let volumen = 1;
let navegacionBloqueada = false;


// ============================================================
// CONFIGURACIÓN TTS
// ============================================================

const TTS_ENDPOINT = "/tts";


// ============================================================
// INTRODUCCIÓN
// ============================================================

const narracionIntro = {
  texto: "Bienvenido a la familia Liderman. En este manual te acompañaremos paso a paso para completar correctamente tu legajo virtual en la plataforma de postulantes. Primero ingresarás al portal y registrarás tus datos personales. Después validarás tu cuenta mediante el código enviado a tu correo y completarás la información de tu perfil, domicilio y familiares. Durante el recorrido también revisaremos la firma digital, el sistema de pensiones, las autorizaciones y las condiciones laborales. Finalmente, aprenderás a cargar los documentos necesarios, como tu currículum, DNI, certificados, croquis y fotografía de domicilio. Antes de comenzar, procura tener una conexión estable, de preferencia utiliza una computadora y reúne tus documentos en formato claro y legible. Si tienes hijos menores, ten también sus documentos de identidad. Avanza siguiendo cada indicación y verifica tus datos antes de enviarlos, porque algunos formularios no podrán modificarse después. Cuando estés listo, selecciona Iniciar manual para comenzar con el primer paso."
};

const narracionCierre = {
  texto: "Felicitaciones. Has revisado todos los pasos para completar tu registro y cargar tu legajo virtual. Tu información y documentos serán validados por el área de Gestión Documental. Mantente atento a tu correo electrónico y teléfono de contacto por si tu reclutador solicita alguna subsanación. El proceso ha finalizado."
};


// ============================================================
// ESTADO DEL AUDIO
// ============================================================

let audioActual = null;

let audioAutomatico = null;

let modoAutomatico = false;

let solicitudAutomatica = 0;

const cacheAudio = {};

let solicitudNarracion = 0;


// ============================================================
// OBTENER AUDIO DESDE BACKEND
// ============================================================

async function obtenerAudioDesdeBackend(texto) {

  const respuesta = await fetch(
    TTS_ENDPOINT,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        text: texto
      })
    }
  );


  if (!respuesta.ok) {

    const detalle = await respuesta.text();

    throw new Error(
      `TTS del servidor falló (${respuesta.status}): ${detalle}`
    );
  }


  const blob = await respuesta.blob();

  return URL.createObjectURL(blob);
}


// ============================================================
// INICIAR MANUAL
// ============================================================

function iniciarManual() {

  document.getElementById("portada").style.display = "none";

  document.getElementById("cierre").style.display = "none";

  document
    .getElementById("carrusel")
    .classList.add("activo");

  indice = 0;

  renderPaso();
}


// ============================================================
// BOTÓN PLAY
// ============================================================

function manejarBotonPlay() {

  if (modoAutomatico) {
    detenerModoAutomatico();
    return;
  }

  iniciarModoAutomatico();
}


function iniciarModoAutomatico() {

  if (document.getElementById("cierre").style.display === "block") {
    irAlInicio();
  }

  detenerNarracion();

  modoAutomatico = true;
  solicitudAutomatica++;

  actualizarBotonModoAutomatico();
  mostrarAvisoModoAutomatico("Modo automático activado");

  const portadaVisible =
    document.getElementById("portada").style.display !== "none";

  if (portadaVisible) {
    reproducirAudioAutomatico(
      narracionIntro.texto,
      `intro-${narracionIntro.texto}`,
      () => {
        if (!modoAutomatico) {
          return;
        }

        iniciarManual();
        reproducirPasoAutomatico();
      }
    );
    return;
  }

  reproducirPasoAutomatico();
}


function detenerModoAutomatico() {

  modoAutomatico = false;
  solicitudAutomatica++;

  if (audioAutomatico) {
    audioAutomatico.pause();
    audioAutomatico.currentTime = 0;
    audioAutomatico = null;
  }

  actualizarBotonModoAutomatico();
  ocultarAvisoModoAutomatico();
}


function actualizarBotonModoAutomatico() {

  const btnPlay = document.getElementById("btnPlay");

  btnPlay.textContent = modoAutomatico ? "■" : "▶";
  btnPlay.title = modoAutomatico
    ? "Detener modo automático"
    : "Iniciar modo automático";
  btnPlay.setAttribute("aria-label", btnPlay.title);
}


function mostrarAvisoModoAutomatico(mensaje) {

  const aviso = document.getElementById("avisoModoAutomatico");

  aviso.querySelector("span").textContent = mensaje;
  aviso.hidden = false;
}


function ocultarAvisoModoAutomatico() {

  document.getElementById("avisoModoAutomatico").hidden = true;
}


async function reproducirAudioAutomatico(texto, claveAudio, alTerminar) {

  const solicitudActual = solicitudAutomatica;

  try {
    let src = cacheAudio[claveAudio];

    if (!src) {
      src = await obtenerAudioDesdeBackend(texto);
      cacheAudio[claveAudio] = src;
    }

    if (
      !modoAutomatico ||
      solicitudActual !== solicitudAutomatica
    ) {
      return;
    }

    const audio = new Audio(src);
    audio.volume = volumen;
    audioAutomatico = audio;

    audio.onended = () => {
      if (
        audioAutomatico !== audio ||
        !modoAutomatico ||
        solicitudActual !== solicitudAutomatica
      ) {
        return;
      }

      alTerminar();
    };

    await audio.play();
  } catch (error) {
    if (
      !modoAutomatico ||
      solicitudActual !== solicitudAutomatica
    ) {
      return;
    }

    console.error("Error en el modo automático:", error);
    detenerModoAutomatico();
    alert("No se pudo continuar con el modo automático. Revisa tu conexión y vuelve a intentarlo.");
  }
}


function reproducirPasoAutomatico() {

  if (!modoAutomatico) {
    return;
  }

  const pasoIndice = indice;
  const texto = pasos[pasoIndice].texto;

  reproducirAudioAutomatico(
    texto,
    `paso-${texto}`,
    () => {
      if (indice >= pasos.length - 1) {
        mostrarPantallaCierre();
        reproducirCierreAutomatico();
        return;
      }

      indice++;
      renderPaso();
      reproducirPasoAutomatico();
    }
  );
}


function reproducirCierreAutomatico() {

  reproducirAudioAutomatico(
    narracionCierre.texto,
    `cierre-${narracionCierre.texto}`,
    () => {
      detenerModoAutomatico();
    }
  );
}


// ============================================================
// RENDER PASO
// ============================================================

function renderPaso() {

  const p = pasos[indice];

  const pasoGrid =
    document.getElementById("pasoGrid");


  if (
    indice < 10 &&
    indice % 2 !== 0
  ) {

    pasoGrid.classList.add("inverso");

  } else {

    pasoGrid.classList.remove("inverso");
  }


  document.getElementById(
    "pasoTitulo"
  ).textContent = p.titulo;


  document.getElementById(
    "pasoDescCorta"
  ).innerHTML = p.descCorta;


  const numFormateado =
    String(indice + 1).padStart(2, "0");


  document.getElementById(
    "textoPasoHeader"
  ).innerHTML =
    `PASO ${numFormateado} / ${pasos.length}`;


  const container =
    document.getElementById(
      "pasoMediaContainer"
    );


  container.innerHTML = "";


  container.classList.toggle(
    "pasos-iniciales",
    indice < 11
  );


  if (p.img.length > 1) {

    container.classList.add(
      "doble-imagen"
    );

  } else {

    container.classList.remove(
      "doble-imagen"
    );
  }


  p.img.forEach(
    archivo => {

      const ext =
        archivo
          .toLowerCase()
          .split(".")
          .pop();


      if (ext === "mp4") {

        const videoHTML = `
          <video
            class="media-paso"
            autoplay
            loop
            muted
            playsinline
            controls
          >
            <source
              src="${archivo}"
              type="video/mp4"
            >
          </video>
        `;


        container.insertAdjacentHTML(
          "beforeend",
          videoHTML
        );


        const videoElement =
          container.querySelector(
            "video"
          );


        if (videoElement) {

          videoElement.load();

          videoElement
            .play()
            .catch(() => {});
        }

      } else {

        const imgHTML = `
          <img
            src="${archivo}"
            alt="Captura del paso"
            class="media-paso"
          >
        `;


        container.insertAdjacentHTML(
          "beforeend",
          imgHTML
        );
      }
    }
  );


  configurarPausaAlInteractuarConVideo();


  if (document.querySelector(".video-instruccion")) {
    detenerModoAutomatico();
  }


  const porcentaje =
    ((indice + 1) / pasos.length) * 100;


  document.getElementById(
    "barraProgreso"
  ).style.width =
    porcentaje + "%";


  renderDots();

  detenerNarracion();
}


function configurarPausaAlInteractuarConVideo() {

  const videosEmbebidos = document.querySelectorAll(
    ".video-instruccion"
  );


  videosEmbebidos.forEach(
    video => {
      const detenerAudios = () => {
        detenerModoAutomatico();
        detenerNarracion();
      };


      video.addEventListener(
        "pointerdown",
        detenerAudios
      );


      video.addEventListener(
        "focus",
        detenerAudios
      );
    }
  );
}


function detenerAudioAlCambiarAlVideo(evento) {

  if (
    evento.target === window &&
    document.activeElement &&
    document.activeElement.matches(".video-instruccion")
  ) {
    detenerModoAutomatico();
    detenerNarracion();
  }
}


// ============================================================
// DOTS
// ============================================================

function renderDots() {

  const dots =
    document.getElementById("dots");


  dots.innerHTML = "";


  pasos.forEach(
    (_, i) => {

      const d =
        document.createElement("span");


      if (i === indice) {

        d.classList.add("activo");
      }


      d.onclick = () => {

        detenerModoAutomatico();
        indice = i;

        renderPaso();
      };


      dots.appendChild(d);
    }
  );
}


// ============================================================
// VISOR DE IMAGEN
// ============================================================

function abrirVisorImagen(imagen) {

  const visor =
    document.getElementById(
      "visorImagen"
    );


  const imagenAmpliada =
    document.getElementById(
      "imagenAmpliada"
    );


  imagenAmpliada.src =
    imagen.src;


  imagenAmpliada.alt =
    imagen.alt;


  visor.classList.add(
    "abierto"
  );


  visor.setAttribute(
    "aria-hidden",
    "false"
  );
}


function cerrarVisorImagen() {

  const visor =
    document.getElementById(
      "visorImagen"
    );


  const imagenAmpliada =
    document.getElementById(
      "imagenAmpliada"
    );


  visor.classList.remove(
    "abierto"
  );


  visor.setAttribute(
    "aria-hidden",
    "true"
  );


  imagenAmpliada.src = "";
}


function configurarVisorImagen() {

  const container =
    document.getElementById(
      "pasoMediaContainer"
    );


  const visor =
    document.getElementById(
      "visorImagen"
    );


  const cerrarVisor =
    document.getElementById(
      "cerrarVisor"
    );


  container.addEventListener(
    "click",
    evento => {

      if (
        evento.target.matches(
          "img.media-paso"
        )
      ) {

        abrirVisorImagen(
          evento.target
        );
      }
    }
  );


  cerrarVisor.addEventListener(
    "click",
    cerrarVisorImagen
  );


  visor.addEventListener(
    "click",
    evento => {

      if (
        evento.target === visor
      ) {

        cerrarVisorImagen();
      }
    }
  );


  document.addEventListener(
    "keydown",
    evento => {

      if (
        evento.key === "Escape"
      ) {

        cerrarVisorImagen();
      }
    }
  );
}


// ============================================================
// SIGUIENTE
// ============================================================

function pasoSiguiente() {

  if (navegacionBloqueada) {
    return;
  }


  detenerModoAutomatico();


  navegacionBloqueada = true;


  const portadaVisible =
    document.getElementById(
      "portada"
    ).style.display !== "none";


  if (portadaVisible) {

    iniciarManual();

    liberarNavegacion();

    return;
  }


  if (
    indice <
    pasos.length - 1
  ) {

    indice++;

    renderPaso();

  } else {

    mostrarPantallaCierre();
  }


  liberarNavegacion();
}


// ============================================================
// ANTERIOR
// ============================================================

function pasoAnterior() {

  if (navegacionBloqueada) {
    return;
  }


  detenerModoAutomatico();


  navegacionBloqueada = true;


  if (
    document.getElementById(
      "cierre"
    ).style.display === "block"
  ) {

    document.getElementById(
      "cierre"
    ).style.display = "none";


    document
      .getElementById("carrusel")
      .classList.add("activo");


    renderPaso();

    liberarNavegacion();

    return;
  }


  if (indice > 0) {

    indice--;

    renderPaso();
  }


  liberarNavegacion();
}


// ============================================================
// LIBERAR NAVEGACIÓN
// ============================================================

function liberarNavegacion() {

  window.setTimeout(
    () => {

      navegacionBloqueada = false;

    },
    180
  );
}


// ============================================================
// CIERRE
// ============================================================

function mostrarPantallaCierre() {

  document
    .getElementById("carrusel")
    .classList.remove("activo");


  document.getElementById(
    "cierre"
  ).style.display = "block";


  document.getElementById(
    "textoPasoHeader"
  ).textContent =
    "FINALIZADO";


  document.getElementById(
    "barraProgreso"
  ).style.width =
    "100%";


  detenerNarracion();
}


// ============================================================
// VOLVER AL INICIO
// ============================================================

function irAlInicio() {

  detenerModoAutomatico();

  document.getElementById(
    "portada"
  ).style.display =
    "block";


  document.getElementById(
    "cierre"
  ).style.display =
    "none";


  document
    .getElementById("carrusel")
    .classList.remove("activo");


  document.getElementById(
    "textoPasoHeader"
  ).textContent =
    "INTRO";


  document.getElementById(
    "barraProgreso"
  ).style.width =
    "0%";


  detenerNarracion();
}


// ============================================================
// REPRODUCIR NARRACIÓN
// ============================================================

async function reproducirNarracion() {

  const btnPlay =
    document.getElementById(
      "btnPlay"
    );


  const portadaVisible =
    document.getElementById(
      "portada"
    ).style.display !== "none";

  const cierreVisible =
    document.getElementById(
      "cierre"
    ).style.display === "block";


  const pasoIndice = indice;


  const texto =
    cierreVisible
      ? narracionCierre.texto
      : portadaVisible
        ? narracionIntro.texto
        : pasos[pasoIndice].texto;


  const claveAudio =
    `${cierreVisible ? "cierre" : portadaVisible ? "intro" : "paso"}-${texto}`;


  const solicitudActual =
    ++solicitudNarracion;


  try {

    let src =
      cacheAudio[
        claveAudio
      ];


    // --------------------------------------------------------
    // CACHE DEL NAVEGADOR
    // --------------------------------------------------------

    if (!src) {

      cargandoAudio = true;

      btnPlay.textContent = "…";


      // ------------------------------------------------------
      // BACKEND
      // ------------------------------------------------------

      src =
        await obtenerAudioDesdeBackend(
          texto
        );


      cacheAudio[
        claveAudio
      ] = src;
    }


    // --------------------------------------------------------
    // COMPROBAR QUE SIGUE SIENDO EL PASO CORRECTO
    // --------------------------------------------------------

    const portadaSigueVisible =
      document.getElementById(
        "portada"
      ).style.display !== "none";

    const cierreSigueVisible =
      document.getElementById(
        "cierre"
      ).style.display === "block";


    if (
      solicitudActual !== solicitudNarracion ||
      portadaVisible !== portadaSigueVisible ||
      cierreVisible !== cierreSigueVisible ||
      (
        !portadaVisible &&
        !cierreVisible &&
        pasoIndice !== indice
      )
    ) {

      cargandoAudio = false;

      return;
    }


    // --------------------------------------------------------
    // CREAR AUDIO
    // --------------------------------------------------------

    const audio =
      new Audio(src);


    audio.volume =
      volumen;


    audio.onended = () => {

      if (
        audioActual !== audio
      ) {
        return;
      }


      hablando = false;

      btnPlay.textContent =
        "▶";
    };


    audioActual =
      audio;


    await audio.play();


    hablando = true;

    cargandoAudio = false;

    btnPlay.textContent =
      "❚❚";

  } catch (error) {

    console.error(
      "Error al generar/reproducir narración:",
      error
    );


    if (
      solicitudActual !==
      solicitudNarracion
    ) {
      return;
    }


    cargandoAudio = false;

    hablando = false;


    btnPlay.textContent =
      "▶";


    alert(
      "No se pudo reproducir la narración. Revisa el backend TTS y tu conexión a internet."
    );
  }
}


// ============================================================
// PLAY / PAUSA
// ============================================================

function toggleNarracion() {

  const btnPlay =
    document.getElementById(
      "btnPlay"
    );


  if (cargandoAudio) {
    return;
  }


  if (modoAutomatico) {
    detenerModoAutomatico();
  }


  if (
    hablando &&
    audioActual
  ) {

    audioActual.pause();

    hablando = false;

    btnPlay.textContent =
      "▶";

    return;
  }


  if (
    audioActual &&
    audioActual.currentTime > 0 &&
    !audioActual.ended
  ) {

    audioActual.play();

    hablando = true;

    btnPlay.textContent =
      "❚❚";

    return;
  }


  reproducirNarracion();
}


// ============================================================
// DETENER NARRACIÓN
// ============================================================

function detenerNarracion() {

  solicitudNarracion++;

  cargandoAudio = false;


  if (audioActual) {

    audioActual.pause();

    audioActual.currentTime = 0;
  }


  hablando = false;


  document.getElementById(
    "btnPlay"
  ).textContent =
    modoAutomatico ? "■" : "▶";
}


// ============================================================
// VOLUMEN
// ============================================================

function cambiarVolumen(
  nuevoVolumen
) {

  volumen =
    Number(nuevoVolumen);


  actualizarVistaVolumen(
    volumen
  );


  if (audioActual) {

    audioActual.volume =
      volumen;
  }


  if (audioAutomatico) {

    audioAutomatico.volume =
      volumen;
  }


  actualizarBotonVolumen();
}


function actualizarVistaVolumen(
  nuevoVolumen
) {

  const controlVolumen =
    document.getElementById(
      "controlVolumen"
    );


  if (!controlVolumen) {
    return;
  }


  const porcentaje =
    Number(nuevoVolumen) * 100;


  controlVolumen.style.setProperty(
    "--volumen-porcentaje",
    `${porcentaje}%`
  );
}


// ============================================================
// PANEL DE VOLUMEN
// ============================================================

function togglePanelVolumen() {

  const volumenControl =
    document.getElementById(
      "volumenControl"
    );


  const btnVolumen =
    document.getElementById(
      "btnVolumen"
    );


  const abierto =
    volumenControl.classList.toggle(
      "abierto"
    );


  btnVolumen.setAttribute(
    "aria-expanded",
    String(abierto)
  );
}


// ============================================================
// BOTÓN VOLUMEN
// ============================================================

function actualizarBotonVolumen() {

  const btnVolumen =
    document.getElementById(
      "btnVolumen"
    );


  if (!btnVolumen) {
    return;
  }


  btnVolumen.textContent =
    volumen === 0
      ? "🔇"
      : "🔊";


  btnVolumen.title =
    volumen === 0
      ? "Mostrar control de volumen (silenciado)"
      : "Mostrar control de volumen";
}


// ============================================================
// INICIALIZACIÓN
// ============================================================

window.onload = () => {

  actualizarBotonVolumen();

  actualizarVistaVolumen(
    volumen
  );

  configurarVisorImagen();

  window.addEventListener(
    "blur",
    detenerAudioAlCambiarAlVideo
  );
};