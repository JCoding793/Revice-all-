let fetchDate = document.getElementById("date-input");
let calBtn = document.getElementById("calc-age-btn");
let setYear = document.getElementById("years");
let setMonths = document.getElementById("months");
let setDays = document.getElementById("days");



calBtn.addEventListener("click" , ()=>{

    if(fetchDate.value == ""){
        alert("Please Fill the Birth Date");

    }else{
        let getDate = new Date(fetchDate.value);
         let currentDate = new Date();
    ///user yearn month days 


        let getY = getDate.getFullYear() - currentDate.getFullYear();
        let getM = getDate.getMonth() - currentDate.getMonth();
        let getD = getDate.getDate() -  currentDate.getDate();

        //let do second thing 
        let youAge = (getY * 365) + (getM * 31) + getD;

        let setY = Math.floor(Math.abs(youAge / 365))

        // month
        let monthremi = Math.floor(Math.abs(youAge % 365));
        let setM = Math.floor(Math.abs(monthremi / 31));

        let setD = monthremi % 31;
         setYear.innerHTML = setY;
         setMonths.innerHTML = setM;
         setDays.innerHTML = setD;


    }


})
// Step 1: Find differences
// let years = birth_year - current_year;
// let months = birth_month - current_month;
// let days = birth_day - current_day;

// // Step 2: Substitute into the formula
// let age_in_days = (years * 365) + (months * 31) + days;

// // Step 3: Divide by years and truncate to get age in years
// let age_years = Math.trunc(age_in_days / 365);

// // Step 4: Calculate months
// let months_remainder = age_in_days % 365;
// let age_months = Math.trunc(months_remainder / 31);

// // Step 5: Calculate days
// let days_remainder = months_remainder % 31;
// let age_days = days_remainder;

// console.log("Age:", age_years, "years,", age_months, "months, and", age_days, "days");