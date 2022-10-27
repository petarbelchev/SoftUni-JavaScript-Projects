import { onSubmit } from "../api.js"

const regView = document.getElementById('regView')

export function setRegisterView(main) {
    main.replaceChildren(regView)
}

const form = regView.querySelector('form')
const urlRegister = 'http://localhost:3030/users/register'

form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    const rePass = formData.get('repeatPassword')

    if (email.length < 3 || password.length < 3 || password !== rePass) {
        alert('Incorrect email or password! Please try again!')
        return
    }

    let options = {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    try {
        await onSubmit(urlRegister, options)        
    } catch (error) {
        alert(error)
    }
    
    form.reset()
})