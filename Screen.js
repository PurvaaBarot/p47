class Screen{
     constructor(){
        this.button1=createButton("Yes");
     }


display(){

textSize(100);
textFont("Segoe Print");
fill("#FAC606");
stroke("black");
strokeWeight(5);
text("Tower of Hanoi",windowWidth/2-400,windowHeight/2-50);

textSize(40);
strokeWeight(4);
textFont("Segoe Print");
fill("#FAC606");
text("  Keep challenging yourself, take this challenge to solve hanoi's tower ",windowWidth/2-700,windowHeight/2);

textSize(40);
strokeWeight(4);
textFont("Segoe Print");
fill("#FAC606");
text("Ready to take the challenge?? ",windowWidth/2-300,windowHeight/2+50);


this.button1.position(windowWidth/2-100,windowHeight/2+100);
//button1.style.width = '1000px';
//button1.style.height ='1000px';
//this.button1.style("font-size",10)

this.button1.mousePressed(()=>{
    gameState="start";
    this.button1.hide();
})
}

hide(){
    this.button1.hide();
}
}