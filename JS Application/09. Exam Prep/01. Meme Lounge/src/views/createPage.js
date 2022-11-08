import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createMeme } from "../data/memes.js";
import { hideErrorBox, inputValidator, showErrorBox } from "../utility.js";


export function createPage(ctx) {
    render(createPageTemp(onCreate), ctx.contentContainer);

    async function onCreate(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl')
        };

        if (inputValidator(data)) {
            await createMeme(data, ctx);
            hideErrorBox();
            ctx.page.redirect(`/allmemes`);
        } else {
            showErrorBox('All fields required!');
        }
    }
}

const createPageTemp = (callback) => html`
    <!-- Create Meme Page ( Only for logged users ) -->
    <section id="create-meme">
        <form id="create-form" @submit=${callback}>
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`;