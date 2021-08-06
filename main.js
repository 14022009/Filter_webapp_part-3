nosse = "";
nose_x = 0;
nose_y = 0;
function preload() {
    nosse = loadImage('https://i.postimg.cc/kgw9GtfY/Mustache.png');
}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
    canvas.position(283, 220)
    video = createCapture(VIDEO);
    // video.position(383, 260);
    video.position(383, 260);
    video.hide();
    posenet = ml5.poseNet(video, modalloded);
    posenet.on('pose', gotresult);
}

function draw() {
    image(video, 0, 0, 800, 600);
    image(nosse, nose_x - 40, nose_y - 30, 300, 300);
}

function take_and_download_snapshot() {
    save("Filtered_Image.png")
}

function modalloded() {
    console.log("PoseNet Loded");
}

function gotresult(result) {
    if (result.length > 0) {
        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        console.log("Nose X =" + result[0].pose.nose.x);
        console.log("Nose Y =" + result[0].pose.nose.y);
    }
}