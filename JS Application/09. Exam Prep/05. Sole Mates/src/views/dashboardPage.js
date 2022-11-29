import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllShoes } from "../data/shoes.js";


export async function dashboardPage(ctx) {
    let allShoes = await getAllShoes();
    render(dashboardPageTemp(allShoes), ctx.contentContainer);
}

const dashboardPageTemp = (allShoes) => html`
    <!-- Dashboard page -->
    <section id="dashboard">
        <h2>Collectibles</h2>
        <ul class="card-wrapper">
            <!-- Display a li with information about every post (if any)-->
            ${
                allShoes.length > 0 ?
                    html`
                        ${allShoes.map(shoesCardTemp)}
                    `
                //<!-- Display an h2 if there are no posts -->
                : html`<h2>There are no items added yet.</h2>`
            }
        </ul>
    </section>
`;

const shoesCardTemp = (shoes) => html`
    <li class="card">
        <img src=${shoes.imageUrl} alt="eminem" />
        <p>
            <strong>Brand: </strong><span class="brand">${shoes.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${shoes.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
        <a class="details-btn" href="/details/${shoes._id}">Details</a>
    </li>
`;