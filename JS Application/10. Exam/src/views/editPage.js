import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editAlbumById, getAlbumById } from "../data/albums.js";
import { inputValidator } from "../utility.js";


export async function onEdit(ctx) {
    let album = await getAlbumById(ctx.params.id);
    render(editPageTemp(album, onSubmit), ctx.contentContainer);

    async function onSubmit(e) {
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
            await editAlbumById(album._id, data, ctx);
            ctx.page.redirect(`/details/${album._id}`);
        } else {
            alert('All fields required!');
        }
    }
}

const editPageTemp = (album, onSubmit) => html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form class="edit-form" @submit=${onSubmit}>
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${album.singer}/>
                <input type="text" name="album" id="album-album" placeholder="Album" .value=${album.album}/>
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl}/>
                <input type="text" name="release" id="album-release" placeholder="Release date" .value=${album.release}/>
                <input type="text" name="label" id="album-label" placeholder="Label" .value=${album.label}/>
                <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${album.sales}/>
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;