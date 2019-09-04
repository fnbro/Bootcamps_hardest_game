class StaticObstacle {
    constructor(context) {
		this.yPos = 100;
		this.xPos = 100;
		this.width = 30;
		this.height = 30;
		this.context = context;
    }
    draw() {
		this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
    }
}