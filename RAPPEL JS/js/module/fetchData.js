export async function getData (){
    const reponse = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await reponse.json ()
    console.log(data);
}