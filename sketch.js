
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  obstacleGroup = new Group
  FoodGroup = new Group
  
  score = 0
}



function setup() {
   
    
  
  monkey = createSprite(100, 340, 200, 200)
  monkey.addAnimation('running', monkey_running)
  monkey.scale = 0.12

    

  ground = createSprite(200, 390, 400, 20)
  
  
  
  
}


function draw() {
  
  background('white')
  
  noStroke();
    fill("black");
    textAlign(CENTER, TOP);
    textSize(20);
    textFont("Arial")
  text("Score: "+ score, 200,50);
  score = Math.round(frameCount/10);
  
  monkey.velocityY += 0.5
  monkey.collide(ground)
  
  if(keyWentDown('space')&&monkey.y > 330){
    
    monkey.velocityY -= 15
    
  }
  
  spawnBananas()
  spawnRocks()
  drawSprites()
}



function spawnRocks(){
  
  if(frameCount%120===0){
    
        
    rock = createSprite(400, 350, 200, 200)
    rock.addImage(obstaceImage)
    rock.scale = 0.12
    rock.setVelocity(-4, 0)
    obstacleGroup.add(rock)
    
  }
  
}



function spawnBananas(){
  
  if(frameCount%60===0){
    
    rand = Math.round(random(50, 350))
    
    banana = createSprite(400, rand, 200, 200)
    banana.addImage(bananaImage)
    banana.scale = 0.12
    banana.setVelocity(-4, 0)
    FoodGroup.add(banana)
    
  }
  
}
