import user from "./module/getDatas.js";

import createTbody from "./module/createTbody.js";

import handleSearch from "./module/searchItems.js";

const base = await user();

createTbody(base);

handleSearch(base);

const order = base.sort ((a,b) => {
    let x = a.prenom.toLowerCase();
    let y = b.prenom.toLowerCase();
    if (x < y) return -1;
    if (x > y) return 0;
    return 0;
})
console.log(order);

createTbody(order);

// let tab = [
//     {
//         id: 1,
//         nom: "Aze",
//         prenom: "Oui",
//     },
//     {
//         id: 2,
//         nom: "Ert",
//         prenom: "Zzz",
//     },
//     {
//         id: 3,
//         nom: "Aaa",
//         prenom: "Uuu",
//     },
// ];

// tab.sort ((a,b) => {
//     let x = a.nom.toLowerCase();
//     let y = b.nom.toLowerCase();
//     if (x < y) {
//         return -1
//     }
//     return 0;
// })

// console.log(tab);

const flechNom = document.querySelectorAll('.fleche');
flechNom.forEach((fleche) => {
    console.log(fleche.dataset.direction);
    fleche.addEventListener("click", () => {
        console.log(click);
    })
})