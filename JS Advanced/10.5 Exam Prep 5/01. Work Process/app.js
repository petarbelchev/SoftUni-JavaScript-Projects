function solve() {
    let firstNameField = document.getElementById('fname');
    let lastNameField = document.getElementById('lname');
    let emailField = document.getElementById('email');
    let birthDateField = document.getElementById('birth');
    let positionField = document.getElementById('position');
    let salaryField = document.getElementById('salary');
    let tbody = document.getElementById('tbody');
    let sumField = document.getElementById('sum');
    let hireBtn = document.getElementById('add-worker');

    hireBtn.addEventListener('click', (e) => {
        e.preventDefault();


        if (firstNameField.value == '' ||
            lastNameField.value == '' ||
            emailField.value == '' ||
            birthDateField.value == '' ||
            positionField.value == '' ||
            salaryField.value == '') {

            return;
        }

        addWorker(
            firstNameField.value,
            lastNameField.value,
            emailField.value,
            birthDateField.value,
            positionField.value,
            salaryField.value
        );
    })

    function addWorker(fName, lName, email, birthDate, position, salary) {
        let inHtml = `
            <td>${fName}</td>
            <td>${lName}</td>
            <td>${email}</td>
            <td>${birthDate}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td>
                <button class="fired">Fired</button>
                <button class="edit">Edit</button>
            </td>
        `;

        let trElem = document.createElement('tr');
        trElem.innerHTML = inHtml;

        trElem.querySelector('.fired').addEventListener('click', () => {
            trElem.remove();
            lastSum = Number(sumField.textContent);
            sumField.textContent = (lastSum - Number(salary)).toFixed(2);
        });

        trElem.querySelector('.edit').addEventListener('click', () => {
            trElem.remove();
            lastSum = Number(sumField.textContent);
            sumField.textContent = (lastSum - Number(salary)).toFixed(2);
            editWorker(fName, lName, email, birthDate, position, salary);
        });

        tbody.appendChild(trElem);

        let lastSum = Number(sumField.textContent);
        sumField.textContent = (lastSum + Number(salary)).toFixed(2);
        
        clearFields();
    }

    function clearFields() {
        firstNameField.value = '';
        lastNameField.value = '';
        emailField.value = '';
        birthDateField.value = '';
        positionField.value = '';
        salaryField.value = '';
    }

    function editWorker(fName, lName, email, birthDate, position, salary) {
        firstNameField.value = fName;
        lastNameField.value = lName;
        emailField.value = email;
        birthDateField.value = birthDate;
        positionField.value = position;
        salaryField.value = salary;
    }
}

solve()