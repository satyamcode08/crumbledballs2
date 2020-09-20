class Ball{
     constructor(x,y,r){
          var options = {
               isStatic:false,
               'restitution':0.8,
               'friction':1.5,
               'density':1.2
           }
     this.body = Bodies.circle(x,y,r,options)
    this.radius=r

     World.add(world,this.body)
     }
     display(){
          var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER)
    strokeWeight(5);
    stroke("green")
    fill(255);
    ellipse(0,0,this.radius,this.radius)
    pop();
     }

};