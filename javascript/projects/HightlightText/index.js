let searchField = document.getElementById("text-to-search");
let searchBtn = document.getElementById("search-btn");
let paragraph = document.getElementById("paragraph");


searchBtn.addEventListener("click" , ()=>{

   let inputValue =  searchField.value;

    inputValue = inputValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    console.log(inputValue);
    let partern =  new RegExp(`${inputValue}` , "gi");


    paragraph.innerHTML = paragraph.textContent.replace(partern , match => `<mark>${match}</mark>`)
})

