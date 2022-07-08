var surfer, road;
var surfer_moving, road_moving;
var bor1, bor2;

function preload() {
  //pre-load images
  surfer_moving = loadAnimation("Runner-1.png", "Runner-2.png");
  road_moving = loadImage("path.jpg");

}

function setup() {
  createCanvas(300, 550);
  // path sprite 
  road = createSprite(150, 300, 300, 600);
  road.addImage("road", road_moving);
  road.scale = 0.9;
  road.velocityY = 10;


  // surfer sprite
  surfer = createSprite(150, 450, 30, 60);
  surfer.addAnimation("moving", surfer_moving);
  surfer.scale = 0.08;

  // border sprite
  bor1=createSprite(3,325,15,650);
bor1.visible=false;
bor2=createSprite(297,325,15,650);
bor2.visible=false;

}


function draw() {
  background(0);
  surfer.x = World.mouseX;
  if (road.y > 450) {
    road.y = road.height / 3;
  }
  
  createEdgeSprites();
  surfer.collide(bor1);
  surfer.collide(bor2);

  drawSprites();
}
