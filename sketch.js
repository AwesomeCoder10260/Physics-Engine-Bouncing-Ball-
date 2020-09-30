const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, bob;
var ball, ball_options, ground;
var options, ground_options;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;
  ball_options = {
    restitution: 2
  }
  ball = Bodies.circle(400,200,30, ball_options);
  World.add(world, ball)
  
  ground_options = {
    isStatic: true
    }
  ground = Bodies.rectangle(400,385, 800,40,ground_options);
  World.add(world, ground);
  ground.shapeColor = "blue";

  console.log(ball);
 //bob = createSprite(400,200,100,100);
 //bob.shapeColor = "blue";

 
 
}

function draw() {
  Engine.update(engine);
  background(0,150,0);
  rectMode(CENTER);
  ellipseMode(RADIUS);;
  rect(ground.position.x,ground.position.y,800,40);
  ellipse(ball.position.x,ball.position.y,30);
  //drawSprites();
}