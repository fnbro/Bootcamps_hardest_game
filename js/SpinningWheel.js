/*
class SpinningWheel {
    constructor(context) {
        this.xPos = 50;
        this.yPos = 50;
        this.height = 50;
        this.width = 50;
        this.context = context;
        this.angle = 0;
        this.cx = this.xPos + 0.5 * this.width;
        this.cy = this.yPos + 0.5 * this.height;

        }
draw() {
this.context.fillStyle = "#ff0000";
this.context.fillRect(this.xPos, this.Posy, this.width, this.height);  //draw normal shape

this.context.translate(this.cx, this.cy);              //translate to center of shape
this.context.rotate( (Math.PI / 180) * 25);  //rotate 25 degrees.
this.context.translate(-this.cx, -this.cy);            //translate center back to 0,0

this.context.fillStyle = "#0000ff";
this.context.fillRect(this.xPos, this.yPos, this.width, this.height);
}
}
*/