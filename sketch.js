//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var spiceBisciutEngine, spiceBiscuitsWorld;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box0;
var ground;
var ball;
var sling;

function setup() {
  createCanvas(3000,800);
 // createSprite(400, 200, 50, 50);

  spiceBisciutEngine = Engine.create();
  spiceBiscuitsWorld =  spiceBisciutEngine.world;
 
  ground = new Ground(1500, 600, 3000, 20);
  
  box1 = new Box(900,100,70,70);
  box2 = new Box(900,100,70,70);
  box3 = new Box(900,100,70,70);
  box4 = new Box(900,100,70,70);
  box5 = new Box(900, 100, 70, 70);
  
  box6 = new Box(970, 100, 70, 70);
  box7 = new Box(970, 100, 70, 70);
  box8 = new Box(970, 100, 70, 70);
  box9 = new Box(970, 100, 70, 70);
  box0 = new Box(970, 100, 70, 70);

  ball = new Ball(400, 25);

  sling = new SlingShot(ball.body, {x:800, y:50})
}

function draw() {
  background(200,255,255);  
  Engine.update(spiceBisciutEngine);
  rectMode(CENTER);
  

  //rect(200,200,50,50);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box0.display();
  ground.display();
  ball.display();
  sling.display();

  //drawSprites();
}