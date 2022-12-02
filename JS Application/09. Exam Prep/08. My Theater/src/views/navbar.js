import { html, render } from "../../node_modules/lit-html/lit-html.js";


const navbar = document.querySelector('nav');

const userViewTemp = () => html`
    <a href="/">Theater</a>
    <ul>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/create">Create Event</a></li>
        <li><a href="/logout">Logout</a></li>
    </ul>
`;
const guestViewTemp = () => html`
    <a href="/">Theater</a>
    <ul>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
    </ul>
`;

export function setNavbar(userData) {
    if (userData) {
        render(userViewTemp(), navbar);
    } else {
        render(guestViewTemp(), navbar);
    }
}