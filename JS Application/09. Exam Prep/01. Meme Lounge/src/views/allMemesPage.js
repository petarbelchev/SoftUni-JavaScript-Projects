import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllMemes } from "../data/memes.js";


export async function allMemesPage(ctx) {
    let allMemes = await getAllMemes();
    render(allMemesPageTemp(allMemes), ctx.contentContainer);
}

const allMemesPageTemp = (memes) => html`
    <!-- All Memes Page ( for Guests and Users )-->
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            <!-- Display : All memes in database ( If any ) -->
            ${
                memes.length > 0 
                ?   html`${memes.map(memeCardTemp)}`
                // <!-- Display : If there are no memes in database -->
                :   html`<p class="no-memes">No memes in database.</p>`
            }            
        </div>
    </section>
`;

const memeCardTemp = (meme) => html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${meme.title}</p>
                <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${meme._id}">Details</a>
            </div>
        </div>
    </div>
`;