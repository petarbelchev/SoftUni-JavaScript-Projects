import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editShoesById, getShoesById } from "../data/shoes.js";
import { inputValidator } from "../utility.js";


export async function onEdit(ctx) {
    let shoes = await getShoesById(ctx.params.id);
    render(editPageTemp(shoes, onSubmit), ctx.contentContainer);

    async function onSubmit(e, shoes) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            designer: formData.get('designer'),
            value: formData.get('value')
        };

        if (inputValidator(data)) {
            await editShoesById(shoes._id, data, ctx);
            ctx.page.redirect(`/details/${shoes._id}`);
        } else {
            alert('All fields required!');
        }
    }
}

const editPageTemp = (shoes, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit item</h2>
            <form class="edit-form" @submit=${(e) => onSubmit(e, shoes)}>
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" value=${shoes.brand}/>
                <input type="text" name="model" id="shoe-model" placeholder="Model" value=${shoes.model}/>
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" value=${shoes.imageUrl}/>
                <input type="text" name="release" id="shoe-release" placeholder="Release date" value=${shoes.release}/>
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" value=${shoes.designer}/>
                <input type="text" name="value" id="shoe-value" placeholder="Value" value=${shoes.value}/>
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;