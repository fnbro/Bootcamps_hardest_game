canvas.width = window.innerWidth;
canvas.Height = window.innerHeight;

var ctx = canvas.getContext("2d");

var x = 200;
var y = 80;
var dx = 5;
var dy = 2;
var radius = 30;



function draw() {
    window.requestAnimationFrame(draw);

    ctx.clearRect(0,0,innerWidth,innerHeight)
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.stroke();

     if( x<50 || x>600) {
        dx=-dx;
    }

    x += dx;
}
draw();