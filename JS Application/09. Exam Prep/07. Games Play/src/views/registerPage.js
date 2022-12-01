import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../data/users.js";
import { inputValidator } from "../utility.js";


export function registerPage(ctx) {
    render(registerPageTemp(ctx), ctx.contentContainer);
}

async function onRegister(e, ctx) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));

    if (!inputValidator(formData)) {
        return alert('All fields required!');
    } else if (formData.password != formData['confirm-password']) {
        return alert("Password don't match!");
    }

    let data = {
        email: formData.email,
        password: formData.password
    }

    localStorage.setItem('userData', JSON.stringify(await register(data)));
    ctx.page.redirect('/');
}

const registerPageTemp = (ctx) => html`
    <section id="register-page" class="content auth">
        <form id="register" @submit=${(e) => onRegister(e, ctx)}>
            <div class="container">
                <div class="brand-logo"></div>
                <h1>Register</h1>
    
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="maria@email.com">
    
                <label for="pass">Password:</label>
                <input type="password" name="password" id="register-password">
    
                <label for="con-pass">Confirm Password:</label>
                <input type="password" name="confirm-password" id="confirm-password">
    
                <input class="btn submit" type="submit" value="Register">
    
                <p class="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
`;