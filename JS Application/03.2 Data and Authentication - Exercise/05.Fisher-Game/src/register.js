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

let url = 'http://localhost:3030/users/register'

let formEl = document.querySelector('form')
formEl.addEventListener('submit', async (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)
    let data = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    try {
        if (data.password !== formData.get('rePass')) {
            throw new Error('Incorect password! Try again!')
        }
    
        let response = await fetch(url, {
            method: 'post',
            headers: { 'content-type': 'application.json' },
            body: JSON.stringify(data)
        })

        if (response.status !== 200) {
            throw new Error('Try again!')
        }

        let userData = response.json()
        sessionStorage.setItem('accessToken', userData.accessToken)
        location.assign('./index.html')

    } catch (error) {
        alert(error.message)
    }
})
