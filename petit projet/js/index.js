const ul = document.querySelector("#liste")
const btn = document.querySelector("#btn")
const input = document.querySelector("#input")

save();

btn.addEventListener("click", addToDoList)

function addToDoList () {
    const listItem = document.createElement ("li");
    const text = input.value;
    if(text == ""){
        alert("Please Take Care you can't do that !")
    } else {
        listItem.textContent = text;
        ul.appendChild(listItem)
        save()
    }
    input.value = "";
    input.focus()
}

function save (){
    localStorage.setItem("data", ul.textContent)
}
