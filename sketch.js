let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;
let RectxPos = 250;
let RectyPos = 400;
let ballLeft, ballRight, ballTop, ballBottom;
let rectLeft, rectRight, rectTop, rectBottom;
let state = 1;



function setup() {
   createCanvas(500, 400);
   background(0);

   xSpeed = random(-5,5);
   ySpeed = random(-5,5);
   
   rectMode(CENTER);
  }
  
function draw() {
    if(state == 1){ 
   background(0);

   strokeWeight(2);
   fill(170, 170, 255);
   rect(250, 50, 100, 100);

   rect(50, 50, 100, 100);

   rect(150, 50, 100, 100);

   rect(350, 50, 100, 100);

   rect(450, 50, 100, 100);

   strokeWeight(1);
   
   fill(0, 255, 0);
   ellipse(xPos, yPos, 50, 50);
   xPos += xSpeed * xDirection;
   yPos += ySpeed * yDirection;
   //brick if statement
   if(yPos <= 120) {
    ySpeed *= -1;
    }

    if(yPos >= RectyPos - 37.5 && xPos >= RectxPos - 50 && xPos <= RectxPos + 50){
        yDirection *= -1;
    }

    if (xPos > 475 || xPos < 25) {
        xDirection *= -1;
    }

  

    
    fill(255);
    rect(RectxPos,RectyPos,100,25);
    
    if(keyIsDown(LEFT_ARROW)) {
        RectxPos -= 5; 
    }

    if (keyIsDown(RIGHT_ARROW)) {
        RectxPos += 5;
    }
    
    if (RectxPos>450 || RectxPos<50) {
        RectxPos *= -1;
    }
    
    //ballLeft = xPos - 50;
    //ballRight = xPos + 50;
    //ballTop = yPos - 50;
    // ballBottom = yPos + 50;

    // rectLeft = RectxPos - 100;
    // rectRight = RectxPos + 100;
    // rectTop = RectyPos - 25;
    // rectBottom = RectyPos +25;
    
}
    if (yPos > 475){
        xPos = 250;
        yPos = 250;
    }
  
}


    



   
    



// let myXPos = 100;
// let myYPos = 100;
// let enemyXPos = 300;
// let enemyYPos = 300;

// let myLeft, myRight, myTop, myBottom;
// let enemyLeft, enemyRight, enemyTop, enemyBottom;

// function setup() {
//     createCanvas(500, 500);
//     noStroke();
//     rectMode(CENTER);
// }

// function draw() {
//     background(0);

//     fill(0,0,255);
//     rect(enemyXPos, enemyYPos, 50, 50);

//     fill(255, 0, 0);
//     rect(myXPos, myYPos, 50, 50);

//     if (keyIsDown(LEFT_ARROW)) {
//         myXPos -= 3;
//     }

//     if (keyIsDown(RIGHT_ARROW)) {
//         myXPos += 3;
//     }

//     if (keyIsDown(UP_ARROW)) {
//         myYPos -= 3;
//     }

//     if (keyIsDown(DOWN_ARROW)) {
//         myYPos += 3;
//     }

//     myLeft = myXPos - 25;
//     myRight = myXPos + 25;
//     myTop = myYPos - 25;
//     myBottom = myYPos + 25;

//     enemyLeft = enemyXPos - 25;
//     enemyRight = enemyXPos + 25;
//     enemyTop = enemyYPos - 25;
//     enemyBottom = enemyYPos + 25;

//     if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
//         fill(255);
//         textSize(22);
//         text("I am not colliding with my enemy. Yay!", 120, 480);
//     }

//     else {
//         fill(random(255), random(255), random(255));
//         textSize(22);
//         text("I'm colliding with my enemy. Ouch!", 140, 480);

//     }

// }