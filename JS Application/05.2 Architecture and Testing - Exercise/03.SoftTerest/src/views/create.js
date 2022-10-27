import { onCreate } from "../api.js"
import { navOnCreate } from "../nav.js"

const createView = document.getElementById('createView')

export function setCreateView(main) {
    main.replaceChildren(createView)
}

const form = createView.querySelector('form')
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const formData = new FormData(ev.currentTarget)
    const title = formData.get('title')
    const description = formData.get('description')
    const img = formData.get('imageURL')

    if (title.length < 6 || description.length < 10 || img.length < 5) {
        alert('Incorrect input!')
        return
    }

    const options = {
        method: 'post',
        headers: { 
            'content-type': 'application/json', 
            'X-Authorization': localStorage.accessToken
        },
        body: JSON.stringify({
            title,
            description,
            img
        })
    }

    try {
        await onCreate(options)
        form.reset()
        navOnCreate()     
    } catch (error) {
        alert(error)
    }
})