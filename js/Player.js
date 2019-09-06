class Player {
	constructor(context, level) {
		this.yPos = 20;
		this.xPos = 20;
		this.radius = 15;
		this.level = level;
		this.context = context;
		this.draw();
		document.onkeydown = e => {
			if (e.keyCode == 39) { this.xPos += 5.5; };
			if (e.keyCode == 37) { this.xPos -= 5.5; };
			if (e.keyCode == 38) { this.yPos -= 5.5; };
			if (e.keyCode == 40) { this.yPos += 5.5; };
			if (this.xPos <= 20) {this.xPos= 20};
			if (this.yPos <= 20) {this.yPos= 20};
			if (this.xPos+ this.radius > canvas.width) {this.xPos = canvas.width - this.radius};
			if (this.yPos+ this.radius > canvas.height) {this.yPos = canvas.height - this.radius};
		}
	}
	draw() {
		this.context.save() 
		this.context.fillStyle = "red";

		this.context.beginPath();
		this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
		this.context.fill();
		this.context.stroke();
		this.context.restore()
	}
	win() {
		if (this.xPos > 700 && this.yPos > 300 && this.level === 1) {
		this.level = 2;
		this.xPos = 20;
		this.yPos = 20;
		if (this.xPos > 700 && this.yPos > 300 && this.level === 2){
		location.replace("./winingscreen.html");
		}
	}
}
}