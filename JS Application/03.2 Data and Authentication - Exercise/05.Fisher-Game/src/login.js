let logoutBtn = document.getElementById('logout')
let loginBtn = document.getElementById('login')
let registerBtn = document.getElementById('register')

if (sessionStorage.accessToken === undefined) {
    logoutBtn.style.display = 'none'
    loginBtn.style.display = 'inline-block'
    registerBtn.style.display = 'inline-block'
} else {
    loginBtn.style.display = 'none'
    logoutBtn.style.display = 'inline-block'
    registerBtn.style.display = 'none'
}

let url = 'http://localhost:3030/users/login'
let formEl = document.querySelector('form')

formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)
    let data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    fetch(url, {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Try again!')
            }
            return response.json()
        })
        .then(userData => {
            sessionStorage.setItem('accessToken', userData.accessToken)
            sessionStorage.setItem('email', userData.email)
            sessionStorage.setItem('username', userData.username)
            sessionStorage.setItem('id', userData._id)
            location.assign('./index.html')
        })
        .catch(err => alert(err.message))
})