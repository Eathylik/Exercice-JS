////// ENREGISTRER //////

export function storage (items){
    localStorage.setItem('users', JSON.stringify(items));
}

////// RECUPERER //////

export function getStorage () {
    let data = JSON.parse(localStorage.getItem('users'));
    return data;
}