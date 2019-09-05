let canvas = document.querySelector("canvas");
let level = 1

class HardestGame {
  constructor(context) {
    this.player = new Player(context);
    this.deathCounter = new DeathCounter(context, 0);
    this.obstacle = new Obstacle(context, 40, 100, this.deathCounter);
    this.obstacle1 = new Obstacle(context, 700, 140, this.deathCounter);
    this.obstacle2 = new Obstacle(context, 40, 180, this.deathCounter);
    this.obstacle3 = new Obstacle(context, 700, 220, this.deathCounter);
    this.obstacle4 = new Obstacle(context, 40, 260, this.deathCounter);
    this.obstacle5 = new Obstacle(context, 700, 300, this.deathCounter);
    this.win = new Win(context);
    this.context = context;
    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);
  }

  draw() {
    this.context.clearRect(0, 0, innerWidth, innerHeight)
    this.player.draw();
    this.obstacle.draw();
    this.obstacle1.draw();
    this.obstacle2.draw();
    this.obstacle3.draw();
    this.obstacle4.draw();
    this.obstacle5.draw();
    this.deathCounter.draw();
    this.win.draw();
    window.requestAnimationFrame(this.draw);
    this.player.win();
    this.obstacle.checkCollision(this.player);
    this.obstacle1.checkCollision(this.player);
    this.obstacle2.checkCollision(this.player);
    this.obstacle3.checkCollision(this.player);
    this.obstacle4.checkCollision(this.player);
    this.obstacle5.checkCollision(this.player);
  }
}
function distance(a, b) {
  return Math.sqrt((a.xPos - b.xPos) ** 2 + (a.yPos - b.yPos) ** 2);
}

let hardestGame = new HardestGame(canvas.getContext("2d"));
