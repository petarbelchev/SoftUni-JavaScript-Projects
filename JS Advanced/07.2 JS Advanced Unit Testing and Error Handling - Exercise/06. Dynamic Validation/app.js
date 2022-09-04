function validate() {
    const inputField = document.getElementById('email');
    inputField.addEventListener('change', () => {
        if (/^[a-z]+@[a-z]+.[a-z]+$/.test(inputField.value) == false) {
            inputField.className = 'error';
        } else {
            inputField.className = '';
        }
    });
}