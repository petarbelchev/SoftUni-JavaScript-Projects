function validate() {
    document.getElementById('email').addEventListener('change', checkInput);

    function checkInput(e) {
        const regex = /^[a-z0-9\_\-\.]+@[a-z0-9\.]+\.[a-z]+$/;

        if (regex.test(e.target.value)) {
            e.target.classList.remove('error');
        } else {
            e.target.classList.add('error');
        }
    }
}