function setup() {
	// put setup code here
	createCanvas(400, 400);
}

function draw() {
	// put drawing code here
	background(100)
	if(mouseIsPressed) {
    fill(0)
  }
  else {
    fill(255); 
  }
  ellipse(mouseX, mouseY, 50,50)
}