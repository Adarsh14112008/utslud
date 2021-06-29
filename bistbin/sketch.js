
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , Ball,wall1,wall2,wall3;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	Ball = new ball(100,height-200,20,20);
	wall1=new distbin(600,685,100,10); 
	wall2=new distbin(550,665,10,50); 
	wall3=new distbin(650,665,10,50); 
	text(mouseX+","+mouseY, mouseX,mouseY) 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  Ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(Ball.body,Ball.body.position,{x:85,y:-85})	

}
  text(mouseX+","+mouseY, mouseX,mouseY)
  drawSprites();
 
}



