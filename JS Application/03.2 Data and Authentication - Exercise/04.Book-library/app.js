let url = 'http://localhost:3030/jsonstore/collections/books'

document.getElementById('loadBooks').addEventListener('click', loadAllBooks)

const submitBookBtn = document.querySelector('form button')
submitBookBtn.addEventListener('click', (e) => {
    e.preventDefault()
    postNewBook()
})

function loadAllBooks() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let tableBody = document.querySelector('tbody')
            tableBody.innerHTML = ''

            Object.entries(data).forEach(kvp => {
                let id = kvp[0]
                let title = kvp[1].title
                let author = kvp[1].author
                tableBody.appendChild(makeRow(id, title, author))
            })
        })
}

function makeRow(id, title, author) {
    let tdTitle = document.createElement('td')
    tdTitle.textContent = title
    let tdAuthor = document.createElement('td')
    tdAuthor.textContent = author
    let tdButtons = document.createElement('td')
    let editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    editBtn.addEventListener('click', (e) => editRow(e))
    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = 'Delete'
    deleteBtn.addEventListener('click', (e) => deleteRow(e))
    tdButtons.appendChild(editBtn)
    tdButtons.appendChild(deleteBtn)
    let tr = document.createElement('tr')
    tr.id = id
    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdButtons)
    return tr
}

let formTitle = document.querySelector('form h3')
const titleInputField = document.querySelector('form input')
const authorInputField = document.querySelectorAll('form input')[1]

function postNewBook() {
    let requestType = 'post'

    if (formTitle.textContent == 'Edit FORM') {
        requestType = 'put'
        url += `/${rowId}`
    }

    if (titleInputField.value.length != 0 && authorInputField.value.length != 0) {
        fetch(url, {
            method: requestType,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "author": authorInputField.value,
                "title": titleInputField.value
            })
        })
            .then(res => {
                if (res.status == 200) {
                    resetForm()
                    loadAllBooks()
                }
            })
    }
}

let rowId = ''

function deleteRow(e) {
    rowId = e.currentTarget.parentElement.parentElement.id

    fetch(url + `/${rowId}`, { method: 'delete' })
        .then(res => {
            if (res.status == 200) {
                resetForm()
                loadAllBooks()
            }
        })
}

function editRow(e) {
    formTitle.textContent = 'Edit FORM'
    submitBookBtn.innerText = 'Save'
    titleInputField.value = e.target.parentElement.parentElement.querySelectorAll('td')[0].textContent
    authorInputField.value = e.target.parentElement.parentElement.querySelectorAll('td')[1].textContent
    rowId = e.currentTarget.parentElement.parentElement.id
}

function resetForm() {
    url = 'http://localhost:3030/jsonstore/collections/books'
    formTitle.textContent = 'FORM'
    submitBookBtn.innerText = 'Submit'
    titleInputField.value = ''
    authorInputField.value = ''
}