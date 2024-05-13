let lin1=document.querySelector("#line");
// let text = "You Gives Vote Or Not";
// let textElement = document.getElementById("text");
let cursor1=document.querySelector("#cursor");
let blur1=document.querySelector("#blur");
document.addEventListener("mousemove", function(dot){
    cursor1.style.left=dot.x+"px"
    cursor1.style.top=dot.y+"px"
})
document.addEventListener("mousemove", function(dot){
    blur1.style.left=dot.x-75+"px"
    blur1.style.top=dot.y-75+"px"
})
let time = 50;
let start = 0;

function type(){
    if(start < lin1.length){
        textElement.innerHTML += text.charAt(start);
        start++;
        setTimeout(type, time);
    }
}
type();

gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"main1",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3
    }
})
gsap.to("#main1",{
    backgroundColor:"#000"
})