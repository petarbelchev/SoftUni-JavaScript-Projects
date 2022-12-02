import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getMyEvents } from "../data/theaters.js";


export async function profilePage(ctx) {
    let myEvents = await getMyEvents(ctx);
    render(profilePageTemp(myEvents, ctx.userData), ctx.contentContainer);
}

const profilePageTemp = (events, user) => html`
    <section id="profilePage">
        <div class="userInfo">
            <div class="avatar">
                <img src="./images/profilePic.png">
            </div>
            <h2>${user.email}</h2>
        </div>
        <div class="board">
            ${
                events.length > 0
                ? html`${events.map(eventCard)}`
                : html`
                    <div class="no-events">
                        <p>This user has no events yet!</p>
                    </div>
                `
            }    
        </div>
    </section>
`;

const eventCard = (event) => html`
    <div class="eventBoard">
        <div class="event-info">
            <img src=${event.imageUrl}>
            <h2>${event.title}</h2>
            <h6>${event.date}</h6>
            <a href="/details/${event._id}" class="details-button">Details</a>
        </div>
    </div>
`;