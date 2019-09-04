let canvas = document.querySelector("canvas");

class HardestGame {
  constructor(context) {
    this.player = new Player(context);
    this.obstacle = new Obstacle(context, 40, 100);
    this.obstacle1 = new Obstacle(context, 40, 200);
    this.context = context;
    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);
  }
  draw() {
    this.context.clearRect(0, 0, innerWidth, innerHeight)
    this.player.draw();
    this.obstacle.draw();
    this.obstacle1.draw();
    window.requestAnimationFrame(this.draw);
    this.player.win();
    this.obstacle.checkCollision(this.player);
    this.obstacle1.checkCollision(this.player);
  }
}
function distance(a, b) {
  return Math.sqrt((a.xPos - b.xPos) ** 2 + (a.yPos - b.yPos) ** 2);
}

let hardestGame = new HardestGame(canvas.getContext("2d"));
