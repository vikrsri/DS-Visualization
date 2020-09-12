function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(60);
	fill(255);
	textSize(20);

	for (i = 0; i < visualQueue.size(); i++) {
		text(visualQueue.queueArr[i], 50 + i * 60, 100);
		noFill();
		stroke(255);
		square(50 + i * 60, 75, 30);
		fill(255);

		if (i < visualQueue.size() - 1) {
			line(80 + i * 60, 90, 110 + i * 60, 90);
		}

		if (visualQueue.size() === 1) {
			textSize(15);
			text("head/tail", 40 + i * 30, 120);
			textSize(20);
		}
		else if (i === 0) {
			textSize(15);
			text("head", 50 + i * 30, 120);
			textSize(20);
		}
		else if (i === visualQueue.size() - 1) {
			textSize(15);
			text("tail", 50 + i * 60, 120);
			textSize(20);
		}
	}
}

visualQueue = new queue();
