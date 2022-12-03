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
    } else if (formData.password != formData['re-password']) {
        return alert("Password don't match!");
    }

    let data = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        gender: formData.gender
    }

    localStorage.setItem('userData', JSON.stringify(await register(data)));
    ctx.page.redirect('/dashboard');
}

const registerPageTemp = (ctx) => html`
    <section id="register">
        <div class="form">
            <h2>Register</h2>
            <form class="login-form" @submit=${(e) => onRegister(e, ctx)}>
                <input type="text" name="email" id="register-email" placeholder="email" />
                <input type="password" name="password" id="register-password" placeholder="password" />
                <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
                <button type="submit">register</button>
                <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
        </div>
    </section>
`;