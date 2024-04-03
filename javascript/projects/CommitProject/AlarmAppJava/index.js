let timerRef = document.querySelector(".timer-display");

const hourInput = document.getElementById("hourInput");

const minuteInput = document.getElementById("minuteInput");


const activeAlarms = document.querySelector(".activeAlarms");

const setAlarm = document.getElementById("set");
let alarmsArray = [];
let alarmSound = new Audio("./alarm.mp3");


let initialHour = 0 ; 
initialMinute = 0 ; 
alarmIndex = 0 ;


const appendZero = (value) => (value < 10 ? "0" + value : value);


const searchObject = (parameter, value )=>{
    let alarmObject , objIndex , exist = false ;
    alarmsArray.forEach((alarm, index)=>{
        if(alarm[parameter]== value){
            exist = true;
            alarmObject= alarm;
            objIndex = index;
            return false;
        }
    });
    return  [exist , alarmObject, objIndex]
}

// display


function displayTimer(){
    let date = new Date();
    let [hours, minutes, seconds] = [appendZero(date.getHours()), appendZero(date.getMinutes()),appendZero(date.getSeconds())];

    timerRef.innerHTML = `${hours}:${minutes}:${seconds}`;

    //alarm

    alarmsArray.forEach((alarm, index)=>{
        if(alarm.isActive){
            if(`${alarm.isActive}`){
                if(`${alarm.alarmHour}:${alarm.alarmMinute}` === `${hours} :${minutes}`){
                    alarmSound.play();
                    alarmSound.loop = true;

                }
            }
        }
    })
}


const InputCheacker = (inputvalue)=>{
    inputvalue = parseInt(inputvalue);
    if(inputvalue <  10){
        inputvalue = appendZero(inputvalue);
    }
    return inputvalue;
}

hourInput.addEventListener("input" , ()=>{
    hourInput.value = InputCheacker(hourInput.value);

})

minuteInput.addEventListener("input" , ()=>{
    minuteInput.value = InputCheacker(minuteInput.value);
})

const crateAlarm = (alarmObject)=>{
    const {id , alarmHour , alarmMinute }= alarmObject;
    
    
    let alarmDiv = document.createElement("div");
    alarmDiv.classList.add("alarm");
    alarmDiv.setAttribute("data-id");
    alarmDiv.innerHTML = `<span>${alarmHour}:${alarmMinute}</span>`

    let checkBox = document.createElement("input");

    checkBox.setAttribute("type" , "checkbox");
    checkBox.addEventListener("click" , (e)=>{
        if(e.target.checked){
            startAlarm(e);


        }else{
            stopAlarm(e);
        }
    });
    alarmDiv.appendChild(checkBox);
    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click" , (e)=>{
        deleteAlarm(e);
        alarmDiv.appendChild(deleteButton);
        activeAlarms.appendChild(alarmDiv);
    })
}

setAlarm.addEventListener("clikc" ,(e)=>{
    alarmIndex += 1;
    ///alarmObject 
    let alarmObj = [];
    alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;
    alarmObj.alarmHour =hourInput.value;
    alarmObj.alarmMinute = minuteInput.value;
    alarmObj.isActive = false;
    console.log(alarmObj);
    alarmsArray.push(alarmObj);
    createAlarm(alarmObj);
    hourInput.value = appendZero(initialHour);
    minuteInput.value = appendZero(initialMinute);
})
const startAlarm = (e)=>{
    let searchId = e.target.parentElement.getAttribute("date-id");
    let [exists , obj, index] = searchObject("id" , searchId);
    if(exists){
        alarmsArray[index].isActive = true;
    }

};

const stopAlarm = (e)=>{
    let searchId = e.target.parentElement.getAttribute("date-id");
    let [exists , obj, index] = searchObject("id" , searchId);
    if(exists){
        alarmsArray[index].isActive = false;
        alarmSound.pause()
    }
}

const deleteAlarm =(e)=>{
    let searchId = e.target.parentElement.getAttribute("date-id");
    let [exists , obj, index] = searchObject("id" , searchId);
    if(exists){
        e.target.parentElement.remove();
        alarmsArray.splice(index, 1)
    }
}
window.onload = () =>{
    setInterval(displayTimer);
    initialHour = 0;
    initialMinute= 0;
    alarmIndex = 0;
    alarmsArray = [];
    hourInput.value = appendZero(initialHour);
    minuteInput.value = appendZero(initialMinute);

}
