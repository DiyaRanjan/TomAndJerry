
function preload() {
    cat1 = loadImage("tomOne.png");
    cat2 = loadAnimation("tomTwo.ong", "tomThree.png");
    cat3 = loadImage("tomFour.png");
    jerry1 = loadImage("mouse1.png");
    jerry2 = loadAnimation("mouse2.png", "mouse3.png");
    jerry3 = loadImage("mouse4.png");
    garden1 = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);

    tom = createSprite(300,300);
    tom.addImage(cat1);

    jerry = createSprite(400,400);
    jerry.addImage(jerry1);

    garden = createSprite(500,400);
    garden.addImage(garden1);
}


function draw() {

    background(255);

    if(keyDown("left")){
        tom.velocityX = -5;
        keyPressed();
    }

    if(tom.x - jerry.x < (cat.width - mouse.width)/2){
        tom.velocityX = 0;
        tom.addAnimation(cat4);
        tom.changeAnimation(cat4);
        
        jerry.addAnimation(jerry3);
        jerry.changeAnimation(jerry3);
    
    }
    drawSprites();
}


function keyPressed(){
    tom.addAnimation(cat2);
    tom.changeAnimation(cat2);

    jerry.addAnimation(jerry2);
    jerry.changeAnimation(jerry2);
}
