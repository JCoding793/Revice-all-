const testMonial =[
    {} , {}, {}
]

let i = 0;
let j = testMonial.length;

let testMonialContainer = document.getElementById("testimonial-container");
let nextBtn =  document.getElementById("next");
let prevBtn =  document.getElementById("prev");
nextBtn.addEventListener("click" , ()=>{
    i = (j + i + 1) % j;
    displayTestimonial();
})
prevBtn.addEventListener("click" , ()=>{
    i = (j + i - 1) % j;
    displayTestimonial();
})
let displayTestimonial = () =>{
testMonialContainer.innerHTML = 
`<p>${testMonial[i].testmonial}</p>
 <img src="${testMonial[i].testmonialImg}"
 <h3>${testMonial[i].name}</h3>
 <h6>${testMonial[i].job}</h6>
`
}

window.onload = displayTestimonial;
