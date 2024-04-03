const productData = [
    {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "bedroom.jpg",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "Kitchen.jpg",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "tvroom.jpg",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "bedroom.jpg",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "Kitchen.jpg",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "tvroom.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "bedroom.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "Kitchen.jpg",
      },
];

let product = document.querySelector("#products");
let myButtos = document.getElementById("buttons");
console.log(myButtos)

for(let i in productData){
// let start create card 
// card div
let card = document.createElement("div");

//.imageContainer
let imageContainer = document.createElement("div");

//img

let myImage = document.createElement("img");


//container 
let myContainer = document.createElement("div");


//name 
let myName = document.createElement("h5");
//price 
let myPrice = document.createElement("h6");

//card should be have categroy 
card.classList.add("card", productData[i].category, "hide");
myContainer.classList.add("container");
myName.classList.add("product-name");

imageContainer.classList.add("image-container");

myName.textContent = productData[i].productName.toUpperCase();
myPrice.textContent = "$" + productData[i].price;
myImage.setAttribute("src" , productData[i].image)
// card.textContent = productData[i].productName;



myContainer.appendChild(myName);
myContainer.appendChild(myPrice)
imageContainer.appendChild(myImage);
card.appendChild(imageContainer);
card.appendChild(myContainer);
product.appendChild(card);

// product.innerHTML += `<p>${productData[i].productName}<p>${productData[i].category}<p>
// <p>${productData[i].price}</p><p>${productData[i].image}</p>`
}

  





//parmerte passed from button ()

function  filterProduct(value){

   let buttons =  document.querySelectorAll(".button-value");

   buttons.forEach((btnValue)=>{
    //check if value eualt to innertext 
    if (value.toUpperCase() == btnValue.innerText.toUpperCase()){
       btnValue.classList.add("active");
       console.log(btnValue.innerHTML);

    }else {
      btnValue.classList.remove("active")
    }
   });
   
  let element = document.querySelectorAll('.card')
  
  element.forEach((element)=>{
    if(value == "All"){
      element.classList.remove("hide");
    }else {
    
      console.log(element.classList.contains(value))
      if(element.classList.contains(value)){
//display elmenet based on category 
        element.classList.remove("hide");
      }else {
        element.classList.add("hide");

      }

    }
  })
}
///Search Button click 

document.getElementById("search").addEventListener("click" , ()=>{
  let searchInput = document.getElementById("search-input").value;

  let elments = document.querySelectorAll(".product-name");

  let cards = document.querySelectorAll('.card');

  elments.forEach((element , index )=>{
    //check if text include the search value 
    if(element.innerText.includes(searchInput.toUpperCase())){
      cards[index].classList.remove('hide');
    }else {
      cards[index].classList.add("hide")
    }
  })
})
window.onload = () =>{
 
  filterProduct("All")

}

document.querySelector(".mysearchbtn").addEventListener("click", function (){
  
  let mysearch = document.querySelector('#mysearchfield');

 document.querySelectorAll(".my-p").forEach((myP)=>{
  if(myP.innerText.includes(mysearch.value)){
    console.log(myP)
  }else{
    myP.classList.add('hide')
  }
 })

})