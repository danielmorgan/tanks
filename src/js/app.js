'use strict';

var screen = document.getElementById('screen');
var screenWidth = screen.offsetWidth;
var screenHeight = screen.offsetHeight;
console.log(screenWidth, screenHeight);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

window.addEventListener('resize', resize);
window.addEventListener('load', resize);
window.addEventListener('load', render);

function resize() {
    screenWidth = screen.offsetWidth;
    screenHeight = screen.offsetHeight;
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function render() {
    requestAnimationFrame(render);
    background();
    header.draw();
    tank1.draw();
}

function background() {
    ctx.fillStyle = 'rgba(20, 110, 60, 1)';
    ctx.fillRect(0, 0, screenWidth, screenHeight);
}

function Header(fillStyle) {
    this.width = screenWidth - 200;
    this.height = screenHeight - 160;
    this.x = 100;
    this.y = 80;

    this.draw = function() {
        ctx.fillStyle = fillStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

function Tank(fillStyle) {
    var _this = this;
    this.width = 20;
    this.height = 30;
    this.x = Math.ceil((screenWidth / 2) - (this.width / 2));
    this.y = Math.ceil((screenHeight / 2) - (this.height / 2));
    this.fillStyle = fillStyle;
    this.speed = 15;

    this.draw = function() {
        ctx.fillStyle = _this.fillStyle;
        ctx.fillRect(_this.x, _this.y, _this.width, _this.height);
        this.visible = true;
    }

    this.move = function(event) {
        if (event.keyIdentifier === 'Up') _this.y -= _this.speed;
        if (event.keyIdentifier === 'Down') _this.y += _this.speed;
        if (event.keyIdentifier === 'Left') _this.x -= _this.speed;
        if (event.keyIdentifier === 'Right') _this.x += _this.speed;
    }
}

var header = new Header('rgba(255, 255, 255, 0.1)');
var tank1 = new Tank('rgba(20, 240, 20, 1)');
window.addEventListener('keydown', tank1.move, true);