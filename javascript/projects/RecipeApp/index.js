let result = document.getElementById("result");
let useInput = document.getElementById("user-inp");
let searchBtn = document.getElementById("search-btn");
let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=pizza`
console.log(result , searchBtn , url)
searchBtn.addEventListener("click" , ()=>{
let myInput = useInput.value;

    if(myInput.length  < 1){
        result.innerHTML = `<h3>Input Field Cannot Be Empty<h3>`
    }
})

fetch(url).then(response => response.json()).then((data)=>{
    console.log(data);
    let myData = data.meals[0];

    console.log(data.meals[0].idMeal);
     let count = 1 ;
     let ingredients = [];
     for(let i in myData){
        let ingredient = "";
        let measure = "";
        if(i.startsWith("strIngredient") && myData[i]){
         ingredient = myData[i];
         measure = myData[`strMeasure` + count];
         count += 1 ;
         ingredients.push(`${measure} ${ingredient}`);
        }
     }

     result.innerHTML = ` <img src=${myData.strMealThumb}>
     <div class="details">
         <h2>${myData.strMeal}</h2>
         <h4>${myData.strArea}</h4>
     </div>
     <div id="ingredient-con"></div>
     <div id="recipe">
         <button id="hide-recipe">X</button>
         <pre id="instructions">${myData.strInstructions}</pre>
     </div>
     <button id="show-recipe">View Recipe</button>`;

     let ingredientCon = document.getElementById('ingredient-con');
     let parent = document.createElement("ul");
     let recipe = document.getElementById("recipe");
     let hideRecipe = document.getElementById("hide-recipe");
     let showRecipe = document.getElementById("show-recipe");

     ingredients.forEach((i)=>{
        let child = document.createElement("li");
       child.innerText = i ;
       parent.appendChild(child);
       ingredientCon.appendChild(parent)
     })
     hideRecipe.addEventListener("click" , ()=>{
        recipe.style.display= "none";
     })
     showRecipe.addEventListener("click" , ()=>{
        recipe.style.display= "block";
     })
    
     console.log(ingredients);
});