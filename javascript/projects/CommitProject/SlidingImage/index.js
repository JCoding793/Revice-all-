//Initial References
const moves = document.getElementById("moves");
const container = document.querySelector(".container");
const startButton = document.getElementById("start-button");
const coverScreen = document.querySelector(".cover-screen");
const result = document.getElementById("result");
let currentElement = "";
let movesCount, imagesArr = [];

const isTouchDevise = () =>{
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}

//random number for images  

const randomNumber = () => Math.floor(Math.random() * 8) + 1;
// get row and coulman value form data-position ;
const getCoords = (element)=>{
    const [row, col] = element.getAttribute("data-position").split("_");
return [parseInt(row) , parseInt(col)];}

//row1 col1 are image co-ordiantes whtiel to row 2 col2 re blank image co -oridnate const check adjacent (row1  , row2 col1, col2,  = )

// }

const checkAdjcent = (row1, row2, col1, col2)=>{
    if(row1 == row2){
        //left and right
        if(col2 == col1 - 1 || col2 == col1 + 1){
            return true;
        }
    }else if(col1 == col2){
        // up and down 
        if(row2 == row1 - 1 || row2 == row1 + 1){
            return true;
        }
    }
    return false;
}
// fill arrray with random value for images 

const randomImages = ()=>{
    while(imagesArr.length < 8){

        let randomVal = randomNumber();
        if(!imagesArr.includes(randomVal)){

            imagesArr.push(randomVal);
        }
    }  
    imagesArr.push(9);
}

// genrate Grid 

const gridGenerator = () => {
    let count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let div = document.createElement("div");
        div.setAttribute("data-position", `${i}_${j}`);
        div.addEventListener("click", selectImage);
        div.classList.add("image-container");
        div.innerHTML = `<img src="image_part_00${
          imagesArr[count]
        }.png" class="image ${
          imagesArr[count] == 9 ? "target" : ""
        }" data-index="${imagesArr[count]}"/>`;
        count += 1;
        container.appendChild(div);
      }
    }
  };

const selectImage = (e)=>{
    e.preventDefault();

    currentElement = e.target;

    let tragetElement = document.querySelector(".target");

    let currentParent = currentElement.parentElement;

    let targetParent = tragetElement.parentElement;

    //get row and col vlaues 

    const [row1 , col1] = getCoords(currentParent);
    const [row2 , col2] = getCoords(targetParent);

    if(checkAdjcent(row1 , row2, col1 , col2)){
        //swap 
        currentElement.remove();
        tragetElement.remove();
        // get image index to be use later for manipulating array 
        let currentIndex  = parseInt(currentElement.getAttribute("data-index"));
        let targetIndex  = parseInt(tragetElement.getAttribute("data-index"));
        //

        currentElement.setAttribute("data-index" , targetIndex);
        tragetElement.setAttribute("data-index" , currentIndex);

        //
        currentParent.appendChild(tragetElement);
        targetParent.appendChild(currentElement);
        //array swap 
        let currentArrIndex = imagesArr.indexOf(currentIndex);
        let targetArrIndex = imagesArr.indexOf(targetIndex);
        [imagesArr[currentArrIndex], imagesArr[targetArrIndex]] = [
          imagesArr[targetArrIndex],
          imagesArr[currentArrIndex],
        ];
        //if(())

        if (imagesArr.join("") == "123456789") {
            setTimeout(() => {
              //When games ends display the cover screen again
              coverScreen.classList.remove("hide");
              container.classList.add("hide");
              result.innerText = `Total Moves: ${movesCount}`;
              startButton.innerText = "RestartGame";
            }, 1000);
          }

//         ///increment a display moves 

        movesCount += 1;
        moves.innerText = `Moves : ${movesCount}`;
    }
}

//start button click should dislay the countainer 

startButton.addEventListener("click" , ()=>{
    container.classList.remove("hide");
    coverScreen.classList.add("hide");
    container.innerHTML = "";
    imagesArr = [];
    randomImages();
    gridGenerator();
    movesCount =  0;
    moves.innerText = `Moves : ${movesCount}`;

});

//display start screen first 

window.onload = ()=>{
   coverScreen.classList.remove("hide");
   container.classList.add("hide");
}