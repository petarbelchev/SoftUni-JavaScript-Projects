import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllAlbums } from "../data/albums.js";


export async function dashboardPage(ctx) {
    let allAlbums = await getAllAlbums();
    render(dashboardPageTemp(allAlbums), ctx.contentContainer);
}

const dashboardPageTemp = (albums) => html`
    <section id="dashboard">
        <h2>Albums</h2>
        ${
            albums.length > 0 
            //<!-- Display a li with information about every post (if any)-->
            ? html`
                <ul class="card-wrapper">
                    ${albums.map(albumCardTemp)}                    
                </ul>
            `
            //<!-- Display an h2 if there are no posts -->
            : html`<h2>There are no albums added yet.</h2>`
        }
    </section>
`;

const albumCardTemp = (album) => html`
    <li class="card">
        <img src=${album.imageUrl} alt="travis" />
        <p>
            <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
        </p>
        <p>
            <strong>Album name: </strong><span class="album">${album.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
        <a class="details-btn" href="/details/${album._id}">Details</a>
    </li>
`;