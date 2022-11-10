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
    } else if (formData.password != formData['confirm-pass']) {
        return alert("Password don't match!");
    }

    let data = {
        username: formData.username,
        email: formData.email,
        password: formData.password
    }

    localStorage.setItem('userData', JSON.stringify(await register(data)));
    ctx.page.redirect('/');
}

const registerPageTemp = (ctx) => html`
    <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" class="register">
        <form id="register-form" action="" method="" @submit=${(e) => onRegister(e, ctx)}>
            <fieldset>
                <legend>Register Form</legend>
                <p class="field">
                    <label for="email">Email</label>
                    <span class="input">
                        <input type="text" name="email" id="email" placeholder="Email">
                    </span>
                </p>
                <p class="field">
                    <label for="password">Password</label>
                    <span class="input">
                        <input type="password" name="password" id="password" placeholder="Password">
                    </span>
                </p>
                <p class="field">
                    <label for="repeat-pass">Repeat Password</label>
                    <span class="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                    </span>
                </p>
                <input class="button submit" type="submit" value="Register">
            </fieldset>
        </form>
    </section>
`;