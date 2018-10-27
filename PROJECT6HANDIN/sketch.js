/*
Mimi Jiao
wjiao@andrew.cmu.edu
Section E
Project-06
*/

function setup() {
    //originally 480 x 480
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    var H = hour();
    var M = minute();
    var S = second();
    background(0, 0, 255);
    rotateZ(frameCount * .01);

    //in this for loop, as the seconds increase, 
    //the number of "fan" components within this shape increases
    for (var i = 0; i < S * 100; i++) {
        noStroke();
        fill(i * sin(i), i * cos(i), sin(i) * 200);
        beginShape();
        vertex(sin(i) * 1000, cos(i) * 1000, sin(i) * 1000);
        vertex(sin(i) * 1010, cos(i) * 1010, cos(i) * 1010);
        vertex(cos(i), sin(i), sin(i));
        endShape(CLOSE);
    }

    //size of sphere depends on the minute
    push();
    rotateX(frameCount * .005);
    rotateZ(frameCount * .01);
    for (var a = 0; a < M; a++) {
        noFill();
        strokeWeight(.4);
        //stroke color of sphere
        stroke(sin(radians(M)) * 255, sin(radians(M)) * 255, 
               sin(radians(M)) * 255);
        //Scales the size of the sphere for aesthetic purposes
        var mMap = map(M, 0, 60, 10, width);
        ellipsoid(mMap , mMap , mMap );
    }
    pop();

    push();
    //scales the hour by two for aesthetic purpose
    H *= 2;
    //rotates the shapes
    rotateX(frameCount * .05);
    rotateY(frameCount * .01);
    //loop drawing continuous geometric elements
    for (var p = 0; p < H * 50; p ++) {
        //constantly changes color of stroke based on time/sin
        stroke(200 + 25 * sin(millis() / 1000), 
             200 + 25 * sin(millis() / 1000 + HALF_PI),
             200 + 25 * sin(millis() / 1000 - HALF_PI));
        strokeWeight(.5);
        noFill();
        //changing origin so object moves across page
        translate(sin(H) * 24, sin(H) * 24, H);
        //coordinates for drawn geometric shape
        beginShape();
        vertex(p * cos(p) * .1, H * 10 * cos(p), .1 * (p - 1000));
        vertex(p* .01 * .1, p* 0.1 * .1, p*.01 * .1);
        vertex(p * sin(p) * .1, .1 * p * cos(p), 10 * H);
        vertex(p * cos(p + PI) * .1, H * 10 * cos(p + PI), .1 * (p - 1000));
        vertex(p * sin(p + PI) * .1, .1 * p * cos(p + PI), .1 * H);
        endShape(CLOSE);
    }
    pop();
}
