class Player {
	constructor(context) {
		this.yPos = 0;
		this.xPos = 0;
		this.width = 30;
		this.height = 30;
		this.context = context;
		this.draw();
		document.onkeydown = e => {
			if (e.keyCode == 39) { this.xPos += 5; };
			if (e.keyCode == 37) { this.xPos -= 5; };
			if (e.keyCode == 38) { this.yPos -= 5; };
			if (e.keyCode == 40) { this.yPos += 5; };
			if (this.xPos <= 0) {this.xPos= 0};
			if (this.yPos <= 0) {this.yPos= 0};
			if (this.xPos+ this.width > canvas.width) {this.xPos = canvas.width - this.width};
			if (this.yPos+ this.height > canvas.height) {this.yPos = canvas.height - this.height};
			this.draw();
		}
	}
	draw() { 
		this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
		this.context.fillStyle = "#FF0000";
	}
	win() {
		if (this.xPos > 700 && this.yPos > 300 )
		location.replace("./Game.html");
	}
	collisionDetection() {
		if(this.xPos == StaticObstacle.xPos && this.yPos == StaticObstacle.yPos){
                    console.log("Test");
                }
			}
}



//if(this.xPos == StaticObstacle.staticObstacle.xPos || this.yPos == StaticObstacle.staticObstacle.yPos){











