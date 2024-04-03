let amountButton  = document.getElementById("total-amount-button")
let amountInput= document.getElementById("total-amount");
let budgetError= document.getElementById("budget-error");
let amount = document.getElementById("amount");
let expenditureValue = document.getElementById("expenditure-value");
let balanceValue = document.getElementById("balance-amount");
let productTitle= document.getElementById("product-title");
let productCost = document.getElementById("user-amount");
let productbutton = document.getElementById("check-amount");
let list = document.getElementById("list");


let totalAmm = 0 ;


//fetch Amount Data 


amountButton.addEventListener("click" , ()=>{
 if(amountInput.value == ""){
    alert("Please enter vaue ")
 }else{
//   amount.innerText = amountInput.value;
//   balanceValue.innerText =  amountInput.value;
totalAmm = amountInput.value;
 }
});

//product button 

productbutton.addEventListener("click" , ()=>{

     let valueP = productCost.value;
     let titleP = productTitle.value;
     let valP = Number(valueP);
    let mainBalance = amount.innerText;
    let currentBal = (balanceValue.innerText - valP);
    createList(valP , titleP)
    balanceValue.innerText = currentBal;
console.log(expenditureValue.innerText)
    if(expenditureValue.innerText == 0){
        expenditureValue.innerText = valP;
    }else{
       let newVal=  expenditureValue.innerText;
       let x = Number(newVal)
        expenditureValue.innerText =  x + valP;
    }
    
})

///


const createList = (val1 , val2)=>{
    let subListContent = document.createElement("div");
    subListContent.classList.add("sublist-content", "flex-space");
    subListContent.innerHTML = `<p class="product">${val2}</p><p class="amount">${val1}</p>`
    list.appendChild(subListContent);
}