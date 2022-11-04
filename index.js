var n=document.querySelectorAll("button").length;
for(var i=0;i<n;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
};

addEventListener("keydown",preesed);
function preesed(event){
  audio(event.key);
  buttonani(event.key);
}

function clicked(){
  var button=this.innerHTML;
 audio(button);
 buttonani(btton);}


 function audio(button)
 {
 switch(button){
  case 'W':
  case 'w':
    {var audio =new Audio('sounds/Record-002.aac');
    audio.play();}
    break;
    case 'A':
    case 'a':
    {var audio =new Audio('sounds/crash.mp3');
    audio.play();}
    break;
    case 'S':
    case 's':
    {var audio =new Audio('sounds/snare.mp3');
    audio.play();}
    break;
    case 'D':
    case 'd':
    {var audio =new Audio('sounds/tom-1.mp3');
    audio.play();}
    break;
    case 'J':
    case 'j':
    {var audio =new Audio('sounds/tom-2.mp3');
    audio.play();}
    break;
    case 'k':
    case 'k':
    {var audio =new Audio('sounds/tom-3.mp3');
    audio.play();}
    break;
    case 'L':
    case 'l':
    {var audio =new Audio('sounds/tom-4.mp3');
    audio.play();}
    break;
    default:
      break;
 };
 function buttonani(button){
  var activebutton=document.querySelector("."+button);
  activebutton.classList.add("pressed");
  setTimeout(function(){activebutton.classList.remove("pressed");},0.1)


 };
}
