import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editEventById, getEventById } from "../data/theaters.js";
import { inputValidator } from "../utility.js";


export async function onEdit(ctx) {
    let event = await getEventById(ctx.params.id);
    render(editPageTemp(event, onSubmit), ctx.contentContainer);

    async function onSubmit(e, event) {
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
            await editEventById(event._id, data, ctx);
            ctx.page.redirect(`/details/${event._id}`);
        } else {
            alert('All fields required!');
        }
    }
}

const editPageTemp = (event, onSubmit) => html`
    <!--Edit Page-->
    <section id="editPage">
        <form class="theater-form" @submit=${(e) => onSubmit(e, event)}>
            <h1>Edit Theater</h1>
            <div>
                <label for="title">Title:</label>
                <input id="title" name="title" type="text" placeholder="Theater name" .value=${event.title}>
            </div>
            <div>
                <label for="date">Date:</label>
                <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${event.date}>
            </div>
            <div>
                <label for="author">Author:</label>
                <input id="author" name="author" type="text" placeholder="Author" .value=${event.author}>
            </div>
            <div>
                <label for="description">Theater Description:</label>
                <textarea id="description" name="description"
                    placeholder="Description">${event.description}</textarea>
            </div>
            <div>
                <label for="imageUrl">Image url:</label>
                <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                    .value=${event.imageUrl}>
            </div>
            <button class="btn" type="submit">Submit</button>
        </form>
    </section>
`;