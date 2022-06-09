var status;
objects = [];
alarm = '';

function setup() {

    canvas = createCanvas(380, 380);
    canvas.center();
    back_camera = {
        video: {
            facingMode: {
                exact: "environment"
            }
        }
    };
    video = createCapture(VIDEO);
    video.size(380, 380)
    video.hide();

    document.getElementById('status').innerHTML = 'Detecting...'

    object_detector = ml5.objectDetector('cocossd', model_loaded);
}

function preload() {
    alarm = loadSound("alarm.mp3");
}
