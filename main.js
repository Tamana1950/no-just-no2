var x=0;
var y=0;
var draw_circle="";
var draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();


function start()
{
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="speech is recognized as:"+content;

    if(content=="circle")
    {
      x=Math.floor(Math.random() * 910);
      y=Math.floor(Math.random() * 610);
      document.getElementById("status").innerHTML="started drawing circle";
      draw_circle="set";

    }
    if(content=="rectangle")
    {
      x=Math.floor(Math.random() * 910);
      y=Math.floor(Math.random() * 610);
      document.getElementById("status").innerHTML="started drawing rectangle";
      draw_rect="set";

    }
    function setup()
    {
        canvas=createCanvas(920,620);
        
    }
    function draw()
    {
        if(draw_circle=="set")
        {
            radius=Math.floor(Math.random() * 100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML="circle is drawn";
            draw_circle="";
            
        }
        if(draw_rect=="set")
        {
            
            rect(x,y,70,50);
            document.getElementById("status").innerHTML="rectangle is drawn";
            draw_rect="";
            
        }
    }
}