
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1 = new BobClass(400, 600, 40)
	bob2 = new BobClass(480, 600, 40)
	bob3 = new BobClass(520, 600, 40)

	bob4 = new BobClass(360, 600, 40)
	bob5 = new BobClass(320, 600, 40)


roof1 = new RoofClass(400, 200, 800, 20)
rope1= new Rope(bob1.body, roof1.body, 390, 1, 0, 0)
rope2= new Rope(bob2.body, roof1.body, 400, 1, 80, 0)
rope3= new Rope(bob3.body, roof1.body, 420, 1, 160, 0)
rope4= new Rope(bob4.body, roof1.body, 400, 1, -80, 0)
rope5= new Rope(bob5.body, roof1.body, 420, 1, -160, 0)

}


function draw() {

	fill("red")
	text(200, 200, mouseX+mouseY)
	circle(200, 200, 10)
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

roof1.display()
  rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display()

 drawSprites();
 
 
}

function keyPressed(){
	if (keyDown("up")){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:-500, y:500})
	}
}

