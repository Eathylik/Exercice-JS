const body = document.querySelector("body");//il n'y  a qu'une seule balise body


function createH1 (titre) {
    const h1 = document.createElement("h1");
    h1.textContent = titre;
    return h1;
}

body.appendChild(createH1("titre 1"));
// body.appendChild(createH1("titre 2"));
// body.appendChild(createH1("titre 3"));

// function createH1React(titre) {
//     return (
//         <h1>{TITRE}</h1>
//     )
// }
//composant REACT

function mySection(titre, texte) {
    const h1 = document.createElement("h1");
    h1.textContent = titre;
    const p = document.createElement("p");
    p.textContent = texte;
    const section = document.createElement("section");
    section.appendChild(h1);
    section.appendChild(p);
    return section;
}
//PREMIERE METHODE
// const uneSection = mySection("Sunshine", "Je suis un gamer")
// body.appendChild(uneSection)

//DEUXIEME METHODE
body.appendChild(mySection("Sunshine", "Je suis un gamer"))