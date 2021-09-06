Webcam.set({
    width:310,
    height:310,
    image_format:'png',
    png_quality:90,
    constraints:{
        facingMode:'enviremont'
    }
})
camera = document.getElementById("camera")
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "CapturedImage" src = "'+data_uri+'">'
    })
}
console.log('ml5 version', ml5.version)
Classifier = ml5.imageClassifier('MobileNet', modelLoaded)
function modelLoaded(){
    console.log('Model Loaded!')
}
function check(){
img = document.getElementById("CapturedImage")
Classifier.classify(img, gotResult)

}
function gotResult(error, results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("object_name").innerHTML = results[0].label;
}

}