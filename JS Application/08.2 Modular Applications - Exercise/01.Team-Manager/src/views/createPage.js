import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createTeam } from "../api/teams.js";
import { becomeMember } from "../api/members.js";
import { inputValidator } from "../util.js";


const createPageTemp = (onCreate) => html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form id="create-form" class="main-form pad-large" @submit=${onCreate}>
                <div class="error"></div>
                <label>Team name: <input type="text" name="name"></label>
                <label>Logo URL: <input type="text" name="logoUrl"></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team">
            </form>
        </article>
    </section>
`;

export function createPage(ctx) {
    render(createPageTemp(onCreate), ctx.mainElem);

    async function onCreate(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            name: formData.get('name'),
            logoUrl: formData.get('logoUrl'),
            description: formData.get('description')
        };
        let messageField = e.target.querySelector('.error');

        if (inputValidator(data, messageField)) {
            let newTeam = await createTeam(data, ctx);
            let newPendingMember = await becomeMember(newTeam._id, ctx);
            ctx.page.redirect(`/approve/${newPendingMember._id}`);
        }
    }
}
