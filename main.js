var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
var Textbox = document.getElementById("Textbox");

function start(){
    Textbox.innerHTML = "";

    Recognition.start();
}
Recognition.onresult = function  (event) {
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
Textbox.innerHTML = Content;
if (Content=="selfie")
{
    console.log("tomando selfie....")
    speak()
}
speak()
}
function speak (){
var synth = window.speechSynthesis;
speak_data = "Tomando tu selfie en 5 segundos"
var utterThis = new 
SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
    take_selfie();
    save();
},       5000);



}
 
Webcam.set({
width:360,
height:250,
image_format:"png",
png_quality: 90,
});
camera = document.getElementById("camera");

function take_selfie() {
    Webcam.snap(function(data_uri)
    {
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

function save()
{
link=document.getElementById("link");
image=document.getElementById("selfie_image").src;
link.href=image
link.click();

}