let canvas = document.querySelector("canvas");

class HardestGame {
  constructor(context) {
    this.player = new Player(context, 1);
    this.deathCounter = new DeathCounter(context, 0);
    this.obstacle = new Obstacle(context, 40, 100, this.deathCounter);
    this.obstacle1 = new Obstacle(context, 700, 140, this.deathCounter);
    this.obstacle2 = new Obstacle(context, 40, 180, this.deathCounter);
    this.obstacle3 = new Obstacle(context, 700, 220, this.deathCounter);
    this.obstacle4 = new Obstacle(context, 40, 260, this.deathCounter);
    this.obstacle5 = new Obstacle(context, 700, 300, this.deathCounter);
    this.bouncingBall = new BouncingBall(context, 123, 100, this.deathCounter);
    this.bouncingBall1 = new BouncingBall(context, 290, 200, this.deathCounter);
    this.bouncingBall2 = new BouncingBall(context, 360, 300, this.deathCounter);
    this.cross = new Cross(context, 200, 200, 200, 0.03, this.deathCounter)
    this.cross1 = new Cross(context, 600, 200, 200, 0.03, this.deathCounter)
    this.win = new Win(context);
    this.context = context;
    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw());
  }
  draw() {
    if (this.player.level === 1) {
      this.context.clearRect(0, 0, innerWidth, innerHeight)
      this.player.draw();
      this.player.move();
      this.obstacle.draw();
      this.obstacle1.draw();
      this.obstacle2.draw();
      this.obstacle3.draw();
      this.obstacle4.draw();
      this.obstacle5.draw();
      this.deathCounter.draw();;
      this.win.draw();
      window.requestAnimationFrame(this.draw);
      this.obstacle.checkCollision(this.player);
      this.obstacle1.checkCollision(this.player);
      this.obstacle2.checkCollision(this.player);
      this.obstacle3.checkCollision(this.player);
      this.obstacle4.checkCollision(this.player);
      this.obstacle5.checkCollision(this.player);
      this.player.win();
    }
    if (this.player.level === 2) {
      this.context.clearRect(0, 0, innerWidth, innerHeight)
      this.player.win();
      this.win.draw();
      this.deathCounter.draw();
      this.player.draw();
      this.player.move();
      window.requestAnimationFrame(this.draw);
      this.cross.draw();
      this.cross.update();
      this.cross1.draw();
      this.cross1.update();
      this.cross.checkCollision(this.player);
      this.cross1.checkCollision(this.player);
      this.player.win();
    }
    if (this.player.level === 3) {
      this.context.clearRect(0, 0, innerWidth, innerHeight)
      this.player.draw();
      this.player.move();
      setInterval(this.bouncingBall.draw(), 10);
      setInterval(this.bouncingBall1.draw(), 10);
      setInterval(this.bouncingBall2.draw(), 10);
      this.deathCounter.draw();;
      this.win.draw();
      this.bouncingBall.checkCollision(this.player);
      this.bouncingBall1.checkCollision(this.player);
      this.bouncingBall2.checkCollision(this.player);
      window.requestAnimationFrame(this.draw);
      this.player.win();
    }
    this.player.update();
  }
}
function distance(a, b) {
  return Math.sqrt((a.xPos - b.xPos) ** 2 + (a.yPos - b.yPos) ** 2);
}


let hardestGame = new HardestGame(canvas.getContext("2d"));