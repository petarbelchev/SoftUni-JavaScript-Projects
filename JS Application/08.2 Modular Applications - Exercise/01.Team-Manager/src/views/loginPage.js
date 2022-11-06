import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/users.js";


const loginPageTemp = (ctx) => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form id="login-form" class="main-form pad-large" @submit=${(e) => onLogin(e, ctx)}>
                <div class="error"></div>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>
`;

export function loginPage(ctx) {
    render(loginPageTemp(ctx), ctx.mainElem);
}

async function onLogin(e, ctx) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    try {
        localStorage.setItem('userData', JSON.stringify(await login(data)));
        ctx.page.redirect('/myteams');
    } catch (error) {
        e.target.querySelector('.error').textContent = error.message;
    }
}