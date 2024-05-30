let array = [1,2,4,6,77,33,9,90]

//longueur de mon tableau
console.log(array.length);

//Ajouter un élément dans mon tableau
array.push(10)
console.log(array);

//trier un tableau
// array.sort()
// console.log(array);

//Chercher un élément dans le tableau

// console.log(array.find(element => element === 4))
if(array.find(element => element === 4)) {
    console.log("élément trouver");
} else {
    console.log("élément non trouvé");
}

//Récupérer l'index d'un élément dans un tableau
console.log(array.indexOf(4));
let index = array.indexOf(4);

//supprimer un élément du tableau
array.splice(index);
console.log(array);