let x, y;

let image_background;
let img_fader;

let scale = 1;
let width = 1920 * scale;
let height = 1080 * scale;
let pos_x = 0;
let pos_y = 0;

function setupStreet() {
    for (let i = 26; i >= 1; i--) {
        let raw_img = loadImage('assets/street_' + i + '.png')
        let fade_img = new FadingImage(raw_img, pos_x, pos_y, width, height);
        img_fader.addImage(fade_img);
    }
}

function setupHouses() {
    for (let i = 9; i >= 1; i--) {
        let raw_img = loadImage('assets/house_' + i + '.png')
        let fade_img = new FadingImage(raw_img, pos_x, pos_y, width, height);
        img_fader.addImage(fade_img);
    }
}

function setup() {
    createCanvas(1920, 1080);
    frameRate(20);

    image_background = loadImage('assets/bg.png');
    image_leaf = loadImage('assets/moos.png');
    img_fader = new ImageFader();

    setupStreet();
    setupHouses();
}

function draw() {
    background(image_background);
    img_fader.draw();
}

class ImageFader {
    images = [];
    currentImgIndex = 0;

    constructor() {
    }

    addImage(image) {
        this.images.push(image);
    }

    draw() {
        if (this.currentImgIndex < this.images.length) {
            const currImg = this.images[this.currentImgIndex];
            if (!currImg.isFadeStarted()) {
                currImg.startFadeIn()
            } else if (currImg.fadeFinished) {
                this.currentImgIndex++;
            }
        }

        this.images.forEach(img => img.draw());
    }
}

class FadingImage {
    targetOpacity = 255;
    currentOpacity = 0;
    fadeStart = false;
    fadeFinished = false;

    constructor(image, xin, yin, width_in, height_in) {
        this.image = image;
        this.x = xin;
        this.y = yin;
        this.width = width_in;
        this.height = height_in;
    }

    startFadeIn() {
        this.fadeStart = true;
    }

    isFadeStarted() {
        return this.fadeStart;
    }

    isFadeFinished() {
        return this.fadeFinished;
    }


    drawBranch(x1, y1, x2, y2, x3, y3, x4, y4) {
	let leaf_count = 5;
	bezier(x1, y1, x2, y2, x3, y3, x4, y4);

	for (let i = 0; i <=  leaf_count; i++) {
	    let t = i / leaf_count;;
	    let x = bezierPoint(x1, x2, x3, x4, t);
	    let y = bezierPoint(y1, y2, y3, y4, t);

	    image(image_leaf, x, y, 64, 64);
	}
    }

    draw() {
        // Only show image, as fading consumes to much power
        //tint(255, this.currentOpacity);
        //image(this.image, this.x, this.y, this.width, this.height)
        //noTint();

        if (this.fadeStart) {
            image(this.image, this.x, this.y, this.width, this.height)
            if (this.currentOpacity < this.targetOpacity) {
                this.currentOpacity += 255;
            } else {
                this.fadeFinished = true;
            }
        }
    stroke(120, 255, 0, 0);

	let i = 0;
	while(i <= coords.length && i + 4 <= coords.length) {
	    this.drawBranch(
		coords[i].x, coords[i].y,
		coords[i + 1].x, coords[i + 1].y,
		coords[i + 2].x, coords[i + 2].y,
		coords[i + 3].x, coords[i + 3].y);
	    i = i+3;
	}
    }
}
