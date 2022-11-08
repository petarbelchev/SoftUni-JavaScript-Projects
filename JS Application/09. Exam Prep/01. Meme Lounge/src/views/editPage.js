import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editMemeById, getMemeById } from "../data/memes.js";
import { hideErrorBox, inputValidator, showErrorBox } from "../utility.js";


export async function onEdit(ctx) {
    let meme = await getMemeById(ctx.params.id);
    render(editPageTemp(meme, onSubmit), ctx.contentContainer);
    
    async function onSubmit(e, meme) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl')
        };

        if (inputValidator(data)) {
            await editMemeById(meme._id, data, ctx);
            hideErrorBox();
            ctx.page.redirect(`/details/${meme._id}`);
        } else {
            showErrorBox('All fields required!');
        }
    }
}

const editPageTemp = (meme, onSubmit) => html`
    <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
    <section id="edit-meme">
        <form id="edit-form" @submit=${(e)=> onSubmit(e, meme)}>
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" value=${meme.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description">${meme.description}</textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" value=${meme.imageUrl}>
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`;