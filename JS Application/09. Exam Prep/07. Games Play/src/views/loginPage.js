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
        ctx.page.redirect('/');

    } else {
        alert('All fields required!');
    }
}

const loginPageTemp = (ctx) => html`
    <section id="login-page" class="auth">
        <form id="login" @submit=${(e)=> onLogin(e, ctx)}>
    
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Login</h1>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
    
                <label for="login-pass">Password:</label>
                <input type="password" id="login-password" name="password">
                <input type="submit" class="btn submit" value="Login">
                <p class="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;