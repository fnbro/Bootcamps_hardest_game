class Player {
	constructor(context) {
		this.yPos = 0;
		this.xPos = 0;
		this.width = 10;
		this.height = 10;
		this.context = context;
		this.draw();
		document.onkeydown = e => {
			if (e.keyCode == 39) { this.xPos += 5; };
			if (e.keyCode == 37) { this.xPos -= 5; };
			if (e.keyCode == 38) { this.yPos -= 5; };
			if (e.keyCode == 40) { this.yPos += 5; };
			this.draw();
		}
	}
	draw() {
		this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
	}
}













