let tab = document.querySelectorAll(".tabs h3");

let tabContent =  document.querySelectorAll(".tab-content div")

tab.forEach((btn , index) =>{
    
    btn.addEventListener("click" , ()=>{
            for(let i = 0; i <tabContent.length;  i++){
                
                tabContent[i].classList.remove("active");
                tabContent[index].classList.add("active");
               
            }
            for(let i = 0; i <tab.length;  i++){
                
                tab[i].classList.remove("active");
                tab[index].classList.add("active");
               
            }
    })
        
   
    })
