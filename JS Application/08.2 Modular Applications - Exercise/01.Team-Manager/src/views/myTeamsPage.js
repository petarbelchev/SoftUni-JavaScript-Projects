import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getMyTeams } from "../api/teams.js";
import { getMyTeamsMembers } from "../api/members.js";


const myTeamsPageTemp = (myTeams, myTeamsMembers) => html`
    <section id="my-teams">
    
        <article class="pad-med">
            <h1>My Teams</h1>
        </article>

        ${myTeams.length == 0 ? html`
                <article class="layout narrow">
                    <div class="pad-med">
                        <p>You are not a member of any team yet.</p>
                        <p><a href="/teams">Browse all teams</a> to join one, or use the button bellow to cerate your own
                        team.</p>
                    </div>
                    <div class=""><a href="/create" class="action cta">Create Team</a></div>
                </article>
            `
            : html`
                ${myTeams.map(t => html`
                    <article class="layout">
                        <img src=${t.team.logoUrl} class="team-logo left-col">
                        <div class="tm-preview">
                            <h2>${t.team.name}</h2>
                            <p>${t.team.description}</p>
                            <span class="details">${myTeamsMembers.filter(m => m.teamId == t.teamId).length} Members</span>
                            <div><a href="/details/${t.teamId}" class="action">See details</a></div>
                        </div>
                    </article>
                `)}
            `
        }
    </section>
`;

export async function myTeamsPage(ctx) {
    let myTeams = await getMyTeams(ctx);
    let myTeamsMembers;

    if (myTeams.length > 0) {
        let myTeamsIds = myTeams.map(t => t.teamId);
        myTeamsMembers = await getMyTeamsMembers(myTeamsIds, ctx);
    }
    render(myTeamsPageTemp(myTeams, myTeamsMembers), ctx.mainElem);
}