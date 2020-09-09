var fixedRect,movingRect
var smallRect,bigRect
var box1,box2


function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400,200,50,100);
 movingRect=createSprite(600,300,50,100);
 fixedRect.shapeColor="red";
 movingRect.shapeColor="yellow";
 fixedRect.debug=true;
 movingRect.debug=true;
smallRect=createSprite(400,300,50,100);
bigRect=createSprite(600,300,50,100)
smallRect.shapeColor="pink";
bigRect.shapeColor="orange";
smallRect.debug=true;
bigRect.debug=true;
smallRect.velocityX=3;
bigRect.velocityX=-3;
box1=createSprite(300,200,50,100);
box2=createSprite(500,200,50,100);
 box1.shapeColor="orange";
 box2.shapeColor="brown";
 box1.debug=true;
 box2.debug=true;
}

function draw() {
  background(0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
 
if (isTouching(box2,movingRect)){
  box2.shapeColor="green";
    movingRect.shapeColor="blue";
}else{
  box2.shapeColor="red";
    movingRect.shapeColor="yellow";
}
bounceOff(smallRect,bigRect);
  drawSprites();
}
