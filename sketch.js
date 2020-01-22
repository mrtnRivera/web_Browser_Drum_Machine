
let stripBotones = [];
let stripBotones2 = [];
let stripBotones3 = [];
let stripBotones4 = [];

let secuencia = [16];
let secuencia2 = [16];
let secuencia3 = [16];
let secuencia4 = [16];

let transporte;
var bpm = 100;

var step = 0;
var numStep = 16;
var activo = false;
var colorRandom = 0;
let timer = setInterval(console.log("timer_set"), 0);
var logo;
var env, env2;
var delay;
var knob1, knob2, knob3, knob4;
var numTiles = 14;
let tiles = [numTiles];

function preload() {
  soundFormats('wav');
  sample1 = loadSound('assets/Kick.wav');
  sample2 = loadSound('assets/Snr.wav');
  sample3 = loadSound('assets/Hat.wav');
  sample4 = loadSound('assets/Fx.wav');

  sample1b = loadSound('assets/Kick2.wav');
  sample2b = loadSound('assets/Snr2.wav');
  sample3b = loadSound('assets/Hat2.wav');
  sample4b = loadSound('assets/Fx2.wav');

  logo = loadImage('assets/logo.png');

  for(var i = 0; i < numTiles; i++){
    tiles[i] = loadImage('assets/tile' + i + '.PNG');
  }
}

function setup() {
  createCanvas(750, 280);
  clearInterval(timer);
  transporte = new Boton(20, 520,195, 0);

  for(let i = 0; i < 16; i++) {
    let xPos = 10 + 45 * i;
    stripBotones[i] = new Boton(i, xPos, 10, 0, tiles[int(random(numTiles))]);
    stripBotones2[i] = new Boton(i, xPos, 10 + 35 + 5, 1,tiles[int(random(numTiles))]);
    stripBotones3[i] = new Boton(i, xPos, 10 + (35 * 2) + 10, 2,tiles[int(random(numTiles))]);
    stripBotones4[i] = new Boton(i, xPos, 10 + (35 * 3) + 15, 3,tiles[int(random(numTiles))]);
  }

  var offsetKnob = 50;

  knob1 = new MakeKnob(50,35,205, 0.025, 1.25, 0.5, 0, " ", color(10));
  knob2 = new MakeKnob(50,35 + 50 + offsetKnob, 205, 0.025, 0.7, 0.01, 0, " ", color(106, 188, 113));
  knob3 = new MakeKnob(50,35 + 100 + (offsetKnob * 2),205, 0.0, 1.0, 0.0, 0, " ", color(255, 73, 68));
  knob4 = new MakeKnob(50,35 + 150 + (offsetKnob * 3),205, 60, 200, 100, 0, " ", color(255));

  inicializarVolumen();
  delay = new p5.Delay();
 }

function draw() {
  background(220);

  for(let i = 0; i < 16; i++) {
    stripBotones[i].mostrarStep(step);
    stripBotones2[i].mostrarStep(step);
    stripBotones3[i].mostrarStep(step);
    stripBotones4[i].mostrarStep(step);
  }

  transporte.mostrarTransporte();
  image(logo, 645,180, 70, 70);


  env.setADSR(0,knob1.knobValue,knob3.knobValue,0);
  env2.setADSR(0,knob1.knobValue,1 - knob3.knobValue,0);

  knob1.update();
  knob2.update();
  knob3.update();
  knob4.update();

  if(mouseX > 645 && mouseX < 645 + 80 && mouseY > 180 && mouseY < 180 + 80){
    cursor(CROSS);
  }else{
    cursor(ARROW);
  }
}//draw

function avanzarStep(){

  if(secuencia[step] == 1){

    sample1.play();
    env.mult(1 - knob3.knobValue);
    env.play();
    sample1.amp(env);
    delay.process(sample1, 0.15, knob2.knobValue, 2300);


    sample1b.play();
    env2.mult(knob3.knobValue);
    env2.play();
    sample1b.amp(env2);
    delay.process(sample1b, 0.15, knob2.knobValue, 2300);

  }
  if(secuencia2[step] == 1){
    sample2.play();
    env.mult(1 - knob3.knobValue);
    env.play();
    sample2.amp(env);
    delay.process(sample2, 0.15, knob2.knobValue, 2300);

    sample2b.play();
    env2.mult(knob3.knobValue);
    env2.play();
    sample2b.amp(env2);
    delay.process(sample2b, 0.15, knob2.knobValue, 2300);
  }
  if(secuencia3[step] == 1){
    sample3.play();
    env.mult(1 - knob3.knobValue);
    env.play();
    sample3.amp(env);
    delay.process(sample3, 0.15, knob2.knobValue, 2300);

    sample3b.play();
    env2.mult(knob3.knobValue);
    env2.play();
    sample3b.amp(env2);
    delay.process(sample3b, 0.15, knob2.knobValue, 2300);
  }
  if(secuencia4[step] == 1){
    sample4.play();
    env.mult(1 - knob3.knobValue);
    env.play();
    sample4.amp(env);
    delay.process(sample4, 0.15, knob2.knobValue, 2300);

    sample4b.play();
    env2.mult(knob3.knobValue);
    env2.play();
    sample4b.amp(env2);
    delay.process(sample4b, 0.15, knob2.knobValue, 2300);
  }

	step = step + 1;
	if (step >= numStep) {
	  step = 0;
	}
}

function link() {
  window.open("https://github.com/mrtnRivera/web_Browser_Drum_Machine");
  }

function mouseClicked() {
  if(mouseX > 645 && mouseX < 645 + 80 && mouseY > 180 && mouseY < 180 + 80){
      link();
  }
}


function mousePressed() {
  for(let i = 0; i < 16; i++) {
    stripBotones[i].cambiarEstado();
    secuencia[i] = stripBotones[i].estado;

    stripBotones2[i].cambiarEstado();
    secuencia2[i] = stripBotones2[i].estado;

    stripBotones3[i].cambiarEstado();
    secuencia3[i] = stripBotones3[i].estado;

    stripBotones4[i].cambiarEstado();
    secuencia4[i] = stripBotones4[i].estado;
  }
    knob1.active();
    knob1.myY=mouseY;
    knob2.active();
    knob2.myY=mouseY;
    knob3.active();
    knob3.myY=mouseY;
    knob4.active();
    knob4.myY=mouseY;

    transporte.cambiarEstado();
    transporte.activarTransporte();
}

function mouseReleased() {
  knob1.currentRot = knob1.rotateMe;
  knob2.currentRot = knob2.rotateMe;
  knob3.currentRot = knob3.rotateMe;
  knob4.currentRot = knob4.rotateMe;
}

function keyPressed() {
  if (key === ' ') {
    transporte.cambiarEstado(true);
    transporte.activarTransporte(true);
  }
}

function MakeKnob(radius, locx, locy, lowNum, hiNum, defaultNum, numPlaces, label, knobcolor) {
  this.pos = createVector(0,0);
  this.pos.x = locx;
  this.pos.y = locy;
  this.lowNum = lowNum;
  this.hiNum = hiNum;
  this.rotateMe = map(defaultNum, lowNum, hiNum, 145, -145);
  this.currentRot = map(defaultNum, lowNum, hiNum, 145, -145);
  this.radius = radius;
  this.knobValue = defaultNum;
  this.displayValue=0;
  this.isClickedOn = false;
  this.myY;
  this.label=label;
  this.numPlaces = numPlaces;
  this.knobColor=knobcolor;

  this.update = function() {
   push();

	// move the origin to the pivot point
	translate(this.pos.x, this.pos.y);

	// then rotate the grid around the pivot point by a
	// number of degrees based on drag on button
	if (mouseIsPressed && this.isClickedOn) {

	  this.rotateMe=this.currentRot+map(mouseY, this.myY, 600, 0, 360);
	  this.rotateMe=int(this.rotateMe);
	    if (-this.rotateMe > 145 && this.rotateMe < 0) {
	      this.rotateMe = -145;
	    }
	    if (this.rotateMe > 145 && this.rotateMe > 0) {
	      this.rotateMe = 145;
	    }

	  rotate(radians(-this.rotateMe));

	} else {
	  rotate(radians(-this.rotateMe));
	}

	fill(this.knobColor);
  noStroke();
	ellipse(0, 0, this.radius, this.radius);
	fill(100);
	ellipse(0, -this.radius*.4, this.radius/10,this.radius/10);
	pop();
	rotate(0);
	textAlign(CENTER);
	this.knobValue=map(this.rotateMe, -145, 145, hiNum, lowNum);
	textSize(18);

  }

  this.active = function() {
    if (dist(this.pos.x, this.pos.y, mouseX, mouseY) < this.radius){
      this.isClickedOn = true;
    } else {
      this.isClickedOn = false;
    }
  }
}

function inicializarVolumen(){

  sample1.setVolume(0.8); //Kick
  sample2.setVolume(0.7); //Snr
  sample3.setVolume(0.5); //Hat
  sample4.setVolume(0.5); //Fx

  sample1b.setVolume(0.8); //Kick2
  sample2b.setVolume(0.7); //Snr2
  sample3b.setVolume(0.5); //Hat2
  sample4b.setVolume(0.5); //Fx2

  env = new p5.Env();
  env.setADSR(0,knob1.knobValue,knob3.knobValue,0);
  env.play();

  env2 = new p5.Env();
  env2.setADSR(0,knob1.knobValue,1 - knob3.knobValue,0);
  env2.play();
}

function tempo(bpm){
var ms;
ms = 15000 / bpm;
	return ms;
}
