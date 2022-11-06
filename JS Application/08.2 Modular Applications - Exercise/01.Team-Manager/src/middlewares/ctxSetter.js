import { updateNav } from "../../src/util.js";


const mainElem = document.querySelector('main');

export function ctxHandler(ctx, next) {
    ctx.userData = JSON.parse(localStorage.getItem('userData'));
    ctx.mainElem = mainElem;
    updateNav(ctx.userData);
    next();
}