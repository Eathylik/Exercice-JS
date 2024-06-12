const btnSubmit = document.getElementById('submit')
const btnReset = document.getElementById('reset')
const bienvenue = document.getElementById('bienvenue')
const form = document.getElementById('form')
const input = document.getElementById('name')


export function submit(e) {
    e.preventDefault()
    bienvenue.textContent = input.value
}
form.addEventListener('submit', submit)

export function empty () {
    bienvenue.textContent =''
}
form.addEventListener('reset', empty)