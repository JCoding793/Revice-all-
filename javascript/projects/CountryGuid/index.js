let getCountry = document.querySelector("#country-inp");
let getBtn = document.querySelector("#search-btn");
let result = document.getElementById("result");
getBtn.addEventListener("click" , ()=>{
    let input = getCountry.value.toLowerCase();
    console.log(input)
     let fingalUrl = `https://restcountries.com/v3.1/name/${input}?fullText=true`;
     fetch(fingalUrl).then(response => response.json()).then((data) =>{
        console.log(data[0].capital[0]);
console.log(data)
       result.innerHTML = `<img src="${data[0].flags.svg}" class="flag-img">
       <h2>${data[0].name.common}</h2>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Capital:</h4>
               <span>${data[0].capital[0]}</span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Continent:</h4>
               <span>${data[0].continents[0]}</span>
           </div>
       </div>
        <div class="wrapper">
           <div class="data-wrapper">
               <h4>Population:</h4>
               <span>${data[0].population}</span>
           </div>
       </div>
       <div class="wrapper">
           <div class="data-wrapper">
               <h4>Currency:</h4>
               <span>${
                 data[0].currencies[Object.keys(data[0].currencies)].name
               } - ${Object.keys(data[0].currencies)[0]}</span>
           </div>
       </div>
        <div class="wrapper">
           <div class="data-wrapper">
               <h4>Common Languages:</h4>
               <span>${Object.values(data[0].languages)
                 .toString()
                 .split(",")
                 .join(", ")}</span>
           </div>
       </div>`;
     }).catch(()=>{
        result.innerHTML = `Data not found. Please try again`
     })
})