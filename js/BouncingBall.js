class BouncingBall {
    constructor(context, xPos, yPos, radius, deathCounter) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.ball = { xPos: xPos, yPos: yPos };
      this.radius = radius;
      this.moveX = Math.cos(Math.PI / 180 * 500) * 10;
      this.moveY = Math.sin(Math.PI / 180 * 50) * 10;
      this.context = context;
      this.draw = this.draw.bind(this);
      this.deathCounter = deathCounter;
    }
draw() {
if (this.xPos > canvas.width - this.radius || this.xPos < this.radius) this.moveX = -this.moveX;
if (this.yPos > canvas.height - this.radius || this.yPos < this.radius) this.moveY = -this.moveY;

    this.xPos += 2 * this.moveX;
    this.yPos += 2 * this.moveY;    

    this.context.save() 
    this.context.fillStyle = "black";

    this.context.beginPath();
    this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke();
}
checkCollision(player) {
    if (distance(player, this) < player.radius + this.radius) {
      player.xPos = 20;
      player.yPos = 40;
      this.deathCounter.death += 1;
    }
    else return false;
  }
}

