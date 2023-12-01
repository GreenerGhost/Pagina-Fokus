// Sección para animar botónes
var botones = document.getElementsByClassName("contenedor__botones-boton");
// Sección para temporizador
var cronometro = document.getElementsByClassName("contenedor__temporizador-cronometro");
var temporizadorBoton = document.getElementsByClassName("contenedor__inicio-boton");

// Control de Volumen de audio de fondo de página
document.getElementsByClassName("control__audio")[0].volume = 0.2;

// Se declaran valores de cronometro
var enfocar = 25;
var descansoCorto = 5;
var descansoLargo = 15;
var minutos = 25;
var segundos = 0;
var intervalo = null;

// Función para cambiar tiempo en pantalla
function tiempoPantalla(min, seg) {
    if (seg < 10) {
        seg = '0' + seg;
    }
    cronometro[0].innerHTML = `${min}:${seg}`;
}

// Animación botones enfocar y descansos
for (let contador = 0; contador < botones.length; contador++) {
    botones[contador].addEventListener("click", function () {
        segundos = 0;
        let actual = document.getElementsByClassName("activo");
        actual[0].className = actual[0].className.replace("activo", "");
        this.className += " activo";
        let opcion = document.getElementsByClassName("activo")[0].innerHTML;
        if (opcion === 'Enfocar') {
            detenerTemporizador();
            temporizadorBoton[0].innerHTML = "Iniciar";
            minutos = enfocar;
            tiempoPantalla(enfocar, segundos);
        } else if (opcion === 'Descanso corto') {
            detenerTemporizador();
            temporizadorBoton[0].innerHTML = "Iniciar";
            minutos = descansoCorto;
            tiempoPantalla(descansoCorto, segundos);
        } else if (opcion === 'Descanso largo') {
            detenerTemporizador();
            temporizadorBoton[0].innerHTML = "Iniciar";
            minutos = descansoLargo;
            tiempoPantalla(descansoLargo, segundos);
        } else {
            console.log("Esto no se debería mostrar en pantalla");
        }
    })
}

// Función para reproducir audio
function reproducirAudio(audio) {
    document.getElementsByClassName(`${audio}`)[0].play();
}


// Inicia Temporizador y cambia botón de estado
function actualizarTiempo() {
    var temporizadorTexto = temporizadorBoton[0].innerHTML;
    // Se busca cual es la opción activa
    let opcion = document.getElementsByClassName("activo")[0].innerHTML;
    
    // Cambia de estado el botón
    let estado = temporizadorTexto === "Iniciar" ? "Detener" : "Iniciar";
    temporizadorBoton[0].innerHTML = estado;
    if (estado === "Iniciar") {
        reproducirAudio("audio__tono-stop");
    }
    if (estado === "Detener") {
        reproducirAudio("audio__tono-play");
        detenerTemporizador();
    }
    if (opcion === 'Enfocar') {
        iniciarTemporizador();
    } else if (opcion === 'Descanso corto') {
        iniciarTemporizador();
    } else if (opcion === 'Descanso largo') {
        iniciarTemporizador();
    } else {
        console.log("Esto no se debería mostrar en pantalla");
    }
}

// Aquí se inicializa el Temporizador
function iniciarTemporizador () {
    // función para detener el temporizador
    if (intervalo) {
        detenerTemporizador();
        return;
    }
    
    intervalo = setInterval(function() {
        // Muestra tiempo en pantalla
        tiempoPantalla(minutos, segundos);
        
        // Función para cuenta regresiva
        if (minutos == 0 && segundos == 13) {
            reproducirAudio("audio__cuenta-regresiva");
        }

        // Cambia el tiempo
        segundos--;
        if (segundos === -1) {
            minutos--;
            if (minutos === -1) {
                reproducirAudio("audio__tono-beep");
                clearInterval(intervalo);
                tiempoPantalla(0,0);
                //alert("Se ha terminado el tiempo");
            }
            segundos = 59;
        }
    }, 1000);// 1000 milisegundos = 1 seg
}

// Función para detener el temporizador
function detenerTemporizador() {
    clearInterval(intervalo);
    intervalo = null;
}