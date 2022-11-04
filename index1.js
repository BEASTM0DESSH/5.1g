var n=document.querySelectorAll("button").length;
var score=0;
var bts=['w','a','s','d','j'];
begin();
function begin(){

var k=Math.floor(Math.random()*n);
var toBeClicked=(bts[k]);
buttonani(toBeClicked);
console.log("to be presed:",toBeClicked);
function buttonani(button){
  var activebutton=document.querySelector("."+button);
  activebutton.classList.add("pressed");
  setTimeout(function(){activebutton.classList.remove("pressed");},500);
};

// for(var i=0;i<n;i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
// };

addEventListener("keydown",preesed);
function preesed(event){
  check(event.key);
}

// function clicked(){
//   var butn=this.innerHTML;
//  check(butn);
// }

 function check(button)
 {console.log("pressed :",button);
  if(button==toBeClicked){ score=score+50;
    console.log("if");
    crbuttonani(button);
    var s=document.querySelector(".sc");
    s.innerHTML=score;
    var audio =new Audio('sounds/crash.mp3');
    audio.play();
    addEventListener("keyup",unpreesed);
    function unpreesed(event){
      setTimeout(begin,0.1);
    }
  }

  else if(button!=toBeClicked){
    wrbuttonani(button);
    score=0;
    console.log(score);
    var audio =new Audio('sounds/snare.mp3');
    audio.play();
    var s=document.querySelector(".sc");
    s.innerHTML=score;
    addEventListener("keyup",unpreesed);
    function unpreesed(event){
      setTimeout(begin,0.1);
    }
  }
}
};




function wrbuttonani(button){
  var activebutton=document.querySelector("."+button);
  activebutton.classList.add("wrong");
  setTimeout(function(){activebutton.classList.remove("wrong");},500);
};
function crbuttonani(button){
  var activebutton=document.querySelector("."+button);
  activebutton.classList.add("correct");
  setTimeout(function(){activebutton.classList.remove("correct");},500);
};
function off(button){
  var activebutton=document.querySelector("."+button);
  activebutton.classList.remove("");
};


