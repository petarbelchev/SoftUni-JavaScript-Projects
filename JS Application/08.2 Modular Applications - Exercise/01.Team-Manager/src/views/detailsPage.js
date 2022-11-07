import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { getTeamById } from "../api/teams.js";
import { getMembershipsByTeamId } from "../api/members.js";


const detailsPageTemp = (team, members, pending, currUserStatus, currUser) => html`
    <section id="team-home">
        <article class="layout">
            <img src=${team.logoUrl} class="team-logo left-col">
            <div class="tm-preview">
                <h2>${team.name}</h2>
                <p>${team.description}</p>
                <span class="details">${members.length}</span>
                <div>
                    ${currUserStatus.isOwner ? 
                        html`<a href="/edit/${team._id}" class="action">Edit team</a>` 
                    : currUserStatus.isNotMember ? 
                        html`<a href="/join/${team._id}" class="action">Join team</a>`
                    : currUserStatus.isPending ? 
                        html`Membership pending. <a href="/remove/${team._id}/${pending.find(p => p._ownerId == currUser._id)._id}">Cancel request</a>` 
                    : currUserStatus.isMember ? 
                        html`<a href="/remove/${team._id}/${members.find(m => m._ownerId == currUser._id)._id}" class="action invert">Leave team</a>`
                    : nothing }
                </div>
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                <ul class="tm-members">
                    ${currUserStatus.isOwner && members.length > 1 
                        ?   html`
                            <li>${currUser.username}</li>
                            ${members.filter(m => m._ownerId != currUser._id).map(m => html`
                                <li>${m.user.username}<a href="/remove/${team._id}/${m._id}" class="tm-control action">Remove from team</a></li>
                            `)}
                        `
                        :   html`
                            ${members.map(m => html`
                                <li>${m.user.username}</li>
                            `)}
                        `
                    }
                </ul>
            </div>
            <div class="pad-large">
                ${pending.length > 0 && currUserStatus.isOwner 
                    ?   html`
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            ${pending.map(p => html`
                                <li>
                                    ${p.user.username}<a href="/approve/${p._id}" class="tm-control action">Approve</a>
                                    <a href="/remove/${team._id}/${p._id}" class="tm-control action">Decline</a>
                                </li>
                            `)}
                        </ul>
                    `
                    :   nothing
                }
            </div>
        </article>
    </section>
`;

export async function detailsPage(ctx) {
    let team = await getTeamById(ctx.params.id);
    let memberships = await getMembershipsByTeamId(team._id);
    let members = memberships.filter(m => m.status == 'member');
    let pending = memberships.filter(m => m.status == 'pending');
    let currUserStatus = {};
    let currUser = ctx.userData;

    if (currUser == null) {
        currUserStatus.isGuest = true;
    } else {
        currUserStatus = {
            isOwner: currUser._id == team._ownerId,
            isMember: memberships.some(m => m._ownerId == currUser._id && m.status == 'member'),
            isNotMember: !memberships.some(m => m._ownerId == currUser._id),
            isPending: memberships.some(m => m._ownerId == currUser._id && m.status == 'pending')
        };
    }
    render(detailsPageTemp(team, members, pending, currUserStatus, currUser), ctx.mainElem);
}