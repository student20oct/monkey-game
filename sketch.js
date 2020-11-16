var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground
var survivalTime

function preload(){
  
// Loading Images
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
// Creating Monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
// Creating Ground
  ground = createSprite(400,350,900,10);
  ground.velocityX =-4;
  ground.shapeColor = "lightgreen";
  
// Creating group for banana and obstacles
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  survivalTime = 0;
}


function draw() {

  background("lightblue");
  
// Moving the Ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
//jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
    
//add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
//collider to prevent monkey from falling down
  monkey.collide(ground);
   
  
// Functions
  spawnObstacles();
  spawnBananas();
  drawSprites();   
  
// Displaying score
  survivalTime = Math.ceil(frameCount/frameRate());
  stroke = ("black");
  textSize(20);
  fill = ("black");
  text("Survival Time:" + survivalTime,100,50);
  
}

function spawnBananas() {
  
   if (frameCount % 80 === 0){
   banana = createSprite(600,165,10,40);
   banana.y = Math.round(random(120,200));  
   banana.addImage(bananaImage);
   banana.velocity.x = -6;
   banana.scale = 0.1;
   banana.lifetime = 100;
   bananaGroup.add(banana);
  }
}

function spawnObstacles() {
  
  if (frameCount % 60 === 0){
   obstacle = createSprite(600,330,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -6;
   obstacle.scale = 0.1;
   obstacle.lifetime = 100;
   obstacleGroup.add(obstacle);
  }
}