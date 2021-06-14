function setup() {
    video=createCapture(VIDEO);
    video.size(500,400);
    canvas=createCanvas(500,400);
    canvas.position(560,185,'fixed');
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    document.getElementById("square_side").innerHTML="Font size of the text will be= "+difference+"px";
    background('#969A97');
    fill('#FFFFFF');
    stroke('#000000');
    textSize(difference);
    text("Andrew",50, 400);
}

function modelLoaded() {
    console.log('PoseNet is initialised!')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);        

        leftWristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.y;
        difference=floor(leftWristX-rightWristX-190);
    }
}

difference=0;
rightWristX=0;
leftWristY=0;