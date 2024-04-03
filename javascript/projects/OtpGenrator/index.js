let myBtn =document.getElementById("generateBtn");
let para = document.getElementById("otpDisplay");

myBtn.addEventListener("click" , ()=>{
    let otp = parseInt(Math.random() * (100000 - 199999) + 199999);
     para.innerText = otp;
})


