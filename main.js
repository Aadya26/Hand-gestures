Prediction1=""
Prediction2=""
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
    });


camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function takesnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "Captured_image" src="'+data_uri+'"/>';   
    });
}
    console.log('ml5 version', ml5.version);
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-cAwlLJm1/model.json' , modelLoaded);
    function modelLoaded()
    {
        console.log('model loaded')
    }

    function speak()
    {
        var synth= window.speechSynthesis;
        speakData1= "The first prediction is " +Prediction1;
        speakData2= "The second prediction is " +Prediction2;
        var sayThis= new SpeechSynthesisUtterance( speakData1+speakData2);
        synth.speak(sayThis)
    }
    function