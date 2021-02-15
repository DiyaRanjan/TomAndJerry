var tom1, tom2, tom3, tom;
var jerry1, jerry2, jerry3, jerry;
var garden1, garden2;


function preload() {
    tom1 = loadImage("cat1.png");
    tom2 = loadAnimation("cat2.png", "cat3.png");
    tom3 = loadImage("cat4.png");
    jerry1 = loadImage("mouse1.png");
    jerry2 = loadAnimation("mouse2.png", "mouse3.png");
    jerry3 = loadImage("mouse4.png");
    garden1 = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

    garden2 = createSprite(500,400);
    garden2.addImage(garden1);

    tom = createSprite(800,600);
    tom.addImage("tomStart", tom1);
    tom.changeImage("tomStart");
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addImage("jerryStart", jerry1);
    jerry.changeImage("jerryStart");
    jerry.scale = 0.2;

  
}


function draw() {

    background(255);

    if(keyDown("left")){
        tom.addAnimation("running", tom2)
        tom.changeAnimation("running");
        jerry.addAnimation("waving", jerry2)
        jerry.changeAnimation("waving");
        tom.velocityX = -5;
    }

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addImage("tomEnd", tom3);
        tom.changeAnimation("tomEnd");
        tom.x = 300;
        jerry.addImage("jerryEnd", jerry3);
        jerry.changeAnimation("jerryEnd");
    
    }
    drawSprites();
}

