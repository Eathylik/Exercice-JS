import { storage } from "./storage.js";

async function user (){
    const reponse = await fetch('./js/data.json')
    const data = await reponse.json ()
    storage(data)
    console.log(data);
    return data;
}

export default user;