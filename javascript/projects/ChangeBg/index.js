document.querySelector("body").addEventListener("click" , ()=>{
  const mathdo =   `rgb( ${parseInt(Math.random () * 255)}, ${parseInt(Math.random () * 255)}, ${parseInt(Math.random () * 255)})`;

  document.querySelector("body").style.background = mathdo;
})