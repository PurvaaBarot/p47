class Disk {
  constructor(x, y, width,color) {
    var options = {
        'friction':1.5,
        'density':2.0
    }
    this.body = Bodies.rectangle(x, y, width, 40, options);
    this.width = width;
    this.height = 40;
    this.color = color;
    World.add(world, this.body);
  }
  display(){
    fill(this.color);
    var pos =this.body.position;
   // var ang=this.body.angle;
    push();
    translate(pos.x,pos.y);
    //console.log("disk")
    //rotate(ang);
    rectMode(CENTER);
    fill(this.color);
    rect(0,0, this.width, this.height);
    pop();
  }
  drop(){
    if(this.body.position.x < 970 && this.body.position.x > 570){
      Matter.Body.setPosition(this.body,{x:ground2.body.position.x,y:this.body.position.y});
      //console.log(ground2.body.position.x,ground2.body.position.y,ground3.body.position.x,ground3.body.position.y)
      }
      if(this.body.position.x < 480 && this.body.position.x > 80) {
       Matter.Body.setPosition(this.body,{x:ground1.body.position.x,y:this.body.position.y});
       //console.log(ground2.body.position.x,ground2.body.position.y,ground3.body.position.x,ground3.body.position.y)
      }
      if(this.body.position.x < 1460 && this.body.position.x > 1060) {
        Matter.Body.setPosition(this.body,{x:ground3.body.position.x,y:this.body.position.y});
        //console.log(ground2.body.position.x,ground2.body.position.y,ground3.body.position.x,ground3.body.position.y)
       }
  }
  move(){
    Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
    console.log("move");
  }
};
