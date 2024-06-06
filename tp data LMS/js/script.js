async function getData (){
    const reponse = await fetch('./js/data.json')
    console.log(reponse);
    const data = await reponse.json();
    console.log(data);
}

getData()

async function user (){
    const reponse = await fetch('./js/data.json')
    const data = await reponse.json ()
    console.log(data);
    for (let items of data){
        console.log(`${items}: ${data[items]}`);
        console.log(items);
        createRow(items.id ,items.prenom, items.nom, items.email, items.role)
    }
}

user()

const tbody = document.querySelector('tbody')

function createRow (text1,text2,text3,text4,text5){
    const tr = document.createElement('tr')
    tr.appendChild(createTD(text1))
    tr.appendChild(createTD(text2))
    tr.appendChild(createTD(text3))
    tr.appendChild(createTD(text4))
    tr.appendChild(createTD(text5))
    tbody.appendChild(tr)
}

function createTD(text){
    const td = document.createElement('td')
    td.textContent = text;
    return td
}