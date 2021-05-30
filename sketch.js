const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var rubber,rock,rock2;
var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
rock= new Rock (600,600,50,50);
rock2 = new Rock (400,600,90,50);
rubber= new Rubber(800,600,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubbber.display();
    
 
}