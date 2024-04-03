let textArea = document.getElementById("limit-text");
let textCount = document.createElement("p");
textCount.innerHTML = 0; 
       document.body.appendChild(textCount);
textArea.addEventListener("input" ,  (e)=>{
    let wordLength = document.querySelector("span").innerText;  
    let textAreaNum  = e.target.value.length;
   if(parseInt(textAreaNum) === parseInt(wordLength)){
      fdftextArea.style.border = "1px solid red"
     textCount.innerHTML = " Stop Your Cross Word limit";
   }else {
    console.log("let contiues");
   
    textCount.innerHTML = textAreaNum;
   
}
})