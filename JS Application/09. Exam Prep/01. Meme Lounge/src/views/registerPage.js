import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/users.js";
import { hideErrorBox, inputValidator, showErrorBox } from "../utility.js";


export function registerPage(ctx) {
    render(registerPageTemp(ctx), ctx.contentContainer);
}

async function onRegister(e, ctx) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));

    if (!inputValidator(formData)) {
        return showErrorBox('All fields required!');
    } else if (formData.password != formData.repeatPass) {        
        return showErrorBox("Password don't match!");
    }

    let data = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gender: formData.gender
    }

    localStorage.setItem('userData', JSON.stringify(await register(data)));
    hideErrorBox();
    ctx.page.redirect('/allmemes');
}

const registerPageTemp = (ctx) => html`
    <!-- Register Page ( Only for guest users ) -->
    <section id="register">
        <form id="register-form" @submit=${(e)=> onRegister(e, ctx)}>
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username">
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;