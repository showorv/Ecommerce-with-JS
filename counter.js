
function page4Animation(){
    gsap.to(".page4-div",{
        transform:"translateX(-570%)",
        duration:5,
        scrollTrigger:{
            trigger:".page4-div",
            scroller:"body",
            scrub:true,
            start:"top 40%",
            end:"top 20%"
        }
    })
}
page4Animation()

function imageanimation(){
    var image=document.querySelector(".left-box img")
    var save=document.querySelector(".left-box h4 ")
    
    image.addEventListener("mouseenter",()=>{
     gsap.to(image,{
        width: "450px",
        height: "450px"
     })
    })
    image.addEventListener("mouseleave",()=>{
     gsap.to(image,{
        width: "350px",
        height: "350px"
     })
    })
    image.addEventListener("mouseenter",()=>{
     gsap.to(save,{
       opacity:0
     })
    })
    image.addEventListener("mouseleave",()=>{
     gsap.to(save,{
       opacity:1
     })
    })
    
}
imageanimation()

var main=document.getElementById("main")
var small=document.getElementsByClassName("choice")

small[0].onclick=function(){
    main.src=small[0].src;
}
small[1].onclick=function(){
    main.src=small[1].src;
}
small[2].onclick=function(){
    main.src=small[2].src;
}
small[3].onclick=function(){
    main.src=small[3].src;
}
small[4].onclick=function(){
    main.src=small[4].src;
}