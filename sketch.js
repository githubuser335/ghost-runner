var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.2
  
}

function draw() {
  background(200);
  
  if(tower.y > 600){
      tower.y = 500
    }
    drawSprites()
    console.log(frameCount)
    spawnDoors() 


   
    if(keyDown("space")){
     
    
      ghost.velocityY=-2

    }
  }
function spawnDoors(){
  if(frameCount%240===0){
door=createSprite(Math.round(random(120,400)),-50)
door.addImage("door",doorImg)
door.velocityY=1
//door.x=Math.round(random(120,400))
door.lifetime=800
climber=createSprite(door.x,10)
 climber.addImage("climber",climberImg)
climber.velocityY=1
climber.lifetime=800
}






}