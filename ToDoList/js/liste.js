let tab1 = ["pomme","orange","banane","abricot","ananas"]

let tab2 = ["tomate","menthe","pomme de terre","aubergine","concombre"]

let tab3 = tab1.concat(tab2)
console.log(tab3);

tab1.forEach(item => {
    console.log(item);
})

let tab4 = tab1.filter(item => item.length === 6)
console.log(tab4);

let person = {
    nom: "Jean",
    age: 33,
    notes: [12,13,20,21],
    adresse: {
        ville:"Pau",
        codePostale: 64000,
        rue: "Jean Mermoz"
    }
}

console.log(person.nom);
console.log(person["nom"]);
console.log(person.adresse.ville);
console.log(person.adresse["ville"]);

person.notes.forEach(e => console.log(e));//parcourir un tableau

