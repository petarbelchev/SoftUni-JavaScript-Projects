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

    console.log(data)
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
    <!-- Login Page ( Only for Guest users ) -->
    <section id="login-page" class="login">
        <form id="login-form" action="" method="" @submit=${(e) => onLogin(e, ctx)}>
            <fieldset>
                <legend>Login Form</legend>
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
                <input class="button submit" type="submit" value="Login">
            </fieldset>
        </form>
    </section>
`;