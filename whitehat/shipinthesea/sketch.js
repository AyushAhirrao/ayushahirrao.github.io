var ship, sea;
var seaback, ship_moving;
function preload() {
  ship_moving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  seaback = loadAnimation("sea.png");
}

function setup() {
  createCanvas(600, 400);
  // creating sea background 
  sea = createSprite(400, 150);
  sea.addAnimation("running", seaback)
  sea.scale = 0.3;

  // creating ship sprite
  ship = createSprite(100, 400, 90, 30);
  ship.addAnimation("running", ship_moving)
  
  
  ship.scale = 0.3;
  ship.x = 150;
  ship.y = 200;
}

function draw() {
  background("blue");
  // createEdgeSprites();
  // ship.collide(edges);
  if(keyDown("left")){
    ship.x = ship.x-5;
  }
  if(keyDown("right")){
    ship.x = ship.x+5;
  }
  drawSprites();

}