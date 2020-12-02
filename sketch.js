
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

//Create the Bodies Here.
	paper= new Paper(100,200,30)
	ground = new Ground(200, 655, 1500,20)
	ret1 = new Box(700, 645, 150, 20); 
	ret2 = new Box(625, 605, 20, 100);
	ret3 = new Box(775, 605, 20, 100);

	Engine.run(engine);
	
	}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ret1.display();
  ret2.display();
  ret3.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


