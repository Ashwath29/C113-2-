function take_snapshot() {
    save("student_name.png");
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,300,200,150,150);
    fill("red");
    circle(50,50,100);
    circle(590,50,100);
    circle(50,430,100);
    circle(590,430,100);
    fill("green");
    rect(100,40,440,20);
    rect(100,420,440,20);
    rect(40,100,20,280);
    rect(580,100,20,280);
}