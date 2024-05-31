const paragraphe = document.querySelector("#paragraphe")
const clear = document.querySelector("#éffacé")
const egal = document.querySelector("#egal")
const btn = document.querySelectorAll("button")

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

document.addEventListener("keydown", (event) => {
    if (document.isComposing || event === 48) {
      return;
    }
  });