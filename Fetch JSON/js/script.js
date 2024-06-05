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

async function getData (){
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(reponse);
    const data = await reponse.json();
    const filtreData = data.filter(post => post.userId === 3)
    console.log(filtreData);
}

getData()