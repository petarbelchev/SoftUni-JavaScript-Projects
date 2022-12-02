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
    <!--Login Page-->
    <section id="loginaPage">
        <form class="loginForm" @submit=${(e) => onLogin(e, ctx)}>
            <h2>Login</h2>
            <div>
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
            <div>
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Login</button>
    
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </form>
    </section>
`;