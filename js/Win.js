class Win {
    constructor(context) {
		this.context = context;
    }
    draw() {

        this.context.font = "30px Arial";
        this.context.fillText("Goal", 730, 370);
        this.context.fill();
    }
}