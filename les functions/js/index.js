// Function de soustraction
function soustraction (a, b) {
    console.log(a - b);
}
soustraction(7, 2);

function soustraction2 (c, d) {
        let resultat = c - d
        return resultat
    }

let res = soustraction2(9,6)
console.log(res);

let susbstract = function (x,y) {
    return x-y
}

let res1 = susbstract(9,8)
console.log(res1);

const multiplication = (s,f) => {
    let result = s * f
    console.log(result);
}

const sansArg = () => {
    console.log("salut");
}

multiplication(20, 5)

sansArg()

let button = document.getElementById('btn')
button.addEventListener('click', () => {
    console.log('boutton désactivé');
    btn.disabled = true
})