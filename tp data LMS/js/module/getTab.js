//////////////////////////////////////////////////////
            // Try Yourself //


            async function getData() {
                try {
                    const response = await fetch ('./js/data.json')
                    if (response.ok) {
                        const data = await response.json()
                        for (let items of data){
                            console.log(items);
                        }
                        data.map(post => {
                            let tr = document.createElement('tr')
                            let id = document.createElement('td')
                            let nom = document.createElement('td')
                            let prenom = document.createElement('td')
                            let email = document.createElement('td')
                            let role = document.createElement('td')
                            id.textContent = post.id
                            nom.textContent = post.nom
                            prenom.textContent = post.prenom
                            email.textContent = post.email
                            role.textContent = post.role
                            tr.appendChild(id)
                            tr.appendChild(nom)
                            tr.appendChild(prenom)
                            tr.appendChild(email)
                            tr.appendChild(role)
                            document.querySelector('tbody').appendChild(tr)
                            return post
                        })
            
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            
export default getData;