function deleteByEmail() {
    let input = document.getElementsByTagName('input')[0];
    let rows = document.querySelectorAll('tbody tr');
    let isFound = false;
    let result = document.getElementById('result');

    for (const row of rows) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            result.textContent = 'Deleted.';
            isFound = true;
        }
    }

    if (!isFound) {
        result.textContent = 'Not found.';
    }
}