import { html, render } from "../../node_modules/lit-html/lit-html.js";


const navbar = document.querySelector('nav ul');

const userViewTemp = () => html`
    <!--Users and Guest-->
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/create">Create Postcard</a></li>
    <li><a href="/logout">Logout</a></li>
`;
const guestViewTemp = () => html`
    <!--Users and Guest-->
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    <li><a href="/login">Login</a></li>
    <li><a href="/register">Register</a></li>
`;

export function setNavbar(userData) {
    if (userData) {
        render(userViewTemp(), navbar);
    } else {
        render(guestViewTemp(), navbar);
    }
}