const aHref = document.querySelector('#aHref');

aHref.addEventListener('click', function(event) {
    const userText = prompt('Введите новый текст');
    aHref.textContent = userText;
    event.preventDefault();
})
