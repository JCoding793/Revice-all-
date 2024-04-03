

let timeLeft =document.querySelector(".time-left");

let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scroeContainer = document.getElementById(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.getElementById(".start-screen");
let startBtn = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countDown;


const quizArray = [
    {
      id: "0",
      question: "Which is the most widely spoken language in the world?",
      options: ["Spanish", "Mandarin", "English", "German"],
      correct: "Mandarin",
    },
    {
      id: "1",
      question: "Which is the only continent in the world without a desert?",
      options: ["North America", "Asia", "Africa", "Europe"],
      correct: "Europe",
    },
    {
      id: "2",
      question: "Who invented Computer?",
      options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
      correct: "Charles Babbage",
    },
  ];


  //
  restart.addEventListener("click", ()=>{
    initial();
    displayContainer.classList.remove("hide");
    scroeContainer.classList.add("hide");

  })


  nextBtn.addEventListener("click",
  (displayNext = ()=>{
    questionCount += 1;
    if(questionCount == quizArray.length){
        //hide
    displayContainer.classList.add("hide");
    scroeContainer.classList.add("hide");

    userScore.innerHTML = "Your score is "+ scoreCount + " out of "+ questionCount
    }else{
        // displayQuextion 
countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";

quizDisplay(questionCount);
count =11;
clearInterval(countDown);
timerDisplay();
    }
}))
  //
  const timerDisplay = ()=>{
    countDown=  setInterval(()=>{
        count--;
        timeLeft.innerHTML = `${count}s`
        if(count == 0){
            clearInterval(countDown);
            displayNext();
        }
    }, 1000)
  }
  
  //display quiz 

  const quizDisplay= (questionCount)=>{
    let quizCard = document.querySelectorAll(".container-mid");

    quizCard.forEach((card)=>{
        card.classList.add("hide");
    })
    quizCard[questionCount].classList.remove("hide");

  };


  //quiz creator 
  function quizCreator(){
    quizArray.sort(()=>Math.random() - 0.5);


    for(let i of quizArray){
        i.options.sort(()=>Math.random() - 0.5);

        let div= document.createElement("div");
        div.classList.add("container-mid" , "hide");
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        let question_Div = document.createElement("p");
        question_Div.classList.add("question");
        question_Div.innerHTML = i.question;
        div.appendChild(question_Div);
        
        div.innerHTML += `
        <button class="option-div" onclick="cheker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="cheker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="cheker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="cheker(this)">${i.options[3]}</button>
        `;
        
        quizContainer.appendChild(div);
    }
  }

// function to chedck if option is correct 
function cheker(userOption){
    let userSolution  = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll("option-div");

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount++;
    }else{
        userOption.classList.add("incorrect");
    
    
        options.forEach((element)=>{
            if(element.innerText == quizArray[questionCount].correct){
                element.classList.add("correct");


            }
        });
    }
 clearInterval(countDown);
 options.forEach((element)=>{
    element.disabled = true;
 });

}


  //innitial 
  function initial(){
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countDown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    
  }
  //start user click 

  startBtn.addEventListener("click", ()=>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
     
  })

  //hide and   Quize 
  window.onload = ()=>{
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
  }