function appendToDisplay(value) {
    document.getElementById('display').value += value
}

function clearDisplay() {
    document.getElementById('display').value = ''
}

function calcular() {
    const display = document.getElementById('display')
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Errado'
    }
}

function apagar () {
    const display = document.getElementById('display')
    display.value = display.value.slice(0, -1)
}