const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2;
var slingshot,block1;
var polygon;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base1 = new Ground(480,500,225,25);
	base2 = new Ground(750,275,225,25);

	polygon = new Polygon(100,490,20,20)

	block1 = new Block(400,450,40,50);
	block2 = new Block(440,450,40,50);
	block3 = new Block(480,450,40,50);
	block4 = new Block(520,450,40,50);
	block5 = new Block(560,450,40,50);

	block2_1 = new Block3(440,400,40,50);
	block2_2 = new Block3(480,400,40,50);
	block2_3 = new Block3(520,400,40,50);

	block3_1 = new Block4(480,350,40,50);

	block4_1 = new Block(670,225,40,50);
	block4_2 = new Block(710,225,40,50);
	block4_3 = new Block(750,225,40,50);
	block4_4 = new Block(790,225,40,50);
	block4_5 = new Block(830,225,40,50);
	
	block5_1 = new Block2(710,175,40,50);
	block5_2 = new Block2(750,175,40,50);
	block5_3 = new Block2(790,175,40,50);

	block6_1 = new Block4(750,125,40,50);
	ground = new Ground(400,635,1200,50);
	slingShot = new Slingshot(polygon.body,{x: 100, y: 450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

	textSize(15);
	text("Press space for 2nd Chance!",200,100);
  
	base1.display();
	base2.display();

	polygon.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();

	block2_1.display();
	block2_2.display();
	block2_3.display();

	block3_1.display();

	block4_1.display();
	block4_2.display();
	block4_3.display();
	block4_4.display();
	block4_5.display();

	block5_1.display();
	block5_2.display();
	block5_3.display();

	block6_1.display();
	slingShot.display();
	ground.display();

  drawSprites();
 
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	slingShot.fly();
}