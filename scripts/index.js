/**
 * @Authors: Laura, Daniel, Ivan, Alejandro, Adrian.
 * @github: https://github.com/TuniversEquipo3/ejercicio-panaderia
 */


window.onload= function () {
    const IMAGENES= [
        'assets/images/840_560.jpg',
        'assets/images/maxresdefault.jpg',
        'assets/images/mejor-pan-2.jpg',
        'assets/images/descarga.jpg'
    ]
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

function pasarFoto() {
    if(posicionActual >= IMAGENES.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    renderizarImagen();
}
function retrocederFoto() {
    if(posicionActual <= 0) {
        posicionActual = IMAGENES.length - 1;
    } else {
        posicionActual--;
    }
    renderizarImagen();
}

function renderizarImagen () {
    $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
}

function playIntervalo() {
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
    // Desactivamos los botones de control
    $botonAvanzar.setAttribute('disabled', true);
    $botonRetroceder.setAttribute('disabled', true);
    $botonPlay.setAttribute('disabled', true);
    $botonStop.removeAttribute('disabled');

}
function stopIntervalo() {
    clearInterval(intervalo);
    // Activamos los botones de control
    $botonAvanzar.removeAttribute('disabled');
    $botonRetroceder.removeAttribute('disabled');
    $botonPlay.removeAttribute('disabled');
    $botonStop.setAttribute('disabled', true);
}

// Eventos
$botonAvanzar.addEventListener('click', pasarFoto);
$botonRetroceder.addEventListener('click', retrocederFoto);
$botonPlay.addEventListener('click', playIntervalo);
$botonStop.addEventListener('click', stopIntervalo);
// Iniciar
renderizarImagen();
}


   // Funcion para enrutar a la página principal
   function enrutamiento1() {
    window.location.href = 'index.html';
}