const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
})

const alert1 = document.querySelector('#alert1');

alert1.addEventListener('click', () => {
    alert('Служит для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «Ок»')
})

const prompt1 = document.querySelector('#prompt1');

prompt1.addEventListener('click', () => {
    alert('Служит для вывода диалогового окна, в котором пользователь может ввести текстовые данные.')
})