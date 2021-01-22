Webcam.set({
    height: 300,
    width:350,
    image_quality: 'png',
    png_quality: 90
})
camera = document.getElementById("camera")
Webcam.attach('#camera')
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "capurted_image" src = "'+data_uri+'">'
    })
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/KdW9FpgDq/',modelLoaded);