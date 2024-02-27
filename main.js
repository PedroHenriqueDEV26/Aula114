var video = ""
var results = []
var narizX, narizY
function preload(){

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
    // console.log(results);
    // console.log("narizX"+results[0].pose.nose.x)
    // console.log("narizY"+results[0].pose.nose.y)
    narizX = results[0].pose.nose.x - 96;
    narizY = results[0].pose.nose.y - 50;
   }
    
}

function draw(){
    image(video,0, 0, 500, 400)
    fill("red")
    circle(narizX, narizY, 25)
}

function takeSnapshot(){
    save("img.png")
}

