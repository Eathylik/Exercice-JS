//Permet de transformer une NodeList en tableau 
const btn = [...document.querySelectorAll("button")];
console.log(btn);
// const key = btn.map(btn => btn.dataset.key);
// console.log(key);
const paragraphe = document.querySelector("#paragraphe")
const egal = document.querySelector("#egal")
const effacer = document.querySelector("#effacer")

function add (value) {
    paragraphe.textContent += value;
    console.log(paragraphe.textContent);
}

function sup () {
    paragraphe.textContent = "";
}

//Eval est une function de JS qui permet si cale est possible de faire un calcul mathématique
//On Utilise le Try/Catch pour permettre a Eval de rendre une error si le calcul n'est pas mathématiquement réalisable
function calcul () {
    try {
        paragraphe.textContent = eval(paragraphe.textContent)
        console.log(eval(paragraphe.textContent));
        return (eval(paragraphe.textContent))
    } catch (error) {
        paragraphe.textContent = "ERROR"
    }
}

document.addEventListener('keydown', function(event) {
    // Vérifier si la touche pressée est un chiffre (0-9)
    console.log(event.key);
    if (event.key >= '0' && event.key <= '9') {
        add(event.key);
    } else if (event.key === 'Backspace'){
        // if (paragraphe.textContent.length > 1 ){
        //     paragraphe.textContent = paragraphe.textContent.slice(0, -1)
        // } else {
        //     paragraphe.textContent = '0'
        // }
        paragraphe.textContent = paragraphe.textContent.slice(0, -1) || "0"
    } else if (event.key === 'Enter'){
        paragraphe.textContent = calcul()
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/'){
        add(event.key)
    }
});