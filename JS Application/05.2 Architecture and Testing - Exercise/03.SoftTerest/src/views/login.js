import { onSubmit } from "../api.js"

const loginView = document.getElementById('loginView')
const urlLogin = 'http://localhost:3030/users/login'

export function setLoginView(main) {
    main.replaceChildren(loginView)
}

const form = loginView.querySelector('form')

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')

    let options = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    }
    
    try {
        await onSubmit(urlLogin, options)
        form.reset();
    } catch (error) {
        alert(error)
    }
})