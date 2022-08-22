function addItem() {
    let input = document.getElementById('newItemText');

    let liElem = document.createElement('li');
    liElem.textContent = input.value;

    let aTag = document.createElement('a');
    aTag.href = '#';
    aTag.textContent = '[Delete]';
    aTag.addEventListener('click', deleteRow);

    liElem.appendChild(aTag);

    input.value = '';
    
    document.getElementById('items').appendChild(liElem);

    function deleteRow(event) {
        let currRow = event.target.parentElement;
        currRow.remove();
    }
}