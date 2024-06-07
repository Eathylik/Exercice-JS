async function user (){
    const reponse = await fetch('./js/data.json')
    const data = await reponse.json ()
    console.log(data);
    return data;
}



export default user;