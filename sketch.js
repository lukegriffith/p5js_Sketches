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

    this.x = getRandomInt(0,width);
    this.y = getRandomInt(-500,-50);
    this.speed = getRandomInt(15,20);
    this.end = getRandomInt(height - 200, height)

    this.draw = function(){
        this.y = this.y + this.speed;
        stroke(0,50,75);
        line(this.x,this.y,this.x,this.y+10);

        if (this.y > this.end) { 
            this.x = getRandomInt(0,width);
            this.y = getRandomInt(-500,-50);
            splash = new puddle(this.x, this.end+15)
            splash.draw();
            splashes.push(splash);
        }
    }

    
}

var puddle = function (x,y){

    this.w = getRandomInt(6,12);
    this.h = getRandomInt(6,12);

    this.draw = function() {
        noStroke();
        fill(0,50,75,75);
        ellipse(x,y,this.w,this.h);
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }