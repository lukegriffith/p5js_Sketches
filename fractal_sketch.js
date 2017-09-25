var canvasWidth = 640;
var canvasHeight = 350;
var counter = 0

function setup () {
    createCanvas(
        canvasWidth,
        canvasHeight
    );

}


function draw() { 

    background(0);
    noFill();
    stroke(255,255,255);
    drawCircle(canvasWidth/2, canvasHeight/2, 350);
}

function drawCircle(x, y, s, c) {


    
    ellipse(x,y,s);

    if ( s > 1 ) { 



        //drawCircle(x-50, y-50, s/2);
        //drawCircle(x+50, y+50, s/2);
        
        drawCircle(x-50, y, s/2);
        drawCircle(x+50, y, s/2);
        //drawCircle(x,y-50,s/2);
        //drawCircle(x,y+50,s/2);

    }

}
        
