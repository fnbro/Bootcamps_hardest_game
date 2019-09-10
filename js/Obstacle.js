class Obstacle {
  constructor(context, xPos, yPos, deathCounter) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.dx = 35;
    this.radius = 15;
    this.context = context;
    this.draw = this.draw.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.deathCounter = deathCounter;
  }
  draw() {
    this.context.save() 
    this.context.fillStyle = "black";

    this.context.beginPath();
    this.context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
    this.context.fill();
    this.context.stroke();

    if (this.xPos < 20 || this.xPos > 780) {
      this.dx = -this.dx;
    }
    this.xPos += this.dx;
    this.context.restore()

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