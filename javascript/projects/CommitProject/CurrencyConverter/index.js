const currencies = [
    "DEM",
	"GHC",
	"GIP",	
	"GRD",	
	"DKK",
	"XCD",	
	"USD",	
	"GTQ",	
    "XOF",
    "USD",
	"AUD",
	"ITL",
	"HNL",	
	"HUF",	
    "ISK",
    "INR",	
	"IDR",	
    "XDR"	,
	"IRR",	
	"IQD",	
	"ILS",	
	"ITL",
	"JMD",
    "JPY"
];

const fromDropDown = document.getElementById("from-currency-select");
const result = document.getElementById("result");
const toDropDown = document.getElementById("to-currency-select");

//create dropdownfromt he currencies array

currencies.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.text = element;
    fromDropDown.add(option);
});

//repeat same thing for the other droopdown 
currencies.forEach(element => {
    const option = document.createElement("option");
    option.value = element;
    option.text = element;
    toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrecny = () =>{
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrecny = toDropDown.value;

    if(amount.length !=0){
        fetch(api).then(response => response.json()).then(data=>{
            let fromExchangeRate = data.conversion_rates[fromCurrency];
            let toExchnageRate = data.conversion_rates[toCurrecny];
            console.log(data)})
            const convertAmound =  (amount / fromExchangeRate) * toExchnageRate;
            result.innerHTML = `${amount} ${fromCurrency} = ${convertAmound.toFixed(2)} ${toCurrecny} `

    }else{
        alert("Please fill the amount");

    }
}

document.querySelector("#convert-button").addEventListener("click" , convertCurrecny);
window.addEventListener("load" , convertCurrecny)