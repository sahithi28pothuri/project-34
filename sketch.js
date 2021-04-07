const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var roof, rope1,rope2, rope3, rope4, rope5
var ball1, ball2, ball3, ball4, ball5;
var bobDiameter = 40;

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight);

	engine = Engine.create();
	world = engine.world;

	
	bobDiameter = 40;

	//Create the Bodies Here.
	roof = new Roof(300,50,400,25);

	ball1 = new Ball(200,720,20);
	ball2 = new Ball(250,720,20);

	ball3 = new Ball(300,720,20);
	ball4 = new Ball(350,720,20);
	ball5 = new Ball(400,720,20);

	rope1 = new Rope(ball1.body,{x:200,y:50})
	rope2 = new Rope(ball2.body,{x:250,y:50})
	rope3 = new Rope(ball3.body,{x:300,y:50})
	rope4 = new Rope(ball4.body,{x:350,y:50})
	rope5 = new Rope(ball5.body,{x:400,y:50})
}


function draw() {
	background(20);
	Engine.update(engine);
	
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	roof.display();

	fill("green");
	text("press up arrow to swing the pendulum",windowWidth/2-500,windowHeight-600);
	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-10,y:-20});
	}
}
		


