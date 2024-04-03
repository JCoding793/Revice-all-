
 let submit= document.getElementById("submit");
 let ouput= document.getElementById("output");

 let startDat= document.getElementById("date-1");
 let endDat= document.getElementById("date-2");


 
 submit.addEventListener("click" , ()=>{
  
  let date1= new Date(`${startDat.value}`);
  let date2= new Date(`${endDat.value}`);
                  
 if(date1.getTime() && date2.getTime()){

   let timeDifference = date1.getTime() - date2.getTime();
   let dayDiffference = Math.abs(timeDifference / (1000 * 3600 * 24));
   ouput.innerHTML = `Difference between the two dates is <span>${dayDiffference}</span>days`
   
   console.log(dayDiffference)
 }else{
   ouput.innerHTML = "Please select a valid date";
 }

 
 })
