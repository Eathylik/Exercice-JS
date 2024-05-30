let task = document.getElementById("task")
let add = document.querySelector("#add")
let list = document.getElementById("list")




add.addEventListener("click",displayText) 


function displayText (){
    console.log(task.value);
}


