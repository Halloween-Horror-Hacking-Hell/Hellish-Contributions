let unit = 42;
let count;
let mods = [];

function setup() {
  createCanvas(1920, 1080, WEBGL);
  describe('a white box rotating in 3D space');
  stern();
}

function stern(){
  noStroke();
  let wideCount = unit;
  let highCount = unit;
  count = wideCount * highCount;
  

  let index = 0;
  for (let y = -13; y <highCount; y++) {
    for (let x = -25; x < wideCount; x++) {
      mods[index++] = new Module(
        x * unit*4,
        y * unit*4,
        unit / 2,
        unit / 2,
        random(0.05, 0.8),
        unit
      );
    }
  }
}

function draw() {

  background(0);
  push();
   for (let i = 0; i < count; i++) {
    mods[i].update();
    mods[i].draw();
  }
  pop();
  
  push();
   
  
  pop();
  blup2();
  stroke(0);
  
  blup();
  
  push();
  translate(random(100,120), 100,500);
  pop();
  Struktur();
  
  push();
  translate(random(300,300), 100,500);
  pop();
  Struktur();
  
  push();
  translate(random(200,220), 100,500);
  pop();
  Struktur();
  
   push();
  translate(random(250,240), 100,500);
  pop();
  Struktur();
  
   push();
  translate(random(280,220), 100,500);
  pop();
  Struktur();
  
  
 
}

function blup2 ()
{
  rotateX(0);
  rotateX(0);
  rotateY(frameCount * 0.01);
  push();
  translate(700,100,20);
  fill('yellow');
  strokeWeight(0.2);
  sphere(300,19,19);
  pop();
  
}

function blup ()
{
  rotateY(0);
  rotateX(0);
  
  rotateX(180);
  rotateY(frameCount * 0.01);
  push();
  translate(100,100,100);
  pop();
  fill('yellow');
  
  directionalLight('yellow', 300,300,100)
  
  strokeWeight(0.2);
  fill('yellow');
  sphere(300,19,19);
  
  
}

function Struktur(x, y)
{
  rotateX(180);
  rotateY(frameCount * 0.01);
  push();
  translate(100, 100,500);
  push();
  exampel();
  pop();
  fill('blue');
  strokeWeight(0.2);
  cylinder(10, 50);

}

function exampel()
{
   rotateY(frameCount * 0.01);

  for (let j = 0; j < 5; j++) {
    push();
    for (let i = 0; i < 10; i++) {
      translate(
        sin(frameCount * 0.001 + j) * 25,
        sin(frameCount * 0.001 + j) * 25,
        i * 0.1
      );
      rotateZ(frameCount * 0.002);
      push();
      fill('gray');
      strokeWeight(0.2);
      sphere(8, 6, 4);
      pop();
    }
    pop();
  }
}

class Module {
  constructor(xOff, yOff, x, y, speed, unit) {
    this.xOff = xOff;
    this.yOff = yOff;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.unit = unit;
    this.xDir = 1;
    this.yDir = 1;
  }

  // Custom method for updating the variables
  update() {
    this.x = this.x + this.speed * this.xDir;
    if (this.x >= this.unit || this.x <= 0) {
      this.xDir *= -1;
      this.x = this.x + 1 * this.xDir;
      this.y = this.y + 1 * this.yDir;
    }
    if (this.y >= this.unit || this.y <= 0) {
      this.yDir *= -1;
      this.y = this.y + 1 * this.yDir;
    }
  }

  // Custom method for drawing the object
  draw() {
    if( frameCount%22==0 || random (20,40)>30)
      {
      fill('white');
      ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6); 
      }
  }
}