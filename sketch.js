 //Create variables here
var girl,bgImg,backGround1,backGround2,background3,girlImage1,girlImg,coinImg
var gameState = 0;

function preload()
{
  //load images here 
  girlImage1 = loadAnimation('Girl1.png','Girl2.png','Girl1.png','Girl2.png');
  girlImg = loadImage("Girl1.png");
  coinImg = loadAnimation('c1.png','c2.png','c3.png','c4.png','c5.png','c6.png','c7.png','c8.png','c9.png','c10.png'); 
  bgImg = loadImage("path.png");
 
}

function setup() {
 createCanvas(600,700);

 backGround2 = createSprite(300,360,30,700);
  backGround2.addImage(bgImg);
  backGround2.scale = 4; 

  backGround1 = createSprite(300,350,20,700);
  backGround1.addImage(bgImg);
  backGround1.scale = 3;
  backGround1.velocityY = 2 

  coin = createSprite(300,20,20,10);
 // coin.addAnimation("coin",coinImg);
 // coin.scale = 1;
  coin.shapeColor = "pink";
  coin.velocityY = 2;

  //girlImage1.frameDelay = 13;
  girl = createSprite(300,500,50,50);
  girl.shapeColor = "red";
 // girl.addAnimation('running',girlImage1);
 // girl.scale = 0.5; 
}

function draw()
 {   
  background("black");  
 
  if(backGround1.y > 360)
  {    
     backGround1.y =  backGround1.height/2;
  }

   if(coin.y > 300)
   {
     coin.y = coin.height/2;
   }

  if(keyIsDown (UP_ARROW))
  {   
    girl.velocityY = -3;
  }

  if(girl.y <= 400)
  {
    girl.velocityY = 3;
  }

  if(girl.y >= 600)
  {
    girl.velocityY = 0; 
  }

  drawSprites();
}