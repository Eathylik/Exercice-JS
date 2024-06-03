const input = document.querySelector('input')
const btn = document.querySelector('button')
const message = document.querySelector('#message')

let choixOrdi = Math.floor((Math.random() * 100) + 1)

console.log(choixOrdi);

input.focus();
let i = 0;

btn.addEventListener("click", checkInput);

function checkInput(){
    guess = parseInt(input.value)
    input.value = "";
    input.focus();
    console.log(guess);
    if (guess > choixOrdi) {
      message.textContent = "Trop haut";
      i++;
    } else if (guess < choixOrdi) {
      message.textContent = "Trop Bas";
      i++;
    } else {
      message.textContent = `Bravo tu as trouvé au bout de ${i} tentatives, le nombre mystére était ${choixOrdi}`;
      input.disabled = true;
    } 
}

