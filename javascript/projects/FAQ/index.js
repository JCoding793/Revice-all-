let wrapper = document.querySelectorAll(".wrapper .toggle");


wrapper.forEach((data , dataIndex)=>{

  data.addEventListener("click" , ()=>{
  
      
    let myActive = document.querySelectorAll(".content")
    let myBtn =  document.querySelectorAll(".toggle i");
    myActive.forEach((myData) =>{
       myData.style.height = "0";
    
    })
    myBtn.forEach((myData) =>{
        myData.setAttribute("class" , "fas fa-plus icon");
     
     })
     //   data.setAttribute("class" , "fas fa-plus icon");
     //   data[dataIndex].setAttribute("class" , "fas fa-minus icon");
     myBtn[dataIndex].setAttribute("class" , "fas fa-minus icon");
     myActive[dataIndex].style.height = "auto"; 
    })
})