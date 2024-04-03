const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let btnSearch = document.querySelector("#search-btn");
let resultShow = document.querySelector("#result");
const sound = document.getElementById("sound");
btnSearch.addEventListener("click", () => {
  let inputSearch = document.querySelector("#inp-word").value;

  fetch(`${url}${inputSearch}`)
    .then((response) => response.json())
    .then((data) => {
    resultShow.innerHTML = `
    <div class="word">
                    <h3>${data[0].word}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                ${data[0].meanings[0].definitions[0].example || ""} 
                </p>`;
    sound.setAttribute("src" , `${data[0].phonetics[0].audio}`);
  
}
 ).catch( ()=>{
   resultShow.innerHTML = "<div class='word'><h3>Couldn't Find the Word </h3></div>"
 })   
})
function playSound(){
    sound.play();
}
// https://api.dictionaryapi.dev/media/pronunciations/en/help-us.mp3
// https://https//api.dictionaryapi.dev/media/pronunciations/en/help-us.mp3

