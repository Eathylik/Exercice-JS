const ul = document.querySelector("#liste")
const btn = document.querySelector("#btn")
const input = document.querySelector("#input")

btn.addEventListener("click", addToDoList)

function addToDoList () {
    const listItem = document.createElement ("li");
    const text = input.value;
    if(text == ""){
        alert("Please Take Care you can't do that !")
    } else {
        listItem.textContent = text;
        ul.appendChild(listItem)
    }
    input.value = "";
    input.focus()
    save(listItem)
}

function save (valeur){
    localStorage.setItem("data", valeur)
}
