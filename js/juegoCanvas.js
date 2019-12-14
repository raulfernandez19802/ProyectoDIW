var lienzo = null,
    canvas = null;
var x = 50,
    y = 50;
var pause = true;
var lastPress = null; //Variable para guardar la tecla presionada
//En nuestro juego, usaremos las teclas izquierda, arriba, derecha y abajo, cuyos valores numéricos son 37, 38, 39 y 40 respectivamente.
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;
const KEY_P = 80;

function iniciar() {
    canvas = document.getElementById('juego');
    lienzo = canvas.getContext('2d'); //obtenemos el contexto de dibujo
    run();
}

function run() {
    //requestAnimationFrame(): informa al navegador de que quieres realizar una animación y solicita que el navegador programe el repintado de la ventana para el próximo ciclo de animación.
    requestAnimationFrame(run); //animación optimizada
    accionesJuego();
    pintarLienzo(lienzo);
}

function accionesJuego() {
    if (!pause) {
        //Modificamos la dirección que tendrá nuestro player en función de la tecla presionada   
        if (lastPress == KEY_RIGHT) {
            x += 5;
            if (x >= canvas.width) {
                x = 0;
            }
        }
        if (lastPress == KEY_LEFT) {
            x -= 5;
            if (x <= 0) {
                x = canvas.width;
            }
        }
        if (lastPress == KEY_DOWN) {
            y += 5;
            if (y >= canvas.height) {
                y = 0;
            }
        }
        if (lastPress == KEY_UP) {
            y -= 5;
            if (y <= 0) {
                y = canvas.height;
            }
        }
        //verificaremos si el player ha salido del canvas, en cuyo caso, haremos que aparezca por el otro lado:
    }
    if (lastPress == KEY_P) {
        pause = !pause;
        lastPress = null;
    }


}

function pintarLienzo(lienzo) {
    lienzo.fillStyle = "#F7F9FA"; //le ponemos un color al lienzo
    lienzo.fillRect(0, 0, canvas.width, canvas.height); //Dibujamos el lienzo
    lienzo.fillStyle = '#0f0';
    lienzo.fillRect(x, y, 10, 10); //Dibujamos el jugador: va por posición x,y y es de 10x10 
    if (pause) {
        lienzo.textAlign = 'center';
        lienzo.fillText('PAUSE', 150, 75);
        lienzo.textAlign = 'left';
    }
}

document.addEventListener('keydown', function(evt) {
    //Creamos un manejador de evento para el teclado que se encargue de almacenar la tecla presionada. El evento que nos interesa en este caso es keydown
    lastPress = evt.keyCode;
}, false);
window.addEventListener("load", iniciar, false);