import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { deleteMeme, getMemeById } from "../data/memes.js";


export async function detailsPage(ctx) {
    let meme = await getMemeById(ctx.params.id);
    render(detailsPageTemp(meme, ctx), ctx.contentContainer);
}

export async function onDelete(ctx) {
    await deleteMeme(ctx);
    ctx.page.redirect('/allmemes');
}

const detailsPageTemp = (meme, ctx) => html`
    <!-- Details Meme Page (for guests and logged users) -->
    <section id="meme-details">
        <h1>Meme Title: ${meme.title}</h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${meme.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>${meme.description}</p>
    
                <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                
                ${ctx.userData && meme._ownerId == ctx.userData._id 
                    ? html`
                        <a class="button warning" href="/edit/${meme._id}">Edit</a>
                        <a class="button danger" href="/delete/${meme._id}">Delete</a>
                    `
                    : nothing
                }
            </div>
        </div>
    </section>
`;