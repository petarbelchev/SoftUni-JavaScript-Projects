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
    } else if (formData.password != formData.repeatPassword) {
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
    <!--Register Page-->
    <section id="registerPage">
        <form class="registerForm" @submit=${(e) => onRegister(e, ctx)}>
            <img src="./images/logo.png" alt="logo" />
            <h2>Register</h2>
            <div class="on-dark">
                <label for="email">Email:</label>
                <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
            </div>
    
            <div class="on-dark">
                <label for="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="********" value="">
            </div>
    
            <div class="on-dark">
                <label for="repeatPassword">Repeat Password:</label>
                <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
            </div>
    
            <button class="btn" type="submit">Register</button>
    
            <p class="field">
                <span>If you have profile click <a href="/login">here</a></span>
            </p>
        </form>
    </section>
`;