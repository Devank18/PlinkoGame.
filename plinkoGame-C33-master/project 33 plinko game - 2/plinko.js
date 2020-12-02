class Plinko{
    constructor(x,y){
      var b_option={
          'restitution':1,
          'friction':0.3,
          'density':0.8,
          isStatic: true
      }

    this.body =  Bodies.circle(x ,y , 12 ,b_option);
    this.radius = 12;

    Matter.Bodies.circle;
    World.add(world, this.body);

  }

  display(){

    var pos =this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
    fill("pink");
    strokeWeight(4);
    ellipse(0, 0, this.radius,this.radius);
    pop();

  }
}