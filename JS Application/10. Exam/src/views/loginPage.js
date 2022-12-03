import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/users.js";


export function loginPage(ctx) {
    render(loginPageTemp(ctx), ctx.contentContainer);
}

async function onLogin(e, ctx) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = {
        email: formData.get('email'),
        password: formData.get('password')
    };

    if (data.email != '' && data.password != '') {

        localStorage.setItem('userData', JSON.stringify(await login(data)));
        ctx.page.redirect('/dashboard');

    } else {
        alert('All fields required!');
    }
}

const loginPageTemp = (ctx) => html`
    <section id="login">
        <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit=${(e) => onLogin(e, ctx)}>
                <input type="text" name="email" id="email" placeholder="email" />
                <input type="password" name="password" id="password" placeholder="password" />
                <button type="submit">login</button>
                <p class="message">
                    Not registered? <a href="/register">Create an account</a>
                </p>
            </form>
        </div>
    </section>
`;