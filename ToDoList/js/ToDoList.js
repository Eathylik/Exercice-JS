let task = document.getElementById("task");
let add = document.querySelector("#add");
let list = document.getElementById("list");

let array = [];



add.addEventListener("click",displayText);


function displayText (){
    let li = document.createElement("li");
    li.textContent = task.value;
    list.appendChild(li);
    array.push(task.value);
    console.log(array);
    localStorage.setItem("data", JSON.stringify(array));
    task.value ="";
    task.focus()
}


