import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { searchRequest } from "../data/shoes.js";


let currUser = null;

export async function searchPage(ctx) {
    currUser = ctx.userData;
    render(searchPageTemp(), ctx.contentContainer);
}

async function onSearch(e) {
    e.preventDefault();
    let formData = Object.fromEntries(new FormData(e.target));
    let searchData = await searchRequest(formData.search);
    let container = document.getElementById('search-container');
    render(resultsTemp(searchData), container);
}

const searchPageTemp = () => html`
    <!-- Search Page (Only for logged-in users) -->
    <section id="search">
        <h2>Search by Brand</h2>    
        <form class="search-wrapper cf" @submit=${onSearch}>
            <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
            <button type="submit">Search</button>
        </form>    
        <h3>Results:</h3>    
        <div id="search-container">

        </div>
    </section>
`;

const resultsTemp = (searchData) => html`
    <!-- Display a li with information about every post (if any)-->
    ${
        searchData.length > 0 ?
            html`
                <ul class="card-wrapper">
                    ${searchData.map(shoesCardTemp)}
                </ul>
            `
        //<!-- Display an h2 if there are no posts -->
        : html`<h2>There are no results found.</h2>`
    }
`;

const shoesCardTemp = (shoes) => html`
    <li class="card">
        <img src=${shoes.imageUrl} alt="travis" />
        <p>
            <strong>Brand: </strong><span class="brand">${shoes.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${shoes.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${shoes.value}</span>$</p>
        ${
            currUser ?
                html`<a class="details-btn" href="/details/${shoes._id}">Details</a>`
            : nothing
        }
    </li>
`;