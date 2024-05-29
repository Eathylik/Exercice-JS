const ul = document.querySelector("#liste")
const btn = document.querySelector("#btn")
const input = document.querySelector("#input")

btn.addEventListener("click", addToDoList)

const tableau = []


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
        tableau.push(text)
        console.log(tableau);
    }
    
    input.value = "";
    input.focus()
    supprimer()
}

function recupererTache(){
    let tache = JSON.parse(localStorage.getItem("tache")) || []
    return tache
}

function supprimer (){
    const cancel = document.querySelectorAll(".btnSupp")
    cancel.forEach (function(btn){
        btn.addEventListener("click", function(){
            btn.parentElement.remove();
            localStorage.removeItem("listItem")
            
        })

    })

    }

