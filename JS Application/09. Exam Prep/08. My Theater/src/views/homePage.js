import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllEvents } from "../data/theaters.js";


export async function homePage(ctx) {
    let allEvents = await getAllEvents();
    render(homePageTemp(allEvents), ctx.contentContainer);
}

const homePageTemp = (events) => html`
    <section class="welcomePage">
        <div id="welcomeMessage">
            <h1>My Theater</h1>
            <p>Since 1962 World Theatre Day has been celebrated by ITI Centres, ITI Cooperating Members, theatre
                professionals, theatre organizations, theatre universities and theatre lovers all over the world on
                the 27th of March. This day is a celebration for those who can see the value and importance of the
                art
                form “theatre”, and acts as a wake-up-call for governments, politicians and institutions which have
                not
                yet recognised its value to the people and to the individual and have not yet realised its potential
                for
                economic growth.</p>
        </div>
        <div id="events">
            <h1>Future Events</h1>
            <div class="theaters-container">
    
                ${
                    events.length > 0 
                    ? html`${events.map(theaterCardTemp)}`
                    : html`<h4 class="no-event">No Events Yet...</h4>`
                }               

            </div>
        </div>
    </section>
`;

const theaterCardTemp = (events) => html`
    <div class="eventsInfo">
        <div class="home-image">
            <img src=${events.imageUrl}>
        </div>
        <div class="info">
            <h4 class="title">${events.title}</h4>
            <h6 class="date">${events.date}</h6>
            <h6 class="author">${events.author}</h6>
            <div class="info-buttons">
                <a class="btn-details" href="/details/${events._id}">Details</a>
            </div>
        </div>
    </div>
`;