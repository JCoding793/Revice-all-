let uploadBtn = document.getElementById("upload-button");
let chosenImage = document.getElementById("chosen-image");
let fileName = document.getElementById("file-name");
let container = document.querySelector("container");
let erroR = document.getElementById("error");
let imageDisplay= document.getElementById("image-displaly");


const fileHandler = (file, name, type)=>{
    if(type.split("/")[0] !== "image"){
        erroR.innerText = "Please upload an image file";
        return false;
    }
    error.innerText = "";
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () =>{

        let imageContainer = document.createElement("figure");
        let img = document.createElement("img");
        img.src = reader.result;
        imageContainer.appendChild(img);
        imageContainer.innerHTML += `<figcaption>${name}</figcaption>`;
        imageDisplay.appendChild(imageContainer); 
        
    }
}

uploadBtn.addEventListener("change" , ()=>{
   imageDisplay.innerHTML  =  "";
   Array.from(uploadBtn.files).forEach((file)=>{
    fileHandler(file , file.name , file.type)
   })
})

container.addEventListener("dragenter", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active")
}, false);

container.addEventListener("dragleave", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active")
}, false);

container.addEventListener("dragover", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.add("active")
}, false);

container.addEventListener("drop", (e)=>{
    e.preventDefault();
    e.stopPropagation();
    container.classList.remove("active");
    let draggedData = e.dataTransfer;
   let files = draggedData.files;
   imageDisplay.innerHTML = "";

   Array.from(files).forEach(file =>{
    fileHandler(file, file.name, file.type);
   })
}, false);