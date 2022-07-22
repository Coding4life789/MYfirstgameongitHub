
function setup() {
  createCanvas(1000,500);


   box=createSprite(500,500,50,50)
   box.shapeColor="red"
   box.velocityX=5
   box.velocityY=-5
   edges=createEdgeSprites() 
   
}

function draw() 
{
  background(30);
  box.bounceOff(edges)
if(keyIsDown(DOWN_ARROW)){
  box.y+=5
}



  drawSprites()
  

}




