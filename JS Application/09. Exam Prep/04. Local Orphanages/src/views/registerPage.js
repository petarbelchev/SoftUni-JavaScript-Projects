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
    <!-- Register Page (Only for Guest users) -->
    <section id="register-page" class="auth">
        <form id="register" @submit=${(e) => onRegister(e, ctx)}>
            <h1 class="title">Register</h1>
    
            <article class="input-group">
                <label for="register-email">Email: </label>
                <input type="email" id="register-email" name="email">
            </article>
    
            <article class="input-group">
                <label for="register-password">Password: </label>
                <input type="password" id="register-password" name="password">
            </article>
    
            <article class="input-group">
                <label for="repeat-password">Repeat Password: </label>
                <input type="password" id="repeat-password" name="repeatPassword">
            </article>
    
            <input type="submit" class="btn submit-btn" value="Register">
        </form>
    </section>
`;