import { html, render } from "../../node_modules/lit-html/lit-html.js";


const navbar = document.querySelector('nav');

const userView = (user) => html`
    <!-- Logged users -->
    <div class="user">
        <a href="/allmemes">All Memes</a>
        <a href="/create">Create Meme</a>
        <div class="profile">
            <span>Welcome, ${user.email}</span>
            <a href="/myprofile">My Profile</a>
            <a href="/logout">Logout</a>
        </div>
    </div>
`;
const guestView = () => html`
    <!-- Guest users -->
    <div class="guest">
        <a class="active" href="/">Home Page</a>
        <a href="/allmemes">All Memes</a>
        <div class="profile">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    </div>
`;

export function setNavbar(userData) {
    if (userData) {
        render(userView(userData), navbar);
    } else {
        render(guestView(), navbar);
    }
}