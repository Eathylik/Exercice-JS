function createTbody (base){
    const tbody = document.querySelector('tbody')
    for (let items of base){
        console.log(items);
        tbody.appendChild (createRow(items.id ,items.prenom, items.nom, items.email, items.role))
    }
    function createRow (text1,text2,text3,text4,text5){
        const tr = document.createElement('tr')
        tr.appendChild(createTd(text1))
        tr.appendChild(createTd(text3))
        tr.appendChild(createTd(text4))
        tr.appendChild(createTd(text5))
        tr.appendChild(createTd(text2))
        return tr;
    }
    function createTd(text){
        const td = document.createElement('td')
        td.textContent = text;
        return td
    }
}

export default createTbody;