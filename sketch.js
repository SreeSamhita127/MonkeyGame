var monkey, monkeymation;
var ground, groundage;
var gamestate, PLAY, END;
var rocksgroup, rockage, rock;
var invisiblound;
var over;
var restart, restartage;
var bananasoup, bananage;
var score = 0;
function preload() {
monkeymation = loadAnimation("Monkey_01.png","Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
groundage = loadImage("jungle.jpg");
rockage = loadImage("stone.png"); 
over = loadImage("Gameover.png");
restartage = loadImage("restart.png");
bananage = loadImage("banana.png");
}

function setup() {
  createCanvas(500,200);
  ground = createSprite(250,100,600,200);
  ground.addImage("groundage",groundage);
  ground.scale = 0.5;
  monkey = createSprite(50,160,20,20);
  monkey.addAnimation("monkeymation",monkeymation);
  monkey.scale = 0.1;
  Gover = createSprite(250,50,20,20);
  Gover.addImage("over",over);
  Gover.scale = 1/4;
  restart = createSprite(250,130,20,20);
  restart.addImage("restartage", restartage);
  restart.scale = 1/3;
  invisiblound = createSprite(250,190,500,10);
  END = 0;
  PLAY = 1;
  gamestate = PLAY;
  rocksgroup = new Group(); 
  bananasoup = new Group();
}

function draw() {
  
  
  background(220);
  
 invisiblound.visible = false;
  if (gamestate === PLAY){
    bananasoup.setVeelocityXEach = -4;
    Gover.visible = false;
    restart.visible = false;
    ground.velocityX = -4;
    if (ground.x < 100) {
      ground.x = 600
    }
    if(keyDown("space")) {
      monkey.velocityY = -11;
    }
    monkey.velocityY = monkey.velocityY + 0.6;  
    if(monkey.isTouching(bananasoup)){
      bananasoup.destroyEach(); 
      monkey.scale = monkey.scale + 0.01;
      score = score + 1;
    }
    if(monkey.isTouching(rocksgroup)){
      gamestate = END;
    }}
  bananasion();
  rockfunction();
    if(gamestate === END){
      monkey.velocityY = 0;
      ground.velocityX = 0;
      bananasoup.setVelocityXEach(0);
      bananasoup.destroyEach();
      rocksgroup.destroyEach();
      Gover.visible = true;
      restart.visible = true;
      if(mousePressedOver(restart)){
       reset();
      }}
     
  drawSprites();
  textSize(15);
  fill("black");
  text("score : " + score, 30,20);
  text.depth = ground.depth + 1;
  
  monkey.collide(invisiblound);
}
function rockfunction (){
  if(frameCount%100 === 0 ){
  var rocks = createSprite(600,170,10,10);
  rocks.velocityX = -4;
  rocks.addImage(rockage);
  rocks.scale = 0.1;
  rocks.lifetime = 200;  
  rocksgroup.add(rocks);
  }}
function bananasion (){
  if(frameCount%150 === 0){
   var banana = createSprite(510,100,10,10);
   banana.y = random(10,180);
   banana.velocityX = -4; 
   banana.addImage(bananage);
   banana.scale = 0.05;
   banana.lifetime = 200; 
   bananasoup.add(banana);
  }}
function reset (){
        gamestate = PLAY;
        score = 0;
        monkey.scale = 0.1;
  }