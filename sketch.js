const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var bgImg,bgImg2,tower;
var gameState="begin";
var disks=[];
var positions;

function preload(){
    bgImg=loadImage("bg img.jpg");
    bgImg2=loadImage("bg2.jpg");
    tower=loadImage("TOWER.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);
engine=Engine.create();
world=engine.world;

screen1=new Screen();

ground1=new Ground(280,580,400,20);
ground2=new Ground(770,580,400,20);
ground3=new Ground(1260,580,400,20);


disk1=new Disk(280,200,200,"blue");
disk2=new Disk(280,200,250,"yellow");
disk3=new Disk(280,200,300,"lightgreen");

disks=[disk1,disk2,disk3];

}

function draw(){
 
 Engine.update(engine);

 background(bgImg);

if (gameState === "begin"){
  screen1.display();
}
if(gameState === "start"){
    screen1.hide();
    background(bgImg2);
   background(tower);
 
   ground1.display();
   ground2.display();
   ground3.display();

    disk1.display();
    disk2.display();
    disk3.display();
}
}

function mouseDragged(){

  for( var i=0; i<disks.length;i++ ){
    d=dist(mouseX,mouseY,disks[i].body.position.x,disks[i].body.position.y);

    if(d<disks[i].width && d<disks[i].height){
      disks[i].move();
      console.log("mouseDragged");
    }
  }

}

function mouseReleased(){
  

     for(var i=0;i<disks.length;i++){
        if(disks[i].body.position.x != 280 && disks[i].body.position.x != 770 && disks[i].body.position.x != 1260 ){
           console.log(i);
           disks[i].drop();
           } 
          }
   
}