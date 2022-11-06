import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editTeamById, getTeamById } from "../api/teams.js";
import { inputValidator } from "../util.js";


const editPageTemp = (team, onSubmit) => html`
    <section id="edit">
        <article class="narrow">
            <header class="pad-med">
                <h1>Edit Team</h1>
            </header>
            <form id="edit-form" class="main-form pad-large" @submit=${(e)=> onSubmit(e, team)}>
                <div class="error"></div>
                <label>Team name: <input type="text" name="name" value=${team.name}></label>
                <label>Logo URL: <input type="text" name="logoUrl" value=${team.logoUrl}></label>
                <label>Description: <textarea name="description">${team.description}</textarea></label>
                <input class="action cta" type="submit" value="Save Changes">
            </form>
        </article>
    </section>
`;

export async function editPage(ctx) {
    let team = await getTeamById(ctx.params.id);
    render(editPageTemp(team, onSubmit), ctx.mainElem)


    async function onSubmit(e, team) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            name: formData.get('name'),
            logoUrl: formData.get('logoUrl'),
            description: formData.get('description')
        };
        let messageField = e.target.querySelector('.error');

        if (inputValidator(data, messageField)) {
            await editTeamById(team._id, data, ctx)
            ctx.page.redirect(`/details/${team._id}`);
        }
    }
}
