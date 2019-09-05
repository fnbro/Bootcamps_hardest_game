class Player {
	constructor(context) {
		this.yPos = 20;
		this.xPos = 20;
		this.radius = 15;
		this.context = context;
		this.draw();
		document.onkeydown = e => {
			if (e.keyCode == 39) { this.xPos += 10; };
			if (e.keyCode == 37) { this.xPos -= 10; };
			if (e.keyCode == 38) { this.yPos -= 10; };
			if (e.keyCode == 40) { this.yPos += 10; };
			if (this.xPos <= 20) {this.xPos= 20};
			if (this.yPos <= 20) {this.yPos= 20};
			if (this.xPos+ this.radius > canvas.width) {this.xPos = canvas.width - this.radius};
			if (this.yPos+ this.radius > canvas.height) {this.yPos = canvas.height - this.radius};
			this.draw();
		}
	}
	draw() {
		this.context.fillStyle = "yellow";

		this.context.beginPath();
		this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
		this.context.fill();
		this.context.stroke();
	}
	win() {
		if (this.xPos > 700 && this.yPos > 300 )
		location.replace("./Game.html");
	}
}



//if(this.xPos == StaticObstacle.staticObstacle.xPos || this.yPos == StaticObstacle.staticObstacle.yPos){











