import { logout } from "./data/users.js";
import { setNavbar } from "./views/navbar.js";


const mainElem = document.querySelector('main');

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
    return !Object.values(objWithData).some(v => v == '');
}