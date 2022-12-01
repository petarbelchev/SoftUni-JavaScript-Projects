import { html, render } from "../../node_modules/lit-html/lit-html.js";


const navbar = document.querySelector('nav');

const userViewTemp = () => html`
    <a href="/allgames">All games</a>
    <div id="user">
        <a href="/create">Create Game</a>
        <a href="/logout">Logout</a>
    </div>
`;
const guestViewTemp = () => html`
    <a href="/allgames">All games</a>
    <div id="guest">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </div>
`;

export function setNavbar(userData) {
    if (userData) {
        render(userViewTemp(), navbar);
    } else {
        render(guestViewTemp(), navbar);
    }
}