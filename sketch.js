var eagle, eagleImg, hunter, hunterImg;
var bullet, bulletImg;

function preload() {
    eagleImg = loadImage('Eagle1.png');
    hunterImg = loadImage('Hunter.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    eagle = createSprite(windowWidth / 2-100, 200);
    eagle.addImage(eagleImg);
    eagle.scale = 0.75

    hunter = createSprite(70, windowHeight - 150);
    hunter.addImage(hunterImg);
    hunter.scale = 1.4
}

function draw() {
    background('green');

    if (eagle.y > 60) {
        if (keyDown('up')) {
            eagle.y -= 5;
        }
    }
    if (eagle.y < 585) {
        if (keyDown('down')) {
            eagle.y += 5;
        }

    }

    console.log(eagle.y);
    drawSprites();
}