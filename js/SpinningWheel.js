class SpinningWheel {
    constructor(context) {
        this.xPos = 50;
        this.yPos = 50;
        this.height = 100;
        this.width = 50;
        this.angle = 0;
        this.cx = this.xPos + 0.5 * this.width;
        this.cy = this.yPos + 0.5 * this.height;
        this.context = context;
        this.draw = this.draw.bind(this);
        }

draw() {
this.context.save() 
this.context.fillStyle = "red";

this.context.translate(this.cx, this.cy);             
this.context.translate(-this.cx, -this.cy);   

this.context.fillRect(this.xPos, this.yPos, this.width, this.height);

this.context.rotate( (Math.PI / 180) * 25)
this.context.restore()
}
checkCollision() {
    
}
}
