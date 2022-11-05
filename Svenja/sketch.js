let
  x1, x2, y2, x3, y3, x4, 
  hue,sat,brt,alph, 
  hue2,sat2,brt2,alph2, 
  hue3,sat3,brt3,alph3, 
  hue4,sat4,brt4,alph4,
  t1,t2,t3,t4,t5,
  m,
  pedals
;

function setup() {
  createCanvas(1920, 1080);
  // Starts in the middle
  x = width / 2;
  y = height / 2;

  angleMode(DEGREES);
  ellipseMode(CENTER);
  colorMode(HSB, 360, 100, 100, 100);

  frameRate(6);

  hue = random(90, 220);
  sat = random(70, 100);
  brt = random(70, 100);
  alph = random(40, 100);

  hue2 = random(90, 220);
  sat2 = random(70, 100);
  brt2 = random(70, 100);
  alph2 = random(40, 100);

  hue3 = random(90, 220);
  sat3 = random(70, 100);
  brt3 = random(70, 100);
  alph3 = random(40, 100);

  hue4 = random(90, 220);
  sat4 = random(70, 100);
  brt4 = random(70, 100);
  alph4 = random(40, 100);
  pedals = random(6,18);

  t1 = 1000;
  t2 = 2000;
  t3 = 3000;
  t4 = 4000;
  t5 = 6000;

  setInterval(reDrawpedals, 400);
}
  

function draw() {
  background(90, 100, 10, 50);

  m = millis();

  translate(width / 2, height / 2);
  
  // Draw a circle
  noStroke();
  fill(hue, sat, brt, alph);
  ellipse(0, 0, 60, 60);

  let ang = 360 / pedals;

  x1 = random(30,40);
  x4 = random(80,120);
  x2 = random(40,80);
  let maxX2 = x2 * tan(ang) * 0.9;
  y2 = maxX2;
  x3 = random(80,120);
  y3 = maxX2;

  if (m > t1) {
    drawPedal(x1,x2,x3,y2,y3,ang)
  }

  fill(hue2, sat2, brt2, alph2);
  p2x1 = x1* 1.5;
  p2x2 = x2* 1.5;
  let maxp2X2 = p2x2 * tan(ang) * 0.9;
  p2y2 = maxp2X2;
  p2x3 = x3* 1.5;
  p2y3 = maxp2X2;
 
  if (m > t2) {
    drawPedal(p2x1,p2x2,p2x3,p2y2,p2y3,ang);
  }

  fill(hue3, sat3, brt3, alph3);
  p3x1 = x1* 3;
  p3x2 = x2* 3;
  let maxp3X2 = p3x2 * tan(ang) * 0.9;
  p3y2 = maxp3X2;
  p3x3 = x3* 3;
  p3y3 = maxp3X2;
 

  if (m > t3) {
    drawPedal(p3x1,p3x2,p3x3,p3y2,p3y3,ang);
  }

  fill(hue4, sat4, brt4, alph4);
  p4x1 = x1* 3.5;
  p4x2 = x2* 3.5;
  let maxp4X2 = p4x2 * tan(ang) * 0.9;
  p4y2 = maxp3X2;
  p4x3 = x3* 3.5;
  p4x3 = maxp4X2;

  if (m > t4) {
    drawPedal(p4x1,p4x2,p4x3,p4y2,p4y3,ang);
  }

}

function drawPedal(x1,x2,x3,y2,y3,ang) {
  for (let i = 0; i < pedals; i++) {
    noStroke();
    beginShape();
    curveVertex(x1, 0);
    curveVertex(x1, 0);
    curveVertex(x2, y2);
    curveVertex(x3, y3);
    curveVertex(x4, 0);
    curveVertex(x4, 0);
    endShape();

    beginShape();
    curveVertex(x1, 0);
    curveVertex(x1, 0);
    curveVertex(x2, -y2);
    curveVertex(x3, -y3);
    curveVertex(x4, 0);
    curveVertex(x4, 0);
    endShape();
    //stroke(hue,sat,brt,alph);
    strokeWeight(5);
    //line(x1,0,x4,0);
    rotate(ang);
  };

}

function reDrawpedals() {
  redraw()
}
