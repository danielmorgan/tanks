import { ctx, stage, background } from './stage';
import Tank from './Tank';

function render() {
    requestAnimationFrame(render);
    background();
    tank1.draw();
}
window.addEventListener('load', render);

var tank1 = new Tank();
window.addEventListener('keydown', event => tank1.move(event));
