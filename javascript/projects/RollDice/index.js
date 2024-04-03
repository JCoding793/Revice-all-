//variarble
let rollBtn = document.querySelector(".roll-btn");
let rollDiv = document.querySelector(".dice-div");
let rollDiv1 = document.querySelector(".dice-div2");

// console.log(rollBtn, rollDiv , rollDiv1)

rollBtn.addEventListener("click", function () {
  let clickEvent = true;
  if (clickEvent) {
    document.querySelectorAll(".rem").forEach((element) => {
      element.remove();
      
    });
    clickEvent = false;      
  }
    if (!clickEvent === true) {
        let rollValDice = parseInt(Math.random() * 6 + 1);
        let rollValDice1 = parseInt(Math.random() * 6 + 1);
        console.log(rollValDice, rollValDice1);

        for (let i = 1; i <= rollValDice; i++) {
          let pPara = document.createElement("p");
          pPara.classList.add("rem");
          console.log(i);
          rollDiv.appendChild(pPara);
        }
        for (let i = 1; i <= rollValDice1; i++) {
          let pPara = document.createElement("p");
          pPara.classList.add("rem");
          rollDiv1.appendChild(pPara);
        }

        document.querySelector(".result").innerHTML =
          rollValDice + rollValDice1;
          clickEvent = true;
      }


  //    function Dice1(){
  //       for(let i = 1 ; i <= rollValDice; i++){
  //         pPara.innerText = `Print : __${rollValDice[i]}`
  //         rollDiv.appendChild(pPara)
  //       }
  //    }
  //    function Dice2(){
  //     for(let i = 1 ; i <= rollValDice1 ; i++){
  //         pPara.innerText = `Print : __${rollValDice1[i]}`
  //         rollDiv1.appendChild(pPara)
  //       }
  //    }
  //     Dice1();
  //     Dice2();
});
