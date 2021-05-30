const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Events= Matter.Events;

var world, engine;

var particles= [];
var plinkos= [];
var divisions=[];   

 var DivisionHeight= 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 ground1= new Ground(240,790,475,20);

for(var k=0; k <= width; k =k+80){
  divisions.push(new Divison(k, height-DivisionHeight/2, 10 , DivisionHeight))
}

for(var j=40; j<=width; j= j+50 ){
  plinkos.push(new Plinko(j,75));
}

for(var j=50; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}

for(var j=50; j<=width-20; j=j+50){
  plinkos.push(new Plinko(j,275));
}

for(var j=50; j<=width-30; j=j+50){
  plinkos.push(new Plinko(j,375));
}

for(var j=50; j<=width-30; j=j+50){
  plinkos.push(new Plinko(j,475));
}





Engine.run(engine);

}

function draw() {

Engine.update(engine);
background(0); 


if(frameCount% 60===0){
  particles.push(new Particles(random(width/2-10,width/2+10,),10,10))
}

for(var j=0; j< plinkos.length; j++){
plinkos[j].display();
}


for(var k=0; k < divisions.length; k++){
  divisions[k].display();
}

for(var i=0; i<particles.length; i++ ){
  particles[i].display();
}

  
  
  ground1.display();
}