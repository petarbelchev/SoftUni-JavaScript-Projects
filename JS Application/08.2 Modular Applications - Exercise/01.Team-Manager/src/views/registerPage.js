import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/users.js";


const registerPageTemp = (ctx) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form id="register-form" class="main-form pad-large" @submit=${(e)=> onRegister(e, ctx)}>
                <div class="error"></div>
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="/login" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
`;

export function registerPage(ctx) {
    render(registerPageTemp(ctx), ctx.mainElem);
}

async function onRegister(e, ctx) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = {
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password')
    }
    let messageField = e.target.querySelector('.error');
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;

    if (!emailPattern.test(data.email)) {
        messageField.textContent = 'Invalid email address!';
        return;
    }
    if (data.username.length < 3) {
        messageField.textContent = 'Username should be at least 3 characters!';
        return;
    }
    if (data.password.length < 3) {
        messageField.textContent = 'Password should be at least 3 characters!';
        return;
    }
    if (data.password != formData.get('repass')) {
        messageField.textContent = "Passwords don't match!";
        return;
    }

    localStorage.setItem('userData', JSON.stringify(await register(data)));
    ctx.page.redirect('/myteams');
}