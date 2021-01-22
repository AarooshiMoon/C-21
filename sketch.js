var fixedRect, movingRect;
var box1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1=createSprite(200,500,50,100);
  box1.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  }
  else if(isTouching(movingRect,box1)){
    movingRect.shapeColor="red";
    box1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    box1.shapeColor="green";
  }

  drawSprites();
}
