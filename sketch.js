
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

ball=new paper(50,650,30)
ground1=new ground(400,680,800,10)	
b1=new ground(600,665,150,25)
b2=new ground(515,625,25,100)
b3=new ground(660,625,25,100)



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display();
 ground1.display();
 b1.display();
 b2.display();
 b3.display();
}

function keyPressed(){
if (keyCode === 32){

Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-30});


    }
}




