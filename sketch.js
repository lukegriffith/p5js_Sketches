var width;
var height;

var limit = 120;
var itteration = 0;
var drops;
var splashes = Array();


function setup(){
    width = window.windowWidth;
    height = window.windowHeight;
    createCanvas(width,height);
    //fill(0,50,255);
    
    
    drops = new Array();

    for (var i = 0; i < 100; i++) {
        var d = new drop()
        drops.push( d );
    }

}

function draw() {
    background(150,150,150);
    
    
    noStroke();
    fill(140,140,140);
    rect(0, height - 200, width, 200);

    
    splashes.forEach(function(splash){
        splash.draw();
    })



    while (splashes.length > 150) {
        var splash = splashes.shift();
        splash.draw();
    }


    drops.forEach(function (drop){
        drop.draw();
    })

    
    
    

}

var drop = function (){

    this.x = random(0,width);
    this.y = random(-500,-50);
    this.speed = random(5,10);
    this.end = random(height - 200, height)
    this.alpha = random(75,95);


    this.draw = function(){
        this.y = this.y + this.speed;
        stroke(0,0,100,this.alpha);
        line(this.x,this.y,this.x,this.y+10);

        if (this.y > this.end) { 
            this.x = random(0,width);
            this.y = random(-500,-50);
            splash = new puddle(this.x, this.end+15)
            splash.draw();
            splashes.push(splash);
        }
    }

    
}

var puddle = function (x,y){

    this.w = random(5,12);
    this.h = random(3,6);
    this.alpha = random(33,75);

    this.draw = function() {
        noStroke();
        fill(0,50,75,this.alpha);
        ellipse(x,y,this.w,this.h);
    }
}

