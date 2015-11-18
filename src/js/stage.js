let screen = document.getElementById('screen');
let width = screen.offsetWidth;
let height = screen.offsetHeight;

export var canvas = document.getElementById('canvas');
export var ctx = canvas.getContext('2d');
export var stage = { width: width, height: height };

window.addEventListener('resize', resize);
window.addEventListener('load', resize);

function resize() {
    width = screen.offsetWidth;
    height = screen.offsetHeight;
    canvas.width = width;
    canvas.height = height;
}

export function background() {
    ctx.fillStyle = 'rgba(20, 110, 60, 1)';
    ctx.fillRect(0, 0, width, height);
}
