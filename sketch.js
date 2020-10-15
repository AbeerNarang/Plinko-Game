const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var divisionHeight = 250;
var division = [];
var plinko = [];
var particle = [];

function setup() {
  createCanvas(490,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,595,490,10);
  Engine.run(engine);
}

function draw() {
  background(0);  
  drawSprites();
  for(var i = 10; i <=width; i = i+79){
  division.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }
  for(var i = 0; i < division.length; i++){
  division[i].display();
  }
  for(var l = 15; l<=width; l = l+50){
  plinko.push(new Plinko(l,50,10))
  }
  for(var l = 25; l<=width-10; l = l+60){
  plinko.push(new Plinko(l,150,10))
  }
  for(var l = 35; l<=width-20; l = l+70){
  plinko.push(new Plinko(l,250,10))
  }
  for(var l = 0; l < plinko.length; l++){
  plinko[l].display();
  }
  if(frameCount%20===0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var k = 0; k < particle.length; k++){
  particle[k].display();
  }
  ground.display();
}