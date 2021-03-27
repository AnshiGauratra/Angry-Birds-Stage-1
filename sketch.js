const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2;
var pig1 , pig2;
var log1,log2, log3, log4;
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,590,1200,20);
  
  box1 = new Box(850,500,70,70);
  box2 = new Box(1050,500,70,70);
  //pig1 = new Pig(950,500)
  log1 = new Log(950,480,200,PI/2)
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  log1.display();
  //pig1.display();
  
}