function hello () {
    console.log('bonjours tous le monde');
}

hello()

//Function anonyme

const bonjours = function () {
    console.log('Hello world');
}

bonjours()

// Function fléchée

const salam = () => {
    console.log('salam');
}

salam()

// Pratique

function add (x,y){
    let result = x + y
    return result
}

console.log(add(3,7));
console.log(add(47,18));

function additionner (){
    let x = 3
    let y = 6
    let result = x+y
    return result
}
console.log(additionner());

function multiply(x, y ){
    return y * x
}

// Evenements

const btn = document.getElementById('btn')
console.log(btn);

//Evenement avec appel d'une fonction en tant qu'argument

// btn.addEventListener('click', hello)

//Evenement avec une fonction anonyme

// btn.addEventListener('click', function(){
//     console.log("j'ai cliquer sur le boutton");
// })

//Event avec une fonction fléchée

btn.addEventListener('click', () => {
    console.log("j'ai bourriner le boutton");
})