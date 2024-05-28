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
        const supp = document.createElement("button")
        supp.textContent = "supp"
        listItem.appendChild(supp)
        supp.classList.add("btnSupp")
        supp.style.marginLeft = ("3%")
        listItem.style.marginTop = ("3%")
        supp.style.color =("white")
        supp.style.backgroundColor = ("red")
        supp.style.border = ("none")
        supp.style.borderRadius = ("5%")
    }
    input.value = "";
    input.focus()
    save()
    supprimer()
}

function supprimer (){
    const cancel = document.querySelectorAll(".btnSupp")
    cancel.forEach (function(btn){
        btn.addEventListener("click", function(){
            btn.parentElement.remove();
        })
    })

    }

function save (valeur){
    localStorage.setItem("data", valeur)
}
