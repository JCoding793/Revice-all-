let tabData =  document.querySelectorAll(".tab-content div");
let  tabs = document.querySelectorAll(".tabs h3");
let  pass = document.getElementById("myPass");
let  btns = document.getElementById("btns");

console.log(tabs , tabData)


tabs[1].addEventListener("click" , ()=>{
    // console.log("console tab 2")
    for(let i = 0; i < tabData.length; i++){
       
          if(tabData[i].classList.contains("active")) {
            tabData[i].classList.remove("active");
          }

    }
    // tabs[].classList.add("active")
    tabData[1].classList.add("active")

})

tabs[0].addEventListener("click" , ()=>{
    // console.log("console tab 2")
    for(let i = 0; i < tabData.length; i++){
       
          if(tabData[i].classList.contains("active")) {
            tabData[i].classList.remove("active");
          }

    }
    tabData[0].classList.add("active")

})
tabs[2].addEventListener("click" , ()=>{
    // console.log("console tab 2")
    for(let i = 0; i < tabData.length; i++){
       
          if(tabData[i].classList.contains("active")) {
            tabData[i].classList.remove("active");
          }

    }
    // tabs[2].classList.add("active")
    tabData[2].classList.add("active")

})


btns.addEventListener("click" ,()=>{
    if(pass.getAttribute("type") == "text"){
        pass.setAttribute("type" , "password");
    }else{
        pass.setAttribute("type" , "text");
    }
    
})
//main logic


