var ctx = null,
    canvas = null;

function iniciar() {
    canvas = document.getElementById('dibujo');
    ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = "#F4D03F";
    ctx.arc(150, 75, 65, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(125, 55, 10, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(175, 55, 10, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(150, 90, 25, 3, 0 * Math.PI, true);
    ctx.fill();
}
window.addEventListener("load", iniciar, false);