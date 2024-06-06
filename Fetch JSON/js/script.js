///////////////////////////////////////////////
            //Premiere Méthode

// fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())

        // .then(data => {for (let item of data){
        //     console.log(item.title);
        // }})

        // .then (data => data.map(post => console.log(post.title)))

        // .then (data => data.forEach(post => console.log(post)))
        
        // .catch(e => console.log(e))

////////////////////////////////////////////////
            //Deuxieme Méthode

// async function getData (){
//     const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log(reponse);
//         const data = await reponse.json();
//         console.log(data);
// }

// getData()

/////////////////////////////////////////////////
            //Troisieme Méthode

// async function getResponse () {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         if (res.ok) {
//             const donner = await res.json();
//             console.log(donner);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// getResponse()

///////////////////////////////////////////////
            //Quatrieme Méthode

// async function getData (){
//     const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log(reponse);
//     const data = await reponse.json();
//     const filtreData = data.filter(post => post.userId === 3)
//     console.log(filtreData);
// }

// getData()

///////////////////////////////////////////////
            //Fetch un Data.json

async function getData (){
    const reponse = await fetch('./js/data.json')
    const data = await reponse.json ()
    console.log(data);
    for (let items of data){
        console.log(`${items}: ${data[items]}`);
        console.log(items);
        createRow(items.id ,items.first_name, items.last_name, items.email)
    }
}

getData()

const tbody = document.querySelector('tbody')

function createRow (text1,text2,text3,text4){
    const tr = document.createElement('tr')
    tr.appendChild(createTD(text1))
    tr.appendChild(createTD(text2))
    tr.appendChild(createTD(text3))
    tr.appendChild(createTD(text4))
    tbody.appendChild(tr)
}

function createTD(text){
    const td = document.createElement('td')
    td.textContent = text;
    return td
}