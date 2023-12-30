const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.querySelector('input')
const resultInput = document.querySelector('#result')

const allowedKeys = ["c","(",")","/","7","8","9","*","4","5","6","-","2","3","+","0",".","%"]

document.querySelectorAll('.charKey').forEach(function (charKeybtn) {
    charKeybtn.addEventListener('click', ()=> {
        const value = charKeybtn.dataset.value
        input.value += value
    })
})

document.querySelector('#clear').addEventListener('click', () => {
    input.value = ''
    input.focus()
    resultInput.value = ''

})

input.addEventListener('keydown',function(event) {
    // somente teclas dentro do array vai ser selecionada
    event.preventDefault()

    if(allowedKeys.includes(event.key)) {
        input.value += event.key
        return
    }
    if (event.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (event.key === "Enter") {
        calculate()
    }
})

document.querySelector('#equal').addEventListener('click',calculate)

function calculate() {
    resultInput.value = 'ERROR!'
    const result = eval(input.value)
    resultInput.value = result


}

document.getElementById('copyToClipBoard').addEventListener('click', (evento) => {
    const button = evento.currentTarget
    if(button.innerText === 'Copy') {
        button.innerText = 'Copied!'
        button.style.color = '#4dff91'
        navigator.clipboard.writeText(resultInput.value) // para copiar algo na area de transferencia


    } else {
        button.innerText = 'Copy'
        button.style.color = '#fff'
    }
})

document.querySelector('#themeSwitcher').addEventListener('click', () => {
    if (main.dataset.theme === "dark") {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    }else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'dark'
    }
})