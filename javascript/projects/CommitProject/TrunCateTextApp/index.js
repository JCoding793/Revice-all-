let inputText = document.getElementById("input-text");
let outputText = document.getElementById("output-text");

let truncateBtn = document.getElementById("truncate");

let copyBtn = document.getElementById("copy");



console.log(inputText,  outputText, truncateBtn, copyBtn);


truncateBtn.addEventListener("click" , ()=>{
 let numLen= parseInt(document.getElementById("len").value);
if(numLen){

    if(numLen > 0  && inputText.value.length > numLen){

        outputText.value = inputText.value.slice(0 , numLen)

    }else{
        outputText.value = inputText.value;
    }
}else{
outputText.value = "";
alert("Please fill the length input")
}

})

copyBtn.addEventListener("click" , ()=>{
    navigator.clipboard.writeText(`${outputText.value}`)
     
})