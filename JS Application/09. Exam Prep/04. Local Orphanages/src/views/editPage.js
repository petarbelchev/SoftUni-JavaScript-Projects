import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editMaterialById, getMaterialById } from "../data/materials.js";
import { inputValidator } from "../utility.js";


export async function onEdit(ctx) {
    let material = await getMaterialById(ctx.params.id);
    render(editPageTemp(material, onSubmit), ctx.contentContainer);

    async function onSubmit(e, material) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            address: formData.get('address'),
            phone: formData.get('phone')
        };

        if (inputValidator(data)) {
            await editMaterialById(material._id, data, ctx);
            ctx.page.redirect(`/details/${material._id}`);
        } else {
            alert('All fields required!');
        }
    }
}

const editPageTemp = (material, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit-page" class="auth">
        <form id="edit" @submit=${(e) => onSubmit(e, material)}>
            <h1 class="title">Edit Post</h1>
    
            <article class="input-group">
                <label for="title">Post Title</label>
                <input type="title" name="title" id="title" value=${material.title}>
            </article>
    
            <article class="input-group">
                <label for="description">Description of the needs </label>
                <input type="text" name="description" id="description" value=${material.description}>
            </article>
    
            <article class="input-group">
                <label for="imageUrl"> Needed materials image </label>
                <input type="text" name="imageUrl" id="imageUrl" value=${material.imageUrl}>
            </article>
    
            <article class="input-group">
                <label for="address">Address of the orphanage</label>
                <input type="text" name="address" id="address" value=${material.address}>
            </article>
    
            <article class="input-group">
                <label for="phone">Phone number of orphanage employee</label>
                <input type="text" name="phone" id="phone" value=${material.phone}>
            </article>
    
            <input type="submit" class="btn submit" value="Edit Post">
        </form>
    </section>
`;