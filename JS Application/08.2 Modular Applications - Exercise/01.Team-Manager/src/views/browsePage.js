import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllTeams } from "../api/teams.js";
import { getAllMembers } from "../api/members.js";


const browsePageTemp = (teams, user) => html`
    <section id="browse">
    
        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>
    
        ${user != null 
            ? html`
                <article class="layout narrow">
                <div class="pad-small"><a href="/create" class="action cta">Create Team</a></div>
                </article>
            `
            : nothing
        }
    
        ${teams.map(teamTemp)}
    
    </section>
`;

const teamTemp = (team) => html`
    <article class="layout">
        <img src=${team.logoUrl} class="team-logo left-col">
        <div class="tm-preview">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
            <span class="details">${team.members.length} Members</span>
            <div><a href="/details/${team._id}" class="action">See details</a></div>
        </div>
    </article>
`;

export async function browsePage(ctx) {
    let teams = await getAllTeams();
    let members = await getAllMembers();
    teams.map(t => t.members = members.filter(m => m.teamId == t._id));
    render(browsePageTemp(teams, ctx.userData), ctx.mainElem);
}