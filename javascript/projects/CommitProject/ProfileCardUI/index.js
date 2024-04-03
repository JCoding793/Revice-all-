const theme = document.querySelector(":root");
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){
        const colors = e.currentTarget.classList;
console.log("click")
        if(colors.contains("btn1")){
            theme.style.setProperty("--theme-color" , "#3498db")
        }else if(colors.contains("btn2")){
            theme.style.setProperty("--theme-color" , "#3498db")
        }else if(colors.contains("btn3")){
            theme.style.setProperty("--theme-color" , "#1cb65d");
        }else if(colors.contains("btn4")){
            theme.style.setProperty("--theme-color" , "#8e44ad");
        }else{
            theme.style.setProperty("--theme-color" , "#f4b932");
        }
    })
})