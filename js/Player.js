class Player {
	constructor(context, level) {
		this.yPos = 40;
		this.xPos = 20;
		this.vx = 0;
		this.vy = 0;
		this.radius = 15;
		this.level = level;
		this.context = context;
		this.draw();
	}
	draw() {
		this.context.save()
		this.context.fillStyle = "red";

		this.context.beginPath();
		this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
		this.context.fill();
		this.context.stroke();
		this.context.restore()

		this.context.font = "20px Arial";
		this.context.fillText(`Level: ${this.level}`, 0, 20);

	}
	update() {
		this.xPos += 1 * this.vx;
		this.yPos += 1 * this.vy;
		if (this.xPos <= 20) { this.xPos = 20 };
		if (this.yPos <= 20) { this.yPos = 20 };
		if (this.xPos + this.radius > canvas.width) { this.xPos = canvas.width - this.radius };
		if (this.yPos + this.radius > canvas.height) { this.yPos = canvas.height - this.radius };
	}
	move() {
		document.onkeydown = e => {
			if (e.keyCode === 37) { this.vx = -5; }
			if (e.keyCode === 39) { this.vx = 5; }
			if (e.keyCode === 38) { this.vy = -5; }
			if (e.keyCode === 40) { this.vy = 5; }
		}
		document.onkeyup = e => {
			if (e.keyCode === 37 && this.vx < 0) { this.vx = 0; }
			if (e.keyCode === 39 && this.vx > 0) { this.vx = 0; }
			if (e.keyCode === 38 && this.vy < 0) { this.vy = 0; }
			if (e.keyCode === 40 && this.vy > 0) { this.vy = 0; }
		}
	}
	win() {
		if (this.xPos > 700 && this.yPos > 300 && this.level === 3) {
			location.replace("./winningscreen.html");
		}
		if (this.xPos > 700 && this.yPos > 300 && this.level === 2) {
			this.level += 1;
			this.xPos = 20;
			this.yPos = 40;
			this.vx = 0;
			this.vy = 0;
		}
		if (this.xPos > 700 && this.yPos > 300 && this.level === 1) {
			this.level += 1;
			this.xPos = 20;
			this.yPos = 40;
			this.vx = 0;
			this.vy = 0;

		}
	}
}
// the old movement of the ball
/*
document.onkeydown = e => {
	if (e.keyCode == 39) { this.xPos += 10; };
	if (e.keyCode == 37) { this.xPos -= 10; };
	if (e.keyCode == 38) { this.yPos -= 10; };
	if (e.keyCode == 40) { this.yPos += 10; };
	if (this.xPos <= 20) { this.xPos = 20 };
	if (this.yPos <= 20) { this.yPos = 20 };
	if (this.xPos + this.radius > canvas.width) { this.xPos = canvas.width - this.radius };
	if (this.yPos + this.radius > canvas.height) { this.yPos = canvas.height - this.radius };
}
*/
