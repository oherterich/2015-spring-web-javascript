// Dimensions
var w = $(window).width();
var h = $(window).height();

// Ball
var ball = $('.ball');
var posX = Math.random() * w;
var posY = Math.random() * h;

var maxVel = 10;
var velX = Math.random() * maxVel*2 - maxVel;
var velY = Math.random() * maxVel*2 - maxVel;

ball.css({
  'left': posX,
  'top': posY
});

function update() {
  checkBoundary();
  posX += velX;
  posY += velY;

  ball.css({
    'left': posX,
    'top': posY
  });

  requestAnimationFrame(update);
}

update();

function checkBoundary() {
  if (posX < 0) {
    velX *= -1;
    posX = 0;
  } else if (posX > w) {
    velX *= -1;
    posX = w;
  }

  if (posY < 0) {
    velY *= -1;
    posY = 0;
  } else if (posY > h) {
    velY *= -1;
    posY = h;
  }
}

