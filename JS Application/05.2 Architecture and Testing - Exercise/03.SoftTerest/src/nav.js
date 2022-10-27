import { onLogout } from './api.js'
import { setCreateView } from './views/create.js'
import { setDashboardView } from './views/dash.js'
import { setHomeView } from './views/home.js'
import { setLoginView } from './views/login.js'
import { setRegisterView } from './views/register.js'


const links = {
    'dashBtn': setDashboardView,
    'createBtn': setCreateView,
    'loginBtn': setLoginView,
    'regBtn': setRegisterView,
    'logo': setHomeView,
    'logoutBtn': onLogout
}

let view;
const main = document.querySelector('main')
const navPanel = document.getElementById('navPanel')
navPanel.addEventListener('click', (ev) => {
    if (ev.target.tagName == 'A' ||
        ev.target.tagName == 'IMG') {

        view = links[ev.target.id]
        view(main)
    }
})

export function setNavPanel() {
    if (localStorage.accessToken != undefined) {
        createBtn.style.display = ''
        logoutBtn.style.display = ''
        loginBtn.style.display = 'none'
        regBtn.style.display = 'none'
    } else {
        createBtn.style.display = 'none'
        logoutBtn.style.display = 'none'
        loginBtn.style.display = ''
        regBtn.style.display = ''
    }
}

export function navOnSumbit () {
    setHomeView(main)
    setNavPanel()
}

export function navOnCreate() {
    setDashboardView(main)
}