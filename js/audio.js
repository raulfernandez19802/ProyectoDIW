var reproducir = new Audio();

function accionPlay1() {
    reproducir.pause();
    reproducir.src = "../audio/house.mp3";
    reproducir.play();
}

function accionPlay2() {
    reproducir.pause();
    reproducir.src = "../audio/house2.mp3";
    reproducir.play();
}

function accionPlay3() {
    reproducir.pause();
    reproducir.src = "../audio/house3.mp3";
    reproducir.play();
}

function accionPlay4() {
    reproducir.pause();
    reproducir.src = "../audio/house4.mp3";
    reproducir.play();
}

function iniciar() {
    sonido1 = document.getElementById("btn1");
    sonido2 = document.getElementById("btn2");
    sonido3 = document.getElementById("btn3");
    sonido4 = document.getElementById("btn4");
    sonido1.addEventListener("click", accionPlay1, false);
    sonido2.addEventListener("click", accionPlay2, false);
    sonido3.addEventListener("click", accionPlay3, false);
    sonido4.addEventListener("click", accionPlay4, false);
}
window.addEventListener("load", iniciar, false);