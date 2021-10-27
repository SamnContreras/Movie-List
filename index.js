let messaage = document.querySelector("#message")

function addMovie (event){
    event.preventDefault();
    let inputField = document.querySelector("input")

    let movie = document.createElement("li")

    let movieTitle = document.createElement("span");
    movieTitle.addEventListener("click", crossOffMovie)

    let unorderedList = document.querySelector("ul")
    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement("button")
    movie.appendChild(deleteBtn)
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    
    unorderedList.appendChild(movie)
    inputField.value = ""
}

let form = document.querySelector("form")
form.addEventListener("submit", addMovie)

function deleteMovie (event){
    event.target.parentNode.remove()
    message.textContent = "Your movie has been deleted"
}

function crossOffMovie (event){
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked") === true){
        message.textContent = "Your movie has been watched"
    } else {
        message.textContent = "Your movie has been added back"
    }
}