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

        try {
            localStorage.setItem('userData', JSON.stringify(await login(data)));
            ctx.page.redirect('/');
        } catch (error) {
            alert(error.message);
        }

    } else {
        alert('All fields required!');
    }
}

const loginPageTemp = (ctx) => html`
    <!-- Login Page (Only for Guest users) -->
    <section id="login-page" class="auth">
        <form id="login" @submit=${(e) => onLogin(e, ctx)}>
            <h1 class="title">Login</h1>
    
            <article class="input-group">
                <label for="login-email">Email: </label>
                <input type="email" id="login-email" name="email">
            </article>
    
            <article class="input-group">
                <label for="password">Password: </label>
                <input type="password" id="password" name="password">
            </article>
    
            <input type="submit" class="btn submit-btn" value="Log In">
        </form>
    </section>
`;