let utilisateur = {
    email: 'exemple@gmail.com' ,
    nom: 'pierre',
    age: '33',
    tel: '06 37 17 57 12',
    adresse: {
        rue: 'jean mermoz',
        ville: 'Pau',
        codePostal: 64000,
    },
    competence: [
        'HTML',
        'CSS',
        'JS', 
        'PYTHON' ,
        'REACT',
        'NODE JS',
        'ANGULAR',
        'WORDPRESS',
        'SYMPFONY',
        'EXPRESS',
        'FIGMA'
    ]
}

//Pour acceder a certain éléments du tableau il nous suffi
// de Log et de cibler ce qu'on souhaite utilisateur. l'objet en question
//si un objet ce trouve dans un autre objet alors on le cible avec 2 .
// console.log(utilisateur.age);
//Permis de rejouter un élément au ojets
utilisateur.permis = 'B'
//permet de recuperer sous forme de tableau les key si on veut les valeur on remplace par Value
let cles = Object.keys (utilisateur)
// console.log(cles);

for (let cle in utilisateur){
    // console.log(cle);
}

for(let element of utilisateur.competence){
    // console.log(element);
}

// let liste = [1,2,3,4]
// liste.forEach(ele => {
//     console.log("element est ", ele );
// })

let competences = utilisateur.competence
competences.forEach (e => {
    // console.log('competence est ', e);
})

for (let i = 0; i<= competences.length; i++){
    console.log(competences[i]);
}

utilisateur.competence.map(competences => console.log(competences))

let resultat = competences.filter(item => item === 'HTML')
console.log(resultat);

let result = competences.find(el => el === 'JS')
console.log(result);

let index = competences.indexOf

let arr1 = [
    'HTML',
    'CSS',
    'JS', 
    'PYTHON' ,
    'REACT',
    'NODE JS',
]

let arr2 = [
    'ANGULAR',
    'WORDPRESS',
    'SYMPFONY',
    'EXPRESS',
    'FIGMA'
]
//Permet de Concaténé deux objet ensemble 
// let arr3 = arr1.concat(arr2)

console.log(arr1);
console.log(arr2);
const arr3 = []
const arr4 = []

//push permet de mettre des élément de plusieurs variable dans une autre variable
for (let item of arr2){
    arr3.push(item)
}

for (let item of arr1){
    arr3.push(item)
}

console.log(arr3);

arr1.map (item => arr4.push(item))
arr2.map (item => arr4.push(item))
console.log(arr4);