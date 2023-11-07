var backgroundIgm, background;

var spaceshipImg, spaceship;

var gameState = "start";
var enemyGroup = "";
var enemyGroup2 = "";
var life = 3;

function preload() {
  backgroundIgm = loadImage("background.png");
  spaceshipImg = loadImage("spaceship.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  spaceship = createSprite(150, 260);
  spaceship.addImage(spaceshipImg);
  spaceship.scale = 0.15;

  enemyGroup = new Group();
  enemyGroup2 = new Group();
}

function draw() {
  image(backgroundIgm, 0, 0);

  if (gameState === "start") {
    textAlign(CENTER);
    fill("white");
    text("Clique na tela para começar!", 150, 150);

    if (mouseIsPressed === true) {
      gameState = "play";
    }
  }
  if (gameState === "play") {
    fill("white");
    text("Vidas: " + life, 20, 20);
    if (keyDown("left") && spaceship.x > 20) {
      spaceship.x -= 2;
    }
    if (keyDown("right") && spaceship.x < 280) {
      spaceship.x += 2;
    }
    if (keyDown("down")) {
      spawn();
    }
    if (frameCount % 80 === 0) {
      enemies();
    }
    if (frameCount % 120 === 0) {
      enemies2();
    }
  }
  drawSprites();
}

function spawn() {
  laser = createSprite(spaceship.x, spaceship.y, 2.5, 10);
  laser.shapeColor = "red";
  laser.velocityY = -1;
  laser.lifetime = 400;
}

function enemies() {
  x = Math.round(random(10, 290));

  var enemy = createSprite(x, 0, 4, 4);
  enemyGroup.add(enemy);
  enemy.shapeColor = "#00ff22";
  enemy.velocityY = +0.4;
}

function enemies2() {
  x = Math.round(random(10, 290));

  var enemy2 = createSprite(x, 0, 7, 7);
  enemyGroup2.add(enemy2);
  enemy2.shapeColor = "orange";
  enemy2.velocityY = +0.6;
}
