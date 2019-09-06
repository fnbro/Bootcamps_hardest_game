class Cross {
    constructor(context,x, y, radius, speedAngle) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.angle = 0;
      this.speedAngle = speedAngle;
      this.context = context;
    }
    draw() {
      this.context.save();
  
      this.context.translate(this.x, this.y);
      this.context.rotate(this.angle);
  
      this.context.fillStyle = "#990000";
      this.context.strokeStyle = "#990000";
      this.context.lineWidth = 5;
  
      // Circle
      this.context.beginPath();
      this.context.arc(0, 0, 10, 0, 2 * Math.PI);
      this.context.fill();
  
      // Line for x
      this.context.beginPath();
      this.context.moveTo(-this.radius, 0);
      this.context.lineTo(this.radius, 0);
      this.context.stroke();
  
      // Line for y
      this.context.beginPath();
      this.context.moveTo(0, -this.radius);
      this.context.lineTo(0, this.radius);
      this.context.stroke();
  
      this.context.restore();
    }
    update() {
        this.angle += this.speedAngle;
      }
    checkCollision(player) {
        for (let iAngle = 0; iAngle < 4; iAngle++) {
          let angle = this.angle + (iAngle * Math.PI) / 2;
          for (let delta = 0; delta <= this.radius; delta += this.radius / 10) {
            let x = this.x + delta * Math.cos(angle);
            let y = this.y + delta * Math.sin(angle);
            if (distance({ x: x, y: y }, player) < player.radius) {
            player.xPos = 20;
            player.yPos = 20;
            }
          }
        }
        return false;
      }
}