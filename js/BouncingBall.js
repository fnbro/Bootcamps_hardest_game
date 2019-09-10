class BouncingBall {
    constructor(context, xPos, yPos, deathCounter) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.speed = 30;
      this.ball = { xPos: xPos, yPos: yPos };
      this.radius = 15;
      this.moveX = Math.cos(Math.PI / 180 * 50) * 3;
      this.moveY = Math.sin(Math.PI / 180 * 50) * 3;
      this.context = context;
      this.draw = this.draw.bind(this);
      this.deathCounter = deathCounter;
    }
draw() {
if (this.ball.xPos > canvas.width - this.radius || this.ball.xPos < this.radius) this.moveX = -this.moveX;
if (this.ball.yPos > canvas.height - this.radius || this.ball.yPos < this.radius) this.moveY = -this.moveY;

    this.ball.xPos += this.moveX;
    this.ball.yPos += this.moveY;    

    this.context.save() 
    this.context.fillStyle = "black";

    this.context.beginPath();
    this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke();
}
}

