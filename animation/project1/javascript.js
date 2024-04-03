

var Container = document.querySelector("#video-container");
var myContainer = document.querySelector("#my-main-Container");
var myButton =  document.querySelector("#my-Buttons");
// myButton.style.display= "none";
// myContainer.addEventListener("mouseenter" ,()=>{
// myButton.style.display= "block";
// myButton.style.opacity= "0.4";
// myButton.style.scale= "1";
// })

Container.addEventListener("mousemove" , function(move){
    myButton.style.left = `${move.clientX - 30}px`;
    myButton.style.top = `${move.clientY + 10}px`;
})

const domElement  = document.createElement("p");


const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger) 

tl.from(
    '#myheader',
    {
     y: -100,
     autoAlpha: 0,
     duration: 1
    }

    
)
tl.from('#read' ,{
    y: "-30",
    autoAlpha: 0,
})
tl.from(".ani-content" ,{
    y: "-15",
    autoAlpha: 0
}

)
  tl.from("#main-btn a" , {
    x : -20,
    autoAlpha: 0,
    stagger: 1
  })
// tl.to(".box", {
//     scrollTrigger: ".box", 
//     x: 500,
//   });
