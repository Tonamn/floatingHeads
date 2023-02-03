let gigi;
let sohee;
let tonnam;

function preload(){
  tonnam = loadModel('tonnam.obj', true);
  sohee = loadModel('sohee.obj', true);
  gigi = loadModel('gigi.obj', true);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

}

function draw() {
//environment
  background(255);
      
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(100, 100, 100);
  pointLight(255, 255, 255, locX, locY, 100);

  scale(1.5);
  normalMaterial();
  
  noStroke();

//tonnam object
  ambientMaterial(2, 48, 32);
  specularMaterial(169, 169, 169);
  rotateX(frameCount * 0.3);
  rotateY(frameCount * 0.3);
  rotateX(180);
  rotateY(100);
  translate(0, 15, 100);
  model(tonnam);

//sohee object
  ambientMaterial(229, 228, 226);
  specularMaterial(0);
  rotateX(frameCount * 0.3);
  rotateY(frameCount * 0.3);
  rotateY(60);
  translate(200, -25, -50);
  model(sohee);

//gigi object
  ambientMaterial(129, 133, 137);
  specularMaterial(255);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  rotateY(240);
  translate(50, -40, 200);
  model(gigi);

}
