function createElement (item){
    let article = document.createElement ('article')
    let h3 = document.createElement ('h3')
    let p = document.createElement ('p')
    let link = document.createElement('a')
    h3.textContent = item.title
    p.textContent = item.body
    link.textContent = "plus..."
    link.setAttribute('href', `https://jsonplaceholder.typicode.com/posts/${item.id}`)
    article.appendChild(h3)
    article.appendChild(p)
    article.appendChild(link)
    // document.getElementById('container').appendChild(article)
    return article
}

export async function getData (){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.map (item => {
        
        document.getElementById('container').appendChild(createElement(item))
    })
}

getData()