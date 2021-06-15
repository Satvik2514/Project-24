
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var rubber;
var hammer;
var stone;
var sand1,sand2,sand3,sand5;

function setup() {
	createCanvas(1920 , 965);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(970,957,1950,10);
	rubber = new Rubber(980,930);
	hammer = new Hammer(1000,1000);
	stone = new Stone(910,930);
	sand1 = new Sand(1000,930);
	sand2 = new Sand(1200,930);
	sand3 = new Sand(1400,930);
	sand4 = new Sand(1600,930);
	iron = new Iron(600,930);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("violet");

  ground.display();
  rubber.display();
  hammer.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();

  drawSprites();
 
}
