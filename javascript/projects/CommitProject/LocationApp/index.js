let myLocation = document.getElementById("location-details");
let get_location = document.getElementById("get-location");
console.log(myLocation, get_location)
get_location.addEventListener("click" , ()=>{
const checkError= (error)=>{
    switch (error.code) {
        case error.PERMISSION_DENIED:
            myLocation.innerText = "Please allow access to location";
            break;
        case error.POSITION_UNAVAILABLE:
            myLocation.innerText = "Locatoin information unavailable";
            break;
        case error.TIMEOUT:
            myLocation.innerText = "The request to get user location time out";
    }     
    }

const showLocation = async(position)=>{
        let response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
          );
          let data = await response.json();
          console.log(data.address.city);
          console.log(data.address.country);
          myLocation.innerText = `${data.address.city} , ${
            data.address.country}`

    } 
    if(navigator.geolocation){ 
      navigator.geolocation.getCurrentPosition(showLocation, checkError);
    }else{
        myLocation.innerHTML = "The Browser does not support geolocation "
    }
})