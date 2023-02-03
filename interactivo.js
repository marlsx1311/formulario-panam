const $canvas = document.querySelector("#canvas"),
    $btnDescargar = document.querySelector("#btnDescargar"),
    $btnLimpiar = document.querySelector("#btnLimpiar"),
    $btnGenerarDocumento = document.querySelector("#btnGenerarDocumento");
const contexto = $canvas.getContext("2d");
const COLOR_PINCEL = "black";
const COLOR_FONDO = "white";
const GROSOR = 2;
let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
const obtenerXReal = (clientX) => clientX - $canvas.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - $canvas.getBoundingClientRect().top;
let haComenzadoDibujo = false; // Bandera que indica si el usuario está presionando el botón del mouse sin soltarlo


const limpiarCanvas = () => {
    // Colocar color blanco en fondo de canvas
    contexto.fillStyle = COLOR_FONDO;
    contexto.fillRect(0, 0, $canvas.width, $canvas.height);
};
limpiarCanvas();
$btnLimpiar.onclick = limpiarCanvas;
// Escuchar clic del botón para descargar el canvas
$btnDescargar.onclick = () => {
    const enlace = document.createElement('a');
    // El título
    enlace.download = "Firma.png";
    // Convertir la imagen a Base64 y ponerlo en el enlace
    enlace.href = $canvas.toDataURL();
    // Hacer click en él
    enlace.click();
};

window.obtenerImagen = () => {
    return $canvas.toDataURL();
};

$btnGenerarDocumento.onclick = () => {
    window.open("./index.html");
};
// Lo demás tiene que ver con pintar sobre el canvas en los eventos del mouse
$canvas.addEventListener("mousedown", evento => {
    // En este evento solo se ha iniciado el clic, así que dibujamos un punto
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.fillStyle = COLOR_PINCEL;
    contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto.closePath();
    // Y establecemos la bandera
    haComenzadoDibujo = true;
});
$canvas.addEventListener("mousemove", (evento) => {
    if (!haComenzadoDibujo) {
        return;
    }
    // El mouse se está moviendo y el usuario está presionando el botón, así que dibujamos todo

    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.moveTo(xAnterior, yAnterior);
    contexto.lineTo(xActual, yActual);
    contexto.strokeStyle = COLOR_PINCEL;
    contexto.lineWidth = GROSOR;
    contexto.stroke();
    contexto.closePath();
});
$canvas.addEventListener("touchstart", evento => {
    // En este evento solo se ha iniciado el clic, así que dibujamos un punto
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.fillStyle = COLOR_PINCEL;
    contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto.closePath();
    // Y establecemos la bandera
    haComenzadoDibujo = true;
});

$canvas.addEventListener("touchmove", (evento) => {
    if (!haComenzadoDibujo) {
        return;
    }
    // El mouse se está moviendo y el usuario está presionando el botón, así que dibujamos todo

    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.moveTo(xAnterior, yAnterior);
    contexto.lineTo(xActual, yActual);
    contexto.strokeStyle = COLOR_PINCEL;
    contexto.lineWidth = GROSOR;
    contexto.stroke();
    contexto.closePath();
});
["mouseup", "mouseout"].forEach(nombreDeEvento => {
    $canvas.addEventListener(nombreDeEvento, () => {
        haComenzadoDibujo = false;
    });
});




const tarjetaPresentacion = document.querySelector(".tarjetas__info");
const tarjetaDatos = document.querySelector(".tarjetas__datos");
const tarjetaEconomica = document.querySelector(".tarjetas__informacion-economica")
const tarjetaDeclaracion = document.querySelector(".tarjeta__declaracion")
const tarjetaConsideraciones = document.querySelector(".tarjeta__consideraciones")
const tarjetaAutorizacion = document.querySelector(".tarjeta__autorizacion")
const tarjetafirma = document.querySelector(".tarjeta__firma")

const botonSiguiente = document.querySelector(".buttons__siguiente");
const botonAtras = document.querySelector(".buttons__atras");





let cambioPagina = 0;
let botonEco = tarjetaEconomica.style.display;

botonSiguiente.addEventListener("click" , tarjetaSiguiente);

function tarjetaSiguiente(){
    
    if (cambioPagina == 0){
        tarjetaPresentacion.style.display = "none";
        tarjetaDatos.style.display = "flex";
        cambioPagina++;
    }    
    else if (cambioPagina == 1){
        tarjetaDatos.style.display = "none";
        tarjetaEconomica.style.display = "flex"; 
        cambioPagina++;
    }
    else if (cambioPagina == 2){
        tarjetaEconomica.style.display = "none";
        tarjetaDeclaracion.style.display = "block" 
        cambioPagina++;
    }else if (cambioPagina == 3){
        tarjetaDeclaracion.style.display = "none";
        tarjetaConsideraciones.style.display = "block";
        tarjetaAutorizacion.style.display = "block"; 
        cambioPagina++;
    }else if (cambioPagina == 4){
        tarjetaConsideraciones.style.display = "none"
        tarjetaAutorizacion.style.display = "none"; 
        tarjetafirma.style.display = "block"
        cambioPagina++;
    }else{
        alert("hola final")
    }
    
}

function tarjetaAtras(){
    console.log("si funciona")
    cambioPagina--
    
}

