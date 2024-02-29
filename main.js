var takeImageM = ""
var video = ""
var results = []
var rightWristX, rightWristY
var takeImageH = ""
var rightEarX, rightEarY, leftEarX, leftEarY




function preload(){
    takeImageM = loadImage("controle.png")
    takeImageH = loadImage("headset.png")
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(results){
   if(results.length > 0){
    console.log(results);
   //  console.log("rightWristX"+results[0].pose.nose.x)
    //   console.log("rightWristY"+results[0].pose.nose.y)
    rightWristX = results[0].pose.rightWrist.x - 100;
    rightWristY = results[0].pose.rightWrist.y - 50;   
    
    rightEarX = results[0].pose.rightEar.x - 80
    rightEarY = results[0].pose.rightEar.y 

    leftEarX = results[0].pose.leftEar.x
    leftEarY = results[0].pose.leftEar.y - 100
   }
    
}

function draw(){
    image(video,0, 0, 500, 400)
    fill("red")
    //circle(rightWristX, rightWristY, 25)
    image(takeImageM, rightWristX, rightWristY, 100,80)

    image(takeImageH, rightEarX, leftEarY, 180,165)
}

function takeSnapshot(){
    save("img.png")
}



