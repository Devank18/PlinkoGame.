const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
const Constraint = Matter.Constraint;

var engine, world;
var ground,divisionG;
var divisionHeight = 335;

var particles = [];
var plinkos = [];

score = 0;
count = 0;
gameState = "start";

function setup() {
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  divisionG = new Division(240,770,480,18);
  division1 = new Division(5,600,12,divisionHeight);
  division2 = new Division(85,600,12,divisionHeight);
  division3 = new Division(165,600,12,divisionHeight);
  division4 = new Division(245,600,12,divisionHeight);
  division5 = new Division(325,600,12,divisionHeight);
  division6 = new Division(405,600,12,divisionHeight);
  division7 = new Division(475,600,12,divisionHeight);

  ground = new Ground(240,790,480,25)

  //creating plinkos
  for(var x1=40 ; x1<=width ; x1=x1+100){
    plinkos.push(new Plinko(x1,70));
  }
  for(var x2=10 ; x2<=width ; x2=x2+100){
    plinkos.push(new Plinko(x2,150));
  }
  for(var x3=40 ; x3<=width ; x3=x3+100){
    plinkos.push(new Plinko(x3,230));
  }
  for(var x4=10 ; x4<=width ; x4=x4+100){
    plinkos.push(new Plinko(x4,310));
  }

}

function draw() {
  background(60,60,60);
  Engine.update(engine);
  textSize(35);
  text("Score : "+score,10,40);
  textSize(20);
  text("500",30,420);
  text("500",110,420);
  text("100",185,420);
  text("100",265,420);
  text("200",345,420);
  text("200",425,420);
  ground.display();
  divisionG.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  mousePressed();

  if ( count >= 5) {
    gameState ="end";
    textSize(70);
    text("GameOver", 60, 290);
  }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();

      if (particles[j].body.position.x < 165 && particles[j].body.position.x > 30 && particles[j].body.position.y>660) {

        score=score+500;

        particles.pop();
    }

    else if (particles[j].body.position.x > 185 && particles[j].body.position.x < 325 && particles[j].body.position.y > 660) {

      score = score + 100;

      particles.pop();
    }

    else if (particles[j].body.position.x > 325 && particles[j].body.position.x < 475 && particles[j].body.position.y > 660) {

      score = score + 200;

      particles.pop();

    }

  }

  for(var st = 0; st < plinkos.length; st++){
    plinkos[st].display();
  }


  drawSprites();
    }
  function mousePressed(){

    if(gameState!=="end"){
      count++;
      particles.push(new Particle(mouseX,10));
  }
}
