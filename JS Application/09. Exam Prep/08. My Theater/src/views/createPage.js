import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createEvent } from "../data/theaters.js";
import { inputValidator } from "../utility.js";


export function createPage(ctx) {
    render(createPageTemp(onCreate), ctx.contentContainer);

    async function onCreate(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            title: formData.get('title'),
            date: formData.get('date'),
            author: formData.get('author'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl')
        };

        if (inputValidator(data)) {
            await createEvent(data, ctx);
            ctx.page.redirect(`/`);
        } else {
            alert('All fields required!');
        }
    }
}

const createPageTemp = (callback) => html`
    <section id="createPage">
        <form class="create-form" @submit=${callback}>
            <h1>Create Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" value="">
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year">
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author">
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" name="description" placeholder="Description"></textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url" value="">
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>
`;