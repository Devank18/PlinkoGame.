class Particle {
    constructor(x,y){
      var b_option={
          'restitution':0.5,
          'friction':0.3,
          'density':0.8,
      }

    this.body =  Bodies.circle(x ,y , 22 ,b_option);
    this.radius = 22;
    this.color = color(random(55,255),random(55,255),random(55,255));

    Matter.Bodies.circle;
    World.add(world, this.body);
    }

    display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(this.color);
    ellipseMode(CENTER);
    ellipse(0, 0, this.radius,this.radius);
    pop();

  }
}