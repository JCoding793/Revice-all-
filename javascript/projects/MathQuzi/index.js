let operators= ["+","-","*"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector(".controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const erroMessage = document.getElementById("error-msg");
let answerValue;
let operatorQuestion;

//Randome value Generatoro 


const randomValue = (min, max)=> Math.floor(Math.random() * (max - min)) + min;


  const questionGenrator = ()=>{
        //two randome value between 1 to 20;
        let [num1 , num2] = [randomValue(1 , 20), randomValue(1 , 20)];
        console.log(num1, num2);


        //for getting randome operator 


        let randomOperator = operators[Math.floor(Math.random() * operators.length)]

        if(randomOperator == "-" && num2 > num1){
            [num1 , num2] = [num2 , num1];

        }
        //solve quextion 

        let solution = eval(`${num1}${randomOperator}${num2}`);



        let randomVar = randomValue(1, 5);
        console.log(randomVar);

        if(randomVar == 1){
            answerValue = num1;
            question.innerHTML = `<input type ="numbers" id="inputValue" placeholder="?" /> ${randomOperator} ${num2} = ${solution}`;
        }else if(randomVar == 2){
            answerValue = num2;
            question.innerHTML = `${num1} ${randomOperator} <input type ="numbers" id="inputValue" placeholder="?" /> = ${solution}`;
        }else if(randomVar == 3){
            answerValue = randomOperator;
            operatorQuestion = true;
            question.innerHTML = `${num1} <input type ="text" id="inputValue" placeholder="?" /> ${num2} = ${solution}`;
        }else{
            answerValue = solution;
            question.innerHTML = `${num1} ${randomOperator} ${num2} = <input type ="numbers" id="inputValue" placeholder="?" />`;

        }
//User input Check 
submitBtn.addEventListener("click", ()=>{
    erroMessage.classList.add("hide");
    let userInput = document.getElementById("inputValue").value;
    if(userInput){
       if(userInput == answerValue){
        stopGame(`Yippie!! <span>Correct</span> Answer`)
       }else if(operatorQuestion && !operators.includes(userInput)){
        erroMessage.classList.remove("hide");
        erroMessage.innerHTML = "Please enter a valid operator"

       }else{
        stopGame(`Opps!! <span>Wrong</span> Answer`)
       }
    }else{
        erroMessage.classList.remove("hide");
        erroMessage.innerHTML = "Input Cannot Be Empty"
    }
})
        
    };

    //start Game 

    startBtn.addEventListener("click", ()=>{
        operatorQuestion = false;
        answerValue = "";
        erroMessage.innerHTML = "";
        erroMessage.classList.add("hide");
        controls.classList.add("hide");
        startBtn.classList.add("hide")
        questionGenrator();

    })

    const stopGame = (resultText)=>{
        result.innerHTML = resultText;
        startBtn.innerText= "Restart"
        controls.classList.remove("hide");
        startBtn.classList.remove("hide");
    }