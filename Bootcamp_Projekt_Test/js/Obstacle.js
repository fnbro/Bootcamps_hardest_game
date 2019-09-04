class Obstacle {
  constructor(context, xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.dx = 10;
    this.dy = 2;
    this.radius = 30;
    this.context = context;
    this.draw = this.draw.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
  
  }
  draw() {
    this.context.beginPath();
    this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
    this.context.stroke();

    if (this.xPos < 20 || this.xPos > 750) {
      this.dx = -this.dx;
    }
    this.xPos += this.dx;
  }
  checkCollision(player) {
    if (distance(player, this) < player.radius + this.radius) {
      player.xPos = 20;
      player.yPos = 20;
    }
    else return false;
  }
}
