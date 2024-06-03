const paragraphe = document.querySelector("#paragraphe")
const clear = document.querySelector("#éffacé")
const egal = document.querySelector("#egal")
const btn = document.querySelectorAll("button")
const array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "*", "-", "c"]

function add (value) {
    paragraphe.textContent += value
    console.log(paragraphe.textContent);
}

function sup () {
    paragraphe.textContent = ""
}

function calculate () {
    try {
        paragraphe.textContent = eval(paragraphe.textContent) 
        console.log(eval(paragraphe.textContent));
    } catch(e) {
        paragraphe.textContent = e
    }
}

document.addEventListener("keydown", function (event){
    const key = event.key;
    if ((key >= "0" && key <= "9") || (key === "+" || key === "-" || key === "+" || key === "/"))add(key)
    else if (key === "Enter") calculate();
    else if (key === "Backspace") deleteLast();
})