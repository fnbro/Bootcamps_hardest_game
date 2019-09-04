
let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

let player = new Player();

function draw() {
    context.fillRect(player.yPos, player.xPos, player.width, player.height);
}
draw();

//context.rect(0, 0, 50, 50);
//	context.stroke();
	
document.onkeydown = e => {
	console.log(e.keyCode);
	  
    if(e.keyCode==39){
        player.xPos+=5;
       }
       if(e.keyCode==37) {
        player.xPos-=5;
       }
       if (e.keyCode == 38) {
        player.yPos-=5;
       }
       if (e.keyCode == 40){
        player.yPos+=5;
       }
       //canvas.width=canvas.width;
       //context.Rect(player.xPos, player.yPos, player.width, player.height);
      // context.stroke();
      
  }
      