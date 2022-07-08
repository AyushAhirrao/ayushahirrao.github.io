var garden, rabbit;
var gardenImg, rabbitImg;
var edge1, edge2;
var leaf, leafimg;
var rleaf, rleafimg;
var oleaf, oleafimg;
var grass, grassimg;
var apple, appleimg;
var ascore,rscore,lscore,oscore;

function preload() {
    gardenImg = loadImage("garden.png");
    grassimg = loadImage("grass.png");
    leafimg = loadImage("leaf.png");
    rleafimg = loadImage("redImage.png");
    oleafimg = loadImage("orangeLeaf.png");
    appleimg = loadImage("apple.png");
    rabbitImg = loadImage("rabbit.png");
}

function setup() {

    createCanvas(400, 400);

    // Garden background
    garden = createSprite(200, 200);
    garden.addImage(gardenImg);

    //creating Rabbit
    rabbit = createSprite(180, 340, 30, 30);
    rabbit.scale = 0.09;
    rabbit.addImage(rabbitImg);

    // creating invisible edges
    edge1 = createSprite(1, 200, 10, 400);
    edge2 = createSprite(399, 200, 10, 400);
    edge1.visible = false;
    edge2.visible = false;

    // creating grass
    grass = createSprite(30, 340, 20, 20);
    grass.addImage(grassimg);
    grass.scale=0.2;
    grass = createSprite(370, 340, 20, 20);
    grass.addImage(grassimg);
    grass.scale=0.2;

    

}

function draw() {
    background(0);

    // textSize(25);
    // stroke("blue");
    // text("Apple(s) :",54,140);

    // Falling Objects 
    apples();
    leaves();
    redleaf();
    Orangeleaf();
    drawSprites();
    
    // Moving of rabbit over the mouse
    movement();

    // Creating edges 
    createEdgeSprites();
    rabbit.collide(edge1);
    rabbit.collide(edge2);
    

}
//function to spawn the apple
function apples() {
    // write your code here
    if (frameCount % 100 == 0) {
        apple = createSprite(10, 0, 40, 10);
        apple.velocityY = 10;
        apple.addImage(appleimg);
        apple.x = Math.round(random(300, 100));
        apple.scale = 0.1;
    }
    // if(apple.isTouching(rabbit)){
    //   ascore=ascore+1;
    
    // }

}


//function to spawn the leaf
function leaves() {
    // write your code here 
    if (frameCount % 70 == 0) {
        leaf = createSprite(10, 0, 40, 10);
        leaf.velocityY = 10;
        leaf.addImage(leafimg);
        leaf.x = Math.round(random(200, 80, 110));
        leaf.scale = 0.1;
    }

}

//function to spawn the Orangeleaf
function Orangeleaf() {
    // write your code here 
    if (frameCount % 130 == 0) {
        oleaf = createSprite(10, 0, 40, 10);
        oleaf.velocityY = 8;
        oleaf.addImage(oleafimg);
        oleaf.x = Math.round(random(200, 80, 110));
        oleaf.scale = 0.1;
    }

}
//function to spawn the Redleaf
function redleaf() {
    // write your code here 
    if (frameCount % 300 == 0) {
        rleaf = createSprite(10, 0, 40, 10);
        rleaf.velocityY = 12;
        rleaf.addImage(rleafimg);
        rleaf.x = Math.round(random(200, 80, 110));
        rleaf.scale = 0.1;
    }

}


















function movement() {
    rabbit.x = World.mouseX;
}