function setup() {
  createCanvas(1920, 1080);
  frameRate(2);
  background(0, 32, 0);
}

function draw() {
  const pumpkinCenterX = random(0, width);
  const pumpkinCenterY = random(0, height);
  const pumpkinWidth = random(100, 300);
  const pumpkinHeight = random(50, 200);

  const pumpkinRed = random(100, 255);
  const pumpkinGreen = random(0, 150);
  const pumpkinBlue = random(0, 100);

  stroke(0, 160, 0);
  strokeWeight(20);
  line(
    pumpkinCenterX,
    pumpkinCenterY - pumpkinHeight * 0.5,
    pumpkinCenterX - pumpkinWidth * 0.25,
    pumpkinCenterY - pumpkinHeight * 0.75
  );

  fill(pumpkinRed, pumpkinGreen, pumpkinBlue);
  stroke(pumpkinRed * 0.5, pumpkinGreen * 0.5, pumpkinBlue * 0.5);
  strokeWeight(3);

  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * 0.75, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * 0.5, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * 0.25, pumpkinHeight);
}
