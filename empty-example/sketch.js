let distance = 50;

let doughbutton;
let saucebutton;
let cheesebutton;

let dough = false;
let sauce = false;
let cheese = false;

function setup() {
  createCanvas(1400, 725);

  doughbutton = createButton('Dough');
  doughbutton.position(19, 19);
  doughbutton.mousePressed(makecrust);

  saucebutton = createButton('Tomato Sauce');
  saucebutton.position(19, 39);
  saucebutton.mousePressed(makesauz);

  cheesebutton = createButton('Cheese');
  cheesebutton.position(19, 59);
  cheesebutton.mousePressed(cheez);
}

function draw(){
	background("white");
  crust();
  sauz();
  //cheez();

  pepperoni(600, 400);
  pepperoni(800, 450);
  pepperoni(720, 200);
  pepperoni(680, 450);
  pepperoni(640, 280);

  stroke("black")
  strokeWeight(2);
  noFill();
  rect(400, 100, 600, 530);
}

function pepperoni(x,y){
  fill(245, 19, 2);
  noStroke();
  ellipse(x, y, 40);
}

function crust(){
  if (dough == true){
    fill(227, 178, 54)
    noStroke();
    ellipse(700, 362, 460);
  }

  else{
  }
}

function sauz(){
  if (sauce == true){
    fill(245, 19, 2)
    ellipse(700, 362, 398);
  }
  else{
  }

}

function cheez(){
  fill(250, 215, 40)
  ellipse(700, 362, 378);
}

function makecrust(){
  dough = true;
}

function makesauz(){
  sauce = true;

}
