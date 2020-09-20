var rect1, rect2, rect3
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ballSprite=createSprite(150, 630, 30,30);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1=new Dustbin(600,651,100,10);
	
	rect2=new Dustbin(550,605,10,100);
	
	rect3=new Dustbin(650,605,10,100);
	
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 ball = new Ball(150, 100,30 );
	 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display();
  rect2.display();
  rect3.display();
  ball.display();
 fill("brown");
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,800,10);
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95})
	}
}


