import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../data/offers.js";


export async function dashboardPage(ctx) {
    let allOffers = await getAllOffers();
    render(dashboardPageTemp(allOffers), ctx.contentContainer);
}

const dashboardPageTemp = (offers) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Job Offers</h2>
        <!-- Display a div with information about every post (if any)-->
        ${
            offers.length > 0 
            ? html`${offers.map(offerCardTemp)}`
            //<!-- Display an h2 if there are no posts -->
            : html`<h2>No offers yet.</h2>`
        }
    </section>
`;

const offerCardTemp = (offer) => html`
    <div class="offer">
        <img src=${offer.imageUrl} alt="./images/example3.png" />
        <p>
            <strong>Title: </strong><span class="title">${offer.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
        <a class="details-btn" href="/details/${offer._id}">Details</a>
    </div>
`;