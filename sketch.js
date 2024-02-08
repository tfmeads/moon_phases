const MOON_SIZE = 333;

var video, canvas;

const NUM_MOONS = 30;
var moons = [];

function preload(){
    video = createVideo('assets/moon_compressed_cropped.mp4');
    video.style("z-index: -1");
    video.class('vid');
    video.autoplay();
    video.loop();

    for(let i = 0; i < NUM_MOONS; i++){
      var  moon = createGraphics(MOON_SIZE + 100,MOON_SIZE + 100);
      moons[i] = moon;
    }
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight * 3);

  rectMode(CENTER);

  video.loop();
}

function draw() {
  background(0);

  for(let i = 0; i < NUM_MOONS; i++){
    var moon = moons[i];

    let yOffset = floor(i / 3);
    let xOffset = i % 3;

    let x = width/2 + (xOffset * MOON_SIZE) * 1.5 - 700;


    let y = height/4 + (yOffset * MOON_SIZE) - MOON_SIZE;

    let phase = 0 + (i * 30 / NUM_MOONS);

    drawMoon(moon,x,y,phase);
  }

  
}

function drawMoon(moon,x,y,phase){
  
  video.size(MOON_SIZE ,MOON_SIZE);
  video.position(x - MOON_SIZE,y - MOON_SIZE);

  moon.rectMode(CENTER);
  moon.ellipse(moon.width/2,moon.height/2 - 50,MOON_SIZE,MOON_SIZE);

  video.mask(moon);

  image(video,x,y);
  fill(0);

  if(phase != 15){

    let offset = 15 - phase;

    let moonX = x + MOON_SIZE /2 + 2 + (offset * MOON_SIZE / 30);
    let moonY = y + MOON_SIZE / 2 - 40;
    let moonSize = MOON_SIZE - 75;

    var moonXMod = map(offset,15,-15,25,-25);

    var ySizeMod = map(abs(offset),15,0,-30,15);

    ellipse(moonX + moonXMod,moonY,moonSize,moonSize + ySizeMod);
  }
  
}

