const duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('#button')
const input = document.querySelector('#input')

button.onclick = function() {
    console.log(input.value)
    duplicateField.textContent = input.value;
    input.value = ""
    //input.preventDefault();//
}
