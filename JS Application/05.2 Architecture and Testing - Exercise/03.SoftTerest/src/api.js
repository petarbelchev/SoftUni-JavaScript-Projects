import { navOnSumbit } from "./nav.js"


const urlLogout = 'http://localhost:3030/users/logout'
const urlPostIdea = 'http://localhost:3030/data/ideas'

export async function onSubmit(url, options) {
    try {
        const response = await fetch(url, options)
        const resData = await response.json()
        
        if (response.ok != true) {
            throw new Error(resData.message)
        }

        localStorage.setItem('accessToken', resData.accessToken)
        localStorage.setItem('id', resData._id)

        navOnSumbit()

    } catch (error) {
        throw error
    }
}

export async function onLogout() {
    const response = await fetch(urlLogout, {
        method: 'get',
        headers: { 'X-Authorization': localStorage.accessToken }
    })

    if (response.status != 204) {
        const error = await response.json()
        alert(error.message)
    } else {
        localStorage.clear()
        navOnSumbit()
    }
}

export async function getRequest(url) {
    const response = await fetch(url)
    let data = response.json()
    return data
}

export async function onCreate(options) {
    const response = await fetch(urlPostIdea, options)

    if (response.ok != true) {
        const error = await response.json()
        throw new Error(error.message)
    }
}

export async function deleteRequest(id) {
    const response = await fetch('http://localhost:3030/data/ideas/' + id, {
        method: 'delete',
        headers: { 'X-Authorization': localStorage.accessToken }
    })

    if (response.ok != true) {
        const error = await response.json()
        throw new Error(error.message)
    }
}