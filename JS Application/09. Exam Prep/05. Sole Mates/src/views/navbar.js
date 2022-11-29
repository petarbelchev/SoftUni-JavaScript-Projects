import { html, render } from "../../node_modules/lit-html/lit-html.js";


const navbar = document.querySelector('nav');

const userViewTemp = () => html`
    <!-- Logged-in users -->
    <div>
        <a href="/dashboard">Dashboard</a>
        <a href="/search">Search</a>
    </div>
    
    <div class="user">
        <a href="/create">Add Pair</a>
        <a href="/logout">Logout</a>
    </div>
`;
const guestViewTemp = () => html`
    <div>
        <a href="/dashboard">Dashboard</a>
        <a href="/search">Search</a>
    </div>

    <!-- Guest users -->
    <div class="guest">
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