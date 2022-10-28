window.addEventListener('load', () => {
    let url = 'http://localhost:3030/jsonstore/collections/students'
    let tableBody = document.querySelector('tbody')

    loadStudents()

    function loadStudents() {
        fetch(url)
            .then(res => {
                if (res.status == 200) {
                    return res.json()
                }
            })
            .then(data => {
                tableBody.innerHTML = ''
                Object.values(data).forEach(student => {
                    tableBody.appendChild(createTableRow(student))
                })
            })
    }

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        let formData = new FormData(e.currentTarget)
        let firstName = formData.get('firstName')
        let lastName = formData.get('lastName')
        let facultyNumber = formData.get('facultyNumber')
        let grade = formData.get('grade')

        if (firstName.length !== 0 && typeof (firstName) == 'string' &&
            lastName.length !== 0 && typeof (lastName) == 'string' &&
            facultyNumber.length !== 0 && Number(facultyNumber) &&
            grade.length !== 0 && Number(grade)) {

            let data = { firstName, lastName, facultyNumber, grade }

            fetch(url, {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(res => {
                    if (res.status == 200) {
                        loadStudents()
                    }
                })
        }
    })

    function createTableRow(data) {
        let tr = document.createElement('tr')

        for (const [key, value] of Object.entries(data)) {
            if (key !== '_id') {
                let th = document.createElement('th')
                th.textContent = value
                tr.appendChild(th)
            }
        }

        return tr
    }
})