import { logout } from "./data/users.js";
import { setNavbar } from "./views/navbar.js";


const mainElem = document.querySelector('main');
const errorBox = document.getElementById('errorBox');

export function ctxHandler(ctx, next) {
    ctx.userData = JSON.parse(localStorage.getItem('userData'));
    ctx.contentContainer = mainElem;
    setNavbar(ctx.userData);
    next();
}

export async function onLogout(ctx) {
    await logout(ctx);
    localStorage.removeItem('userData');
    ctx.page.redirect('/');
}

export function inputValidator(objWithData) {
    // if (data.name == '' || data.imageUrl == '' || data.description == '') {
    //     return false;
    // }

    return !Object.values(objWithData).some(v => v == '');
}

export function showErrorBox(message) {
    let span = errorBox.querySelector('span');
    span.textContent = message;
    errorBox.style.display = 'inline-block';
}

export function hideErrorBox() {
    errorBox.style.display = 'none';
}