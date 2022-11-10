import { html, render } from "../../node_modules/lit-html/lit-html.js";


const navbar = document.querySelector('.navbar-dashboard');

const userViewTemp = (user) => html`
    <!-- Logged-in users -->
    <a href="/">Dashboard</a>                    

    <div id="user">
        <span>Welcome, ${user.email}</span>
        <a class="button" href="/mybooks">My Books</a>
        <a class="button" href="/addbook">Add Book</a>
        <a class="button" href="/logout">Logout</a>
    </div>
`;
const guestViewTemp = () => html`
    <!-- Guest users -->
    <a href="/">Dashboard</a>                    

    <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
    </div>
`;

export function setNavbar(userData) {
    if (userData) {
        render(userViewTemp(userData), navbar);
    } else {
        render(guestViewTemp(), navbar);
    }
}