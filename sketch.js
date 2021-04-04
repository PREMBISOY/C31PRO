const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload(){

  


}




function setup() {
  createCanvas(480,800);




engine = Engine.create();
world = engine.world;

  //createSprite(400, 200, 50, 50);
 ground = new Ground(400,795,800,10)
 Engine.run(engine);



 for(var j = 40; j <= width; j=j+50)
{

plinkos.push(new Plinko(j,75,10));

}

for(var j = 15; j <= width-10; j=j+50)
{

plinkos.push(new Plinko(j,175,10));

}

for(var j = 15; j <= width-10; j=j+50)
{

plinkos.push(new Plinko(j,275,10));

}

for(var j = 15; j <= width-10; j=j+50)
{

plinkos.push(new Plinko(j,375,10));

}

for(var j = 15; j <= width-10; j=j+50)
{

plinkos.push(new Plinko(j,475,10));

}


 for(var k=0; k<=width;k = k+80)
{
divisions.push(new Divisions(k, height-height/8,10, height/4));

  }

}



function draw() {
  background(0,0,0); 

  if(keyDown ('space'))
  {
    particles.push(new Particles(random(0,480),0,10));
  }
  
  
for(var j =0; j < particles.length; j++)
{
  particles[j].display();
}





for(var l=0; l< divisions.length; l++)
{
divisions[l].display();
 }
for(var i = 0; i<plinkos.length; i++){

  plinkos[i].display();
}

ground.display();
  drawSprites();
}