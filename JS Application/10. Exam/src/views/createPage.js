import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createAlbum } from "../data/albums.js";
import { inputValidator } from "../utility.js";


export function createPage(ctx) {
    render(createPageTemp(onCreate), ctx.contentContainer);

    async function onCreate(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            singer: formData.get('singer'),
            album: formData.get('album'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            label: formData.get('label'),
            sales: formData.get('sales')
        };

        if (inputValidator(data)) {
            await createAlbum(data, ctx);
            ctx.page.redirect(`/dashboard`);
        } else {
            alert('All fields required!');
        }
    }
}

const createPageTemp = (callback) => html`
    <section id="create">
        <div class="form">
            <h2>Add Album</h2>
            <form class="create-form" @submit=${callback}>
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                <input type="text" name="album" id="album-album" placeholder="Album" />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                <input type="text" name="release" id="album-release" placeholder="Release date" />
                <input type="text" name="label" id="album-label" placeholder="Label" />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;