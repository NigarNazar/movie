const form = document.getElementById('form-movie');
const titleElement = document.getElementById('title');
const urlElement = document.getElementById('url');
const cardFrom2 = document.querySelector('.card-from2');
const clearAll = document.querySelector("#clearAll");




eventListener();

function eventListener(){
    form.addEventListener('submit' , formAddTo);
    document.addEventListener("DOMContentLoaded",loadedUiStorage);
    cardFrom2.addEventListener('click', deletMovie)
    clearAll.addEventListener('click', clearAllDelet);
}


function formAddTo(e) {
   const title = titleElement.value
   const url = urlElement.value
   if(title === "" , url === ""){
UI.ShowAlertUiTo('danger' , "Record the data" )
   }else{
    const newMovie = new Movie(title,url)
    UI.UiToFromAdd(newMovie);
    Storage.StorageToFromAdd(newMovie);
   }
    
// console.log(newFilm)
titleElement.value = ""
urlElement.value = ""

    e.preventDefault()
}

function deletMovie(e){
if(e.target.id === "btn-btn"){
    UI.deletFromUiAdd(e.target);
    Storage.deleteFromStorageAdd(e.target.parentElement.previousElementSibling.textContent)
}

}

function loadedUiStorage(){
    let newMovie = Storage.StorageFromTo()
    UI.movieUiAddToFrom(newMovie)
}

function clearAllDelet(){
    if(confirm("Are You Sure")){
        Storage.StorageClearAllFrom()
        UI.clearAllUiFrom();
    }
   
}