let drag = document.getElementById("dragable");



let initialX = 0;
let initialY  = 0;

let moveElement = false;

let events = {
   mouse:{
    down: "mousedown",
    move: "mousemove",
    up: "mouseup",
},
touch:{
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};


let deviseType = "";

const isTouchDevice = () =>{
    try{
        document.createEvent("TouchEvent");
        deviseType = "touch";
        return true;
    }
    catch (e)
    {
        deviseType = "mouse";
        return false;

    }
};



isTouchDevice();
// console.log(!isTouchDevice())

drag.addEventListener(events[deviseType].down, (e)=>{
    e.preventDefault();
    initialX  = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY  = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
   
    //START MOVE
    moveElement = true;
})


// move
drag.addEventListener(events[deviseType].move, (e)=>{
    if(moveElement){

        e.preventDefault();
        let newX  = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY  = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        console.log(initialX , initialY);
        

        drag.style.top = drag.offsetTop - (initialY - newY) + "px";
        drag.style.left = drag.offsetLeft - (initialX - newX) + "px";

        initialX = newX;
        initialY =  newY;

        console.log(initialX , initialY);
    }
});

drag.addEventListener(events[deviseType].up, (stopMovement = (e) =>{
    moveElement = false;

}))


drag.addEventListener("mouseleave" , stopMovement);
drag.addEventListener(events[deviseType].up , (e)=>{
  moveElement = false;
})