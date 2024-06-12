let count = 0
const btnPLus = document.getElementById('plus')
const btnMoins = document.getElementById('moins')
const h2 = document.getElementById('h2')

export function plus () {
    count++
    h2.textContent = count
    console.log(count);
}
plus()

btnPLus.addEventListener('click', plus)

export function moins () {
    count--
    h2.textContent = count
    console.log(count);
}
moins()

btnMoins.addEventListener('click', moins)
