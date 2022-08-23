function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');
    let newOption = document.createElement('option');
    newOption.textContent = textInput.value;
    newOption.value = valueInput.value;
    textInput.value = '';
    valueInput.value = '';
    document.getElementById('menu').appendChild(newOption);
}