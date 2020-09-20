class Dustbin{
    constructor(x,y,width,height){
         var options = {
              isStatic:true,
              'restitution':0.8,
              'friction':1.5,
              'density':1.2
          }
    this.dustbin = Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    this.image=loadImage("spritea/dustbingreen.png")
   
    World.add(world,this.dustbin)
    }
    display(){
         var pos =this.dustbin.position;
   var angle = this.dustbin.angle;
   push();
   translate(pos.x, pos.y);
   rotate(angle);
   imageMode(CENTER)
   image(this.image,0,0,this.width,this.height)
   rectMode(CENTER);
   strokeWeight(5);
   stroke("red")
   fill(255);
   rect(0, 0, this.width, this.height);
   pop();
    }

};



