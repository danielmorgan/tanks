'use strict';

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var canvas = document.body.appendChild(document.createElement('canvas'));
var ctx = canvas.getContext('2d');
window.addEventListener('resize', resize);
window.addEventListener('load', resize);
window.addEventListener('load', render);

function resize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    canvas.width = windowWidth;
    canvas.height = windowHeight;
}

function render() {
    requestAnimationFrame(render);
    background();
    tank1.draw();
    header.draw();
}

function background() {
    ctx.fillStyle = 'rgba(20, 30, 60, 1)';
    ctx.fillRect(0, 0, windowWidth, windowHeight);
}

function Header(fillStyle) {
    this.width = 400;
    this.height = 10;
    this.x = windowWidth - this.width - 20;
    this.y = 0;
    this.fillStyle = fillStyle;

    this.draw = function() {
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function Tank(fillStyle) {
    this.width = 20;
    this.height = 30;
    this.x = Math.ceil((windowWidth / 2) - (this.width / 2));
    this.y = Math.ceil((windowHeight / 2) - (this.height / 2));
    this.fillStyle = fillStyle;

    this.draw = function() {
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    this.move = function(event) {
        if (event.keyCode == 38) this.y += 1; // up
        if (event.keyCode == 40) this.y += -1; // down
        if (event.keyCode == 37) this.x += -1; // left
        if (event.keyCode == 39) this.x += 1; // right
    }
}

var header = new Header('rgba(150, 0, 100, 1)');
var tank1 = new Tank('rgba(20, 240, 20, 1)');
window.addEventListener('keydown', tank1.move, false);