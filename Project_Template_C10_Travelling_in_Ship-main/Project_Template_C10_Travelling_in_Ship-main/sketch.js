
var sea,seaImage;
var ship,shipImg1,shipImg2;

function preload(){
  
seaImg=loadImage("sea.png")
  shipImg1=loadAnimation("ship-1.png","ship-2.png");
 shipImg2=loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
  
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-3
  sea.scale=0.3;
  
  ship=createSprite(130,250,30,30);
  ship.scale=0.3;
  ship.addAnimation("moving",shipImg1);
   ship.addAnimation("shiplightOn",shipImg2);
  
  
}

function draw() {
  background("blue");
  
  
 if(sea.x<0)
 {
   sea.x=sea.width/8   
 }
  if (keyDown("space"))
    
    
    { ship.addAnimation("moving",shipImg2);
     
     
    }
  drawSprites();
  
}