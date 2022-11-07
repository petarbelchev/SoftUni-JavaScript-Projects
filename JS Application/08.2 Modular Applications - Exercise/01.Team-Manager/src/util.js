import { approveRequest, becomeMember, removeRequest } from "./api/members.js";
import { logout } from "./api/users.js";


const [browse, login, register, myTeams, logoutBtn] = document.querySelector('nav').children;
const mainElem = document.querySelector('main');

export function ctxHandler(ctx, next) {
    ctx.userData = JSON.parse(localStorage.getItem('userData'));
    ctx.mainElem = mainElem;
    updateNav(ctx.userData);
    next();
}

export function updateNav(userData) {
    if (userData) {
        login.style.display = 'none';
        register.style.display = 'none';
        myTeams.style.display = 'inline-block';
        logoutBtn.style.display = 'inline-block';
    } else {
        login.style.display = 'inline-block';
        register.style.display = 'inline-block';
        myTeams.style.display = 'none';
        logoutBtn.style.display = 'none';
    }
}

export async function onLogout(ctx) {
    await logout(ctx);
    localStorage.removeItem('userData');
    ctx.page.redirect('/');
}

export async function approveMember(ctx) {
    let approvedMember = await approveRequest(ctx);
    ctx.page.redirect(`/details/${approvedMember.teamId}`);
}

export async function joinMember(ctx) {
    await becomeMember(ctx.params.id, ctx);
    ctx.page.redirect(`/details/${ctx.params.id}`);
}

export async function removeMember(ctx) {
    await removeRequest(ctx);
    ctx.page.redirect(`/details/${ctx.params.teamId}`);
}

export function inputValidator(data, messageField) {
    if (data.name.length < 4) {
        messageField.textContent = 'Team name should be at least 4 characters!';
        return false;
    }
    if (data.logoUrl == '') {
        messageField.textContent = 'Image URL is required!'
        return false;
    }
    if (data.description.length < 10) {
        messageField.textContent = 'Description should be at least 10 characters!'
        return false;
    }
    return true;
}