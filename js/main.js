let canvas = document.querySelector("canvas");

class HardestGame {
  constructor(context) {
    this.player = new Player(context, 1);
    this.deathCounter = new DeathCounter(context, 0);
    this.horizontaleBall = new HorizontaleBall(context, 20, 100, this.deathCounter);
    this.horizontaleBall1 = new HorizontaleBall(context, 780, 140, this.deathCounter);
    this.horizontaleBall2 = new HorizontaleBall(context, 20, 180, this.deathCounter);
    this.horizontaleBall3 = new HorizontaleBall(context, 780, 220, this.deathCounter);
    this.horizontaleBall4 = new HorizontaleBall(context, 20, 260, this.deathCounter);
    this.horizontaleBall5 = new HorizontaleBall(context, 780, 300, this.deathCounter);
    this.bouncingBall = new BouncingBall(context, 100, 100, 15, this.deathCounter);
    this.bouncingBall1 = new BouncingBall(context, 500, 150, 15, this.deathCounter);
    this.bouncingBall2 = new BouncingBall(context, 200, 200, 15, this.deathCounter);
    this.bouncingBall3 = new BouncingBall(context, 300, 280, 15, this.deathCounter);
    this.bouncingBall4 = new BouncingBall(context, 350, 350, 15, this.deathCounter);
    this.bouncingBall5 = new BouncingBall(context, 550, 100, 15, this.deathCounter);
    this.bouncingBall6 = new BouncingBall(context, 600, 300, 15, this.deathCounter);
    this.bouncingBall7 = new BouncingBall(context, 600, 300, 30, this.deathCounter);
    this.cross = new Cross(context, 200, 200, 185, 0.05, this.deathCounter)
    this.cross1 = new Cross(context, 600, 200, 185, 0.05, this.deathCounter)
    this.cross2 = new Cross(context, 400, 200, 200, 0.05, this.deathCounter)
    this.verticalBall = new VerticalBall(context, 180, 300, this.deathCounter);
    this.verticalBall1 = new VerticalBall(context, 620, 300, this.deathCounter);
    this.win = new Win(context);
    this.context = context;
    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw());
  }
  draw() {
    if (this.player.level === 4) {
      this.context.clearRect(0, 0, innerWidth, innerHeight)
      this.player.draw();
      this.player.move();
      this.cross2.draw();
      this.cross2.updateRight();
      this.verticalBall.draw();
      this.verticalBall1.draw();
      setInterval(this.bouncingBall7.draw(), 10);
      this.deathCounter.draw();;
      this.win.draw();
      this.cross2.checkCollision(this.player);
      this.verticalBall.checkCollision(this.player);
      this.verticalBall1.checkCollision(this.player);
      this.bouncingBall7.checkCollision(this.player);
      window.requestAnimationFrame(this.draw);
      this.player.win();
    }
    if (this.player.level === 3) {
      this.context.clearRect(0, 0, innerWidth, innerHeight)
      this.player.draw();
      this.player.move();
      setInterval(this.bouncingBall.draw(), 10);
      setInterval(this.bouncingBall1.draw(), 10);
      setInterval(this.bouncingBall2.draw(), 10);
      setInterval(this.bouncingBall3.draw(), 10);
      setInterval(this.bouncingBall4.draw(), 10);
      setInterval(this.bouncingBall5.draw(), 10);
      setInterval(this.bouncingBall6.draw(), 10);
      this.deathCounter.draw();;
      this.win.draw();
      this.bouncingBall.checkCollision(this.player);
      this.bouncingBall1.checkCollision(this.player);
      this.bouncingBall2.checkCollision(this.player);
      this.bouncingBall3.checkCollision(this.player);
      this.bouncingBall4.checkCollision(this.player);
      this.bouncingBall5.checkCollision(this.player);
      this.bouncingBall6.checkCollision(this.player);
      window.requestAnimationFrame(this.draw);
      this.player.win();
    }
    if (this.player.level === 2) {
      this.context.clearRect(0, 0, innerWidth, innerHeight)
      this.player.win();
      this.win.draw();
      this.deathCounter.draw();
      this.player.draw();
      this.player.move();
      this.cross.draw();
      this.cross.updateLeft();
      this.cross1.draw();
      this.cross1.updateRight();
      this.cross.checkCollision(this.player);
      this.cross1.checkCollision(this.player);
      window.requestAnimationFrame(this.draw);
      this.player.win();
    }
    if (this.player.level === 1) {
      this.context.clearRect(0, 0, innerWidth, innerHeight)
      this.player.draw();
      this.player.move();
      this.horizontaleBall.draw();
      this.horizontaleBall1.draw();
      this.horizontaleBall2.draw();
      this.horizontaleBall3.draw();
      this.horizontaleBall4.draw();
      this.horizontaleBall5.draw();
      this.deathCounter.draw();;
      this.win.draw();
      this.horizontaleBall.checkCollision(this.player);
      this.horizontaleBall1.checkCollision(this.player);
      this.horizontaleBall2.checkCollision(this.player);
      this.horizontaleBall3.checkCollision(this.player);
      this.horizontaleBall4.checkCollision(this.player);
      this.horizontaleBall5.checkCollision(this.player);
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