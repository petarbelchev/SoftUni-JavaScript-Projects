import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../data/users.js";
import { hideErrorBox, showErrorBox } from "../utility.js";


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

    console.log(data)
    if (data.email != '' && data.password != '') {
        
        try {
            localStorage.setItem('userData', JSON.stringify(await login(data)));
            hideErrorBox();
            ctx.page.redirect('/allmemes');
        } catch (error) {
            showErrorBox(error.message);
        }

    } else {
        showErrorBox('All fields required!');
    }
}

const loginPageTemp = (ctx) => html`
    <!-- Login Page ( Only for guest users ) -->
    <section id="login">
        <form id="login-form" @submit=${(e) => onLogin(e, ctx)}>
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;