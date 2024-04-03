let startContainer = document.querySelectorAll(".star-container");

const submitButton = document.querySelector("#submit");
const message = document.querySelector("#message");
const submitSection = document.querySelector("#submit-section");
console.log(startContainer, submitButton, message, submitSection)
//events for touch and mouse
let events = {
    mouse:{
        over:"click",
    },
    touch:{
        over: "touchstart"
    }
};
let deviceType = "";


 const isTouchDevice = () => {
    try{
        document.createElement("TouchEvent");
        deviceType = "touch";
        return true;
    }
    catch(e){
        deviceType = "mouse";
        return false;     
    }
};

isTouchDevice();
console.log(isTouchDevice());
startContainer.forEach((elment,index)=>{
    elment.addEventListener(events[deviceType].over , ()=>{
        submitButton.disabled = false;
        if(elment.classList.contains("inactive")){
           
            ratingUpdate(0 , index , true);

        }else{
            ratingUpdate(index, startContainer.length -1 , false);
        }
    });
});
const ratingUpdate = (start,end,active)=>{
    for(let i = start; i<=end; i++){
        if(active){
            startContainer[i].classList.add("active"); 
            startContainer[i].classList.remove("inactive");
            startContainer[i].firstElementChild.className = "fa-star fa-solid"
        }else{
            startContainer[i].classList.remove("active"); 
            startContainer[i].classList.add("inactive");
            startContainer[i].firstElementChild.className = "fa-star fa-regular"
        }
    }
let activeElement = document.getElementsByClassName("active");

if(activeElement.length > 0){
    switch(activeElement.length){
        case 1:
            message.innerText = "Terrible";
            break;
            case 2:
                message.innerText = "Bad";
                break;
            case 3:
                message.innerText = "Satisfied";
                break;
            case 4:
                message.innerText = "Good";
                break;
            case 5:
                message.innerText = "Excellent";
                break;
            
    } 
    }else{
        message.innerText = ""
    }
};
//message

submitButton.addEventListener("click" , ()=>{
    submitSection.classList.remove("hide");
    submitSection.classList.add("show");
    submitButton.disabled = true;
})

window.onload = ()=>{
    submitButton.disabled = true;
    submitSection.classList.add("hide");
}



