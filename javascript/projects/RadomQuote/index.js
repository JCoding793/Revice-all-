// let url = `https://type.fit/api/quotes`;
let url = `https://api.quotable.io/random`;
let quote = document.getElementById("quote");
let authors = document.getElementById("author");

let getQuote = function (){
let randomQuote = parseInt(Math.random() * 17);
    fetch(url).then(response => response.json()).then(data =>{
        console.log(data)
        quote.innerHTML = data.content;
    //   let getValidAuthor  =   data[randomQuote].author.split(",");
        authors.innerHTML = data.author;
    }).catch(
        console.log("data not found")
    );
}
document.querySelector("#btn").addEventListener("click" , ()=>{
    getQuote();
})

window.addEventListener("load" , getQuote())