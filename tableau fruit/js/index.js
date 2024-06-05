const fruits = ["apple", "banana", "cherry"]
console.log(fruits);

fruits.push("orange")
console.log(fruits);

//supprime le Premier élément du tableau
fruits.shift();
console.log(fruits);

console.log(fruits.length);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

//Affiche les objets du tableau avec for OF
for (let fruit of fruits){
    console.log(fruit);
}

//////////////////////////////

const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    age: '30',
}
console.log(person);
person.city = 'New-York'
person.age = '31'
console.log(person);

//supprime un element ciblé de l'objet
delete person.lastName
console.log(person);

//affiche les élément des objet avec for IN
for (let items in person){
    console.log(`${items}: ${person[items]}`);
}

////////////////////////////////////

const people = [
    {
        name: 'Julie',
        age: '35',
    },
    {
        name: 'Constance',
        age: '21',
    },
    {
        name: 'Laure',
        age: '27'
    }
]

console.log(people);

people.push({name: "David", age: "40"})
console.log(people);

console.log(people[1].age);

for(let i = 0; i< people.length; i++){
    console.log(people[i].name);
}