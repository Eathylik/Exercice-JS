let task = document.getElementById("task");
let add = document.querySelector("#add");
let list = document.getElementById("list");



add.addEventListener("click",ajouterTache);

let array = JSON.parse(localStorage.getItem("data")) || [];

// /!\ Attention les ligne sont lu de HAUT en BAS /!\

function displayText (){
    list.innerHTML = "";
    for (let item of array) {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
        let btn = document.createElement("button")
        btn.textContent = "supprimer"
        li.appendChild(btn)
        list.appendChild(li)
        btn.addEventListener("click", function(){
            let indice = array.indexOf(item)
            array.splice(indice,1)
            localStorage.setItem("data", JSON.stringify(array))
            displayText()
        })
    }
    // array.push(task.value);
    // localStorage.setItem("data", JSON.stringify(array));
    // task.value = "";
    // task.focus();
}
displayText()

function ajouterTache(){
    
    if (array.find(el => el === task.value) || !task.value ){
        // alert("la Valeur de " + task.value + " existe déjà");
        alert(`la valeur de ${task.value} existe déjà`)
        task.focus()
        task.value = "";
    } else {
        console.log(task.value , "n'esxiste pas");
        array.push(task.value)
        localStorage.setItem("data", JSON.stringify(array));
        task.value = "";
        task.focus();
        displayText()
    }
}

