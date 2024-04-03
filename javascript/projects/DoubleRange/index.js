
window.onload = function(){
    slideOne();
    slideTwo()
}
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayOneVal = document.getElementById("range1");
let displayTwoVal = document.getElementById("range2");

let mingap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
// console.log(sliderOne.value, sliderTwo, displayOneVal, displayTwoVal);
function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= mingap){

        sliderOne.value = parseInt(sliderTwo.value) - mingap;
    }
    displayOneVal.textContent =  sliderOne.value;
    fillColor();

}

function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= mingap){

        sliderTwo.value = parseInt(sliderOne.value) + mingap;
    }
    displayTwoVal.textContent =  sliderTwo.value;
    fillColor();
}

function fillColor(){
  let  persent1 = (sliderOne.value / sliderMaxValue) * 100;
  let  persent2 = (sliderTwo.value / sliderMaxValue) * 100 ;
    console.log(persent1 , persent2 , sliderTrack);
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;



}