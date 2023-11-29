// Sección para animar botónes
var botones = document.getElementsByClassName("contenedor__botones-boton");
// Sección para temporizador
var cronometro = document.getElementsByClassName("contenedor__temporizador-cronometro");
var temporizadorBoton = document.getElementsByClassName("contenedor__inicio-boton");

// Se declaran valores de cronometro
let enfocar = 25;
let descansoCorto = 5;
let descansoLargo = 15;
let segundos = "00";
// Animación Botón
for (let contador = 0; contador < botones.length; contador++) {
    botones[contador].addEventListener("click", function () {
        let actual = document.getElementsByClassName("activo");
        actual[0].className = actual[0].className.replace("activo", "");
        this.className += " activo";
        let opcion = document.getElementsByClassName("activo")[0].innerHTML;
        if (opcion === 'Enfocar') {
            cronometro[0].innerHTML = `${enfocar}:${segundos}`;
        } else if (opcion === 'Descanso corto') {
            cronometro[0].innerHTML = `${descansoCorto}:${segundos}`;
        } else if (opcion === 'Descanso largo') {
            cronometro[0].innerHTML = `${descansoLargo}:${segundos}`;
        } else {
            console.log("Esto no se debería mostrar en pantalla");
        }
    })
}


// Inicia Temporizador y cambia botón de estado
function actualizarTiempo() {
    var temporizadorTexto = temporizadorBoton[0].innerHTML;
    // Se busca cual es la opción activa
    let opcion = document.getElementsByClassName("activo")[0].innerHTML;
    if (opcion === 'Enfocar') {
        console.log("Opción Enfocar");
        temporizadorBoton[0].innerHTML = temporizadorTexto === "Iniciar" ? "Detener" : "Iniciar";
    } else if (opcion === 'Descanso corto') {
        console.log("Opción Descanso corto");
        temporizadorBoton[0].innerHTML = temporizadorTexto === "Iniciar" ? "Detener" : "Iniciar";
    } else if (opcion === 'Descanso largo') {
        console.log("Opción Descanso largo");
        temporizadorBoton[0].innerHTML = temporizadorTexto === "Iniciar" ? "Detener" : "Iniciar";
    } else {
        console.log("Esto no se debería mostrar en pantalla");
    }
}
