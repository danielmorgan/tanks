import { ctx, stage } from './stage';

export default class Tank {
	constructor(fillStyle = 'rgba(20, 240, 20, 1)') {
	    this.width = 20;
	    this.height = 30;
        this.x = Math.ceil((stage.width / 2) - (this.width / 2));
        this.y = Math.ceil((stage.height / 2) - (this.height / 2));
	    this.fillStyle = fillStyle;
	    this.speed = 15;
	}

    draw() {
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    move(event) {
        if (event.keyCode === 38) this.y -= this.speed; // up
        if (event.keyCode === 40) this.y += this.speed; // down
        if (event.keyCode === 37) this.x -= this.speed; // left
        if (event.keyCode === 39) this.x += this.speed; // right
    }
}
