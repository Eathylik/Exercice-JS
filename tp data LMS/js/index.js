import getData from "./module/getTab.js";

const searchInput = document.querySelector('#searchInput');
console.log(searchInput);

getData()

searchInput.addEventListener("keyup", (event) => {
    console.log(event.target.value);
} )