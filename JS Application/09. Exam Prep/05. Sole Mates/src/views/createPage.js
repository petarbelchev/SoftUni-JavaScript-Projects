import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createShoes } from "../data/shoes.js";
import { inputValidator } from "../utility.js";


export function createPage(ctx) {
    render(createPageTemp(onCreate), ctx.contentContainer);

    async function onCreate(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            brand: formData.get('brand'),
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            designer: formData.get('designer'),
            value: formData.get('value'),
        };

        if (inputValidator(data)) {
            await createShoes(data, ctx);
            ctx.page.redirect(`/dashboard`);
        } else {
            alert('All fields required!');
        }
    }
}

const createPageTemp = (callback) => html`
    <!-- Create Page (Only for logged-in users) -->
    <section id="create">
        <div class="form">
            <h2>Add item</h2>
            <form class="create-form" @submit=${callback}>
                <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
                <input type="text" name="model" id="shoe-model" placeholder="Model" />
                <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
                <input type="text" name="release" id="shoe-release" placeholder="Release date" />
                <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
                <input type="text" name="value" id="shoe-value" placeholder="Value" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;