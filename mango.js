class Mango {
  constructor(x, y, r){
   var options = {
     'isStatic': true,
     'restitution': 0,
     'friction': 1
}
     this.r = r;
     this.image = loadImage("mango.png");
     this.body = Bodies.circle(x, y, this.r, options);
     World.add(world, this.body);
}


 display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    ellipseMode(RADIUS);
    image(this.image, 0, 0, 50, 50);
    pop(); 
}
}