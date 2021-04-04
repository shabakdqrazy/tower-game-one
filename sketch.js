const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world
var ground;

function preload(){
    polly = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1000,800)
    engine=Engine.create()
    world = engine.world
    ground = new Ground(500,750,1000,20)    
    box1 = new Box(800,700,100,100) 
    box2 = new Box(700,700,100,100)
    box3 = new Box(600,700,100,100)
    box4 = new Box(500,700,100,100)
    box5 = new Box(400,700,100,100)
    box6 = new Box(300,700,100,100)
    box7 = new Box(200,700,100,100)

    box8 = new Box(700,600,100,100)
    box9 = new Box(600,600,100,100)
    box10 = new Box(500,600,100,100)
    box11 = new Box(400,600,100,100)
    box12 = new Box(300,600,100,100)

    box13 = new Box(600,500,100,100)
    box14 = new Box(500,500,100,100)
    box15 = new Box(400,500,100,100)

    box16 = new Box(500,400,100,100)
}


function draw(){
    background("black")
    Engine.update(engine)
    fill("brown")
    text ("drag the polygon to destroy the box",500,300)
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    


}
