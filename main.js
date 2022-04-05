function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    background("white");
    synth = window.speechSynthesis
    canvas.mouseReleased(classifyCanvas)
}

function draw() {
    strokeWeight(12);

    stroke(0);

    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clear_canvas() {
    background("white");
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function gotResult(error,results) {
    if(error){
        console.log(error);
    }
    else{
        console.log(results);

        document.getElementById("label").innerHTML="label:"+results[0].label;

        document.getElementById("confidence").innerHTML = "confidence:"+Math.round(results[0].confidence*100)+"%";


        utterthis = new SpeechSynthesisUtterance(results[0].label);
        synh.speak (utterthis)


    }

}
