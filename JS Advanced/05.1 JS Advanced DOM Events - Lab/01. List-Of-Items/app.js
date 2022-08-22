function addItem() {
    let liElem = document.createElement('li');
    let input = document.getElementById('newItemText');
    liElem.textContent = input.value;
    input.value = '';
    document.getElementById('items').appendChild(liElem);
}