let myFont;

function preload(){
  myFont=loadFont('code/DIGITALDREAM.ttf')
}

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);

}

function draw() {
  background(0);  

  hr=hour();
  mn=minute();
  sc=second();

  hrAngle=map(hr%12, 0, 12, 0, 360);
  mnAngle=map(mn, 0, 60, 0, 360);
  scAngle=map(sc, 0, 60, 0, 360);


  push();
  translate(400, 400);
  rotate(-90);
  rotate(hrAngle);
  stroke(8, 247, 254);
  strokeWeight(5);
  line(0, 0, 45, 0);
  pop();

  push();
  translate(400, 400);
  rotate(-90);
  rotate(mnAngle);
  stroke(19, 202, 145);
  strokeWeight(5);
  line(0, 0, 85, 0);
  pop();

  push();
  translate(400, 400);
  rotate(-90);
  rotate(scAngle);
  stroke(255, 34, 129);
  strokeWeight(5);
  line(0, 0, 100, 0);
  pop();

  noFill();
  strokeWeight(7);
  stroke(255, 34, 129);
  translate(400, 400);
  rotate(-90);
  arc(0,0,300,300,0,scAngle);
  strokeWeight(7);
  stroke(19, 202, 145);
  arc(0,0,280,280,0,mnAngle);
  strokeWeight(7);
  stroke(8, 247, 254);
  arc(0,0,260,260,0,hrAngle);

  noFill();
  rotate(90)
  stroke(184, 251, 60);
  rect(-225, -225, 450, 450);

  stroke(18, 178, 150)
  rotate(0)
  textSize(50)
  textFont(myFont);
  text("12",-35, -175);
  text("3", 175, 25);
  text("6", -15, 205);
  text("9", -205, 25)
  text(".", 65, -150)
  text(".", 128, -80)
  text(".", 65, 140)
  text(".", 128, 80)
  text(".", -105, 140)
  text(".", -165, 80)
  text(".", -105, -150)
  text(".", -165, -80)

  textSize(100)
  fill(18, 178, 150);
  text(".", -35, -10)
  
  

  drawSprites();
}