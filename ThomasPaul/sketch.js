var b1, b2, b3, b4, b5, b7, b8, b9, b10, b11, b12, b13;
let heightOffset = 15,
  maxWidth = 6,
  turbineWidth = 15,
  heliceHeight,
  heliceWidth = 3,
  angle = 0,
  speed = 1.25,
  slider, p

function setup() {
  createCanvas(1920, 1080);
  heliceHeight = height/8;
  b1=new Building();
  b1.position=0;
  b1.floors=20;
    
  b2=new Building();
  b2.position=1;
  b2.floors=40;

  b3=new Building();
  b3.position=2;
  b3.floors=10;

  b4=new Building();
  b4.position=3;
  b4.floors=30;

  b5=new Building();
  b5.position=4;
  b5.floors=18;

  b6=new Building();
  b6.position=5;
  b6.floors=25;

  b7=new Building();
  b7.position=6;
  b7.floors=15;

  b8=new Building();
  b8.position=7;
  b8.floors=35;
  
  b9=new Building();
  b9.position=8;
  b9.floors=30;
  
  b10=new Building();
  b10.position=9;
  b10.floors=27;
  
  b11=new Building();
  b11.position=10;
  b11.floors=21;
  
  b12=new Building();
  b12.position=11;
  b12.floors=29;
  
  b13=new Building();
  b13.position=12;
  b13.floors=16;
  frameRate(60);
}

function draw() {
  background("blue")
  drawWindMill(45, 1080-b1.floors * 10 - 100);
  b1.display();
  drawWindMill(b2.position*125 + 45, 1080-b2.floors * 10 - 100);
  b2.display();
  drawWindMill(b3.position*125 + 45, 1080-b3.floors * 10 - 100);
  b3.display();
  drawWindMill(b4.position*125 + 45, 1080-b4.floors * 10 - 100);
  b4.display();
  drawWindMill(b5.position*125 + 45, 1080-b5.floors * 10 - 100);
  b5.display();
 drawWindMill(b6.position*125 + 45, 1080-b6.floors * 10 - 100);
  b6.display();
 drawWindMill(b7.position*125 + 45, 1080-b7.floors * 10 - 100);
  b7.display();
 drawWindMill(b8.position*125 + 45, 1080-b8.floors * 10 - 100);
  b8.display();
 drawWindMill(b9.position*125 + 45, 1080-b9.floors * 10 - 100);
  b9.display();
drawWindMill(b10.position*125 + 45, 1080-b10.floors * 10 - 100);
  b10.display();
  drawWindMill(b11.position*125 + 45, 1080-b11.floors * 10 - 100);
  b11.display();
  drawWindMill(b12.position*125 + 45, 1080-b12.floors * 10 - 100);
  b12.display();
  drawWindMill(b13.position*125 + 45, 1080-b13.floors * 10 - 100);
  b13.display();
  drawTree(b13.position*125+90+45,1080-150, 30,150);
  drawTree(b13.position*125+90*2+60,1080-200, 35,200);
  drawTree(b13.position*125+90*3+70,1080-80, 20,80);
}

function drawWindMill(xtranslate, ytranslate){
  strokeWeight(0.5)  
  speed = 0.7
  //p.elt.innerText = speed + ' speed'
  //59.6 

  translate(xtranslate, ytranslate)
  
  //base
  rect(maxWidth / -2, 0, maxWidth, height / 4)
  
  //center turbine
  circle(0, 0, turbineWidth)
  push();
  angleMode(DEGREES)
  rotate(angle)
  let spaceFromCenter = turbineWidth / 5
  let x = cos(-90) * turbineWidth - heliceWidth / 2
  let y = sin(-90) * turbineWidth / 2 + spaceFromCenter

  fill("#FFFFFF")
  //one
  rect(x, y, heliceWidth, -heliceHeight)
  
  //two
  rotate(360 / 3)
  rect(x, y, heliceWidth, -heliceHeight)

  //three
  rotate(360 / 3)
  rect(x, y, heliceWidth, -heliceHeight)
  pop();
  
  angle += speed;
  
  
  translate(-xtranslate, -ytranslate);
}

function drawTree(x, y, w, h){
   fill('brown');
  rect(x,y,w,h);
  fill('green');
  ellipse(x+w/2,y-25,70/20*w,70*(h/100));
  fill('gray');
}

const guides = () => {
  line(0, -height, 0, height)
  rotate(360 / 3)
  line(0, -height, 0, 0)
  rotate(360 / 3)
  line(0, -height, 0, 0)
}
