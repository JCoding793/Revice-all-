document.querySelector('#push').onclick = function (){

    if(document.querySelector("#newtask input").value.length == 0){
       console.log("Please Add Task")
    }else{

       document.querySelector("#tasks").innerHTML += 
       `
        <div class="task">
        <span id="taskname">${document.querySelector("#newtask input").value}</span>
        <button class="delete">
        <i class="far fa-trash-alt"></i>
        </button>
      </div>      
       `;
    
       var currentTasks = document.querySelectorAll(".delete");
       console.log(currentTasks)
       for(let i = 0 ; i<currentTasks.length ; i++){
        currentTasks[i].onclick = function (){
            this.parentNode.remove();
        }       
    }
    var currentTaskName = document.querySelectorAll(".task");
    for(let i = 0 ; i<currentTaskName.length ; i++){
        currentTaskName[i].onclick = function (){
            this.classList.toggle('completed');
        }   
    }
    }
}