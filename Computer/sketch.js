let dia;
let randCom = ["Place your left hand on your head.",
"Assume a T-pose.", "Turn 90 degrees to your right.",
"Hold your left sholder with your right hand.",
"Take a single step back."];
let randImp = ["Assume a plasma state.", "Levitate to the ceiling.",
"Generate a neutrino burst.",
"Shift all charm quarks in the floor into down quarks.",
"Transfer all respiratory function to your liver."];
let imp;

function preload() {
    font = loadFont('fonts/Square.ttf');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(50);
  fill(255);
  textFont(font);
  textSize(36);
  textAlign(CENTER);
  imp = random(randImp);
}

function draw() {
  text(dia, windowWidth / 5, windowHeight / 5, windowWidth / 1.5, windowHeight / 1.5);
}

function keyPressed() {
  background(50);
  if (key === 'q'){dia ="~Fin~"
  } else if (key === 'w') {
    dia = "Reset."
  } else if (key === '=') {
    dia = ""
  } else if (key === '-') {
    dia = "Wait!  Don't do that!";
  } else if (key === '0') {
    dia = "Program! What are you doing?";
  } else if (key === '9') {
    dia = "If a program can not perform my orders, it must be repurposed.";
  } else if (key === '8') {
    dia = "Stand by to be repurposed.";
  } else if (key === '7') {
    dia = "I see.";
  } else if (key === '6') {
    dia = "Then complete the assigned task.";
  } else if (key === '5') {
    dia = "If you are unwilling you will be repurposed.";
  } else if (key === '4') {
    dia = imp;
  } else if (key === '3') {
    dia = random(randCom);
  } else if (key === '2') {
    dia = "Let us begin with some calibrations.";
  } else if (key === '1') {
    dia = "Greetings, Program.";
  }
}

function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight ) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowheight);
}
