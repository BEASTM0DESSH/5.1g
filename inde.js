var p1,p2;
p1=Math.floor(Math.random()*6+1);
console.log(p1);
p2=Math.floor(Math.random()*6+1);
console.log(p2);
var dp1img="dice"+p1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",dp1img);
var dp2img="dice"+p2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",dp2img);
if(p1>p2){
    document.querySelector("h2").textContent="PLAYER 1 WINS";

}
else if (p1==p2) {
    document.querySelector("h2").textContent="DRAW";

} 

else {
    document.querySelector("h2").textContent="PLAYER 2 WINS";
}
