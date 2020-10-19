const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground, box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    myengine = Engine.create();
    myworld = myengine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(myworld,ground);

   box1= new Box(200,300,50,50);
   box2 = new Box (240,100,50,100);
}

function draw(){
    background(0);
    Engine.update(myengine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

   box1.display();
   box2.display();
}