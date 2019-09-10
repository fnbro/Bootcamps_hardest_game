class DeathCounter {
    constructor(context,death) {
    this.death = death;
	this.context = context;
    }
    draw() {

        this.context.font = "20px Arial";
        this.context.fillText(`Deaths: ${this.death}`, 690, 20);
        this.context.fill();
    }
}