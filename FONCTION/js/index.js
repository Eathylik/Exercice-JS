const nombre = 10;

//une fonction simple

function foisDeux () {
    console.log(nombre * 2);
}

foisDeux();

//une fonction avec parametre

function mutiplier(a , n) { // a est un parametre de la fonction
    console.log(n * a);
}

mutiplier(3 , nombre); // 3 est un argument
mutiplier(10, 10)//les function sont réutilisable plusieurs fois

//les parametres et les arguments remplace les variables
//a = 3
//n = 10