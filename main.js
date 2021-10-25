objects = [];
statuss = "";

function preload() {
    video = createVideo('video.mp4');
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.centre();
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status:Detecting";
}

function modelLoaded() {
    console.log("modelLaoaded")
    statuss = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results)
    objects = results;
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (statuss != "") {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : objects Detected";
            document.getElementById("number_of_objects").innerHTML = "number-of_objects:" + objects.length;
        }
    }
}