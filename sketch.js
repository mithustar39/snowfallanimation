const World= Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var backgroundImg;
var snowfall;
var snowImage;
var engine,world;
var fall=[];

function preload(){
  backgroundImg=loadImage("snow1.jpg"); 
  snowImage=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine= Engine.create();
  world= engine.World;
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);
  if(frameCount%5 == 0){
    fall.push(snowfall=new Snowfall())
  }
  for(var i=0;i<fall.length;i++){
    fall[i].display();
  }
 
  drawSprites();
}