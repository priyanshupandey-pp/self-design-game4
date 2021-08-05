
var ball,stand1,stand2,stand3,stand4,net;
var standGroup1,standGroup2,standGroup3,standGroup4;

function preload(){
  ball1=loadImage("100742.png")
  standimg=loadImage("stand.png")
  net1=loadImage("net.png")
  abcd=loadImage("abcd.jpg")
}
function setup() {
  createCanvas(1000,650);
 ball=createSprite(520, 600, 50, 50);
 ball.addImage("asdf",ball1)
 ball.scale=0.0800
standGroup1=new Group()
standGroup2=new Group()
standGroup3=new Group()
standGroup4=new Group()
 net=createSprite(500,60,10,10)
 net.addImage("asd",net1)
 net.scale=0.4

 for (var i = 50; i < 1000; i=i+120) {
 stand1 = createSprite(i, 180, 20, 20);
  stand1.addImage(standimg);
  stand1.scale=0.0400
  standGroup1.add(stand1)
 }
  for (var i = 100; i < 1000; i=i+120) {
  var stand2 = createSprite(i, 320, 20, 20);
  stand2.addImage(standimg);
  stand2.scale=0.0400
  standGroup2.add(stand2)
}
for (var i = 50; i < 1000; i=i+120) {
  var stand3 = createSprite(i,460, 20, 20);
  stand3.addImage(standimg);
  stand3.scale=0.0400
  standGroup3.add(stand3)
 }
 for (var i = 100; i < 1000; i=i+120) {
  var stand4 = createSprite(i, 620, 20, 20);
  stand4.addImage(standimg);
  stand4.scale=0.0400
  standGroup4.add(stand4)
}
}

function draw() {
  background(abcd);
  if (keyDown("up")) {
    ball.velocityY = -2;
  }
  if (keyDown("right")) {
    ball.velocityX= 3;
  }
  if (keyDown("left")) {
    ball.velocityX = -3;
  }
  if(ball.position.y<100){
    fill("silver")
    textSize(80)
    text("you win",350,250)
    ball.velocityY=0;
    ball.velocityX=0;
  }
 
   if(ball.isTouching(standGroup1)){
    fill("blue")
    textSize(80)
    text("you lose",350,250)
    ball.velocityY=0;
    ball.velocityX=0;
   }
   if(ball.isTouching(standGroup2)){
    fill("blue")
    textSize(80)
    text("you lose",350,250)
    ball.velocityY=0;
    ball.velocityX=0;
   }
   if(ball.isTouching(standGroup3)){
    fill("blue")
    textSize(80)
    text("you lose",350,250)
    ball.velocityY=0;
    ball.velocityX=0;
   }
   if(ball.isTouching(standGroup4)){
    fill("blue")
    textSize(80)
    text("you lose",350,250)
    ball.velocityY=0;
    ball.velocityX=0;
   }
  drawSprites();
}