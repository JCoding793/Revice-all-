// all buttons selection
let optionsButtons = document.querySelectorAll(".option-button");

//advanceButton example select fontSize selection font-size fontfamily
let advancedOptionButton = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");

let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = ["Arial", "Verdana", "Times New Roman", "Garamond", "Georgia"];

//Initial function

// function callas for higlighting alignButtos

const Initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  fontList.forEach((fname)=>{
     let optionValue = document.createElement('option');
     optionValue.setAttribute("value" , fname);
     optionValue.innerText = fname;
     console.log(fname)
     fontName.appendChild(optionValue)
  })
let i = 1; 
 while(i <= 7){
    let optionValue = document.createElement('option');
     optionValue.setAttribute("value" , i);
     optionValue.innerText = i;
     fontSizeRef.appendChild(optionValue);
     i++;
};
// default value 
fontSizeRef.value= 3;
}
function highlighter(className, needremove) {
  className.forEach((className) => {
    className.addEventListener("click", () => {
      //needsRemoval = true means only one button an dother would be nromal
      if (needremove) {
        let alreadyAcitve = false;
        //  if Currletly clicked button si alradcy active
        if (className.classList.contains("active")) {
          alreadyAcitve = true;
        }
        //remove hightlight formo other buttons
        hightlighterRemove(className);
        if (!alreadyAcitve) {
          className.classList.add("active");
        }
      }else {
        className.classList.toggle("active");
      }
    });
  });
}

const hightlighterRemove = (className)=>{
  className.forEach((className)=>{
    className.classList.remove("active")
  })
}


// main logic 
const modifyText  = (command , defaultUi , vlaue)=>{
    document.execCommand(command, defaultUi , vlaue);

}

//for basic operation which dont' need value parameter 
optionsButtons.forEach((button)=>{
  button.addEventListener("click" , () =>{
    modifyText(button.id , false , null)
  })
})

advancedOptionButton.forEach((btn)=>{
    btn.addEventListener("change" , ()=>{
        modifyText(btn.id , false , btn.value)
    })
})
    linkButton.addEventListener("click" , ()=>{
        let userLink = prompt("Enter a URL")
        if(/http/i.test(userLink)){

            modifyText(linkButton.id , false , linkButton.value)
        }else{
            userLink = "http://"+ userLink;
            modifyText(linkButton.id , false, userLink)
        }
    })
window.onload = Initializer();