function validate() {
    const companyInfo = document.getElementById('companyInfo');
    const checkbox = document.getElementById('company');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }
    });

    const submitBtn = document.getElementById('submit');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyNumber = document.getElementById('companyNumber');
    const valid = document.getElementById('valid');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let isValid = true;

        if (/^[A-Za-z0-9]{3,20}$/.test(username.value) == false) {
            username.style = 'border-color: red';
            isValid = false;
        } else {
            username.style = '';
        }

        if (/^[^@.]+@[^@]*\.[^@]*$/.test(email.value) == false) {
            email.style = 'border-color: red';
            isValid = false;
        } else {
            email.style = '';
        }

        if (/^\w{5,15}$/.test(password.value) == false || password.value != confirmPassword.value) {
            password.style = 'border-color: red';
            confirmPassword.style = 'border-color: red';
            isValid = false;
        } else {
            password.style = '';
            confirmPassword.style = '';
        }

        if (checkbox.checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style = 'border-color: red';
                isValid = false;
            } else {
                companyNumber.style = '';
            }
        }

        if (isValid) {
            valid.style.display = 'block';
        } else {
            valid.style.display = 'none';
        }
    });
}