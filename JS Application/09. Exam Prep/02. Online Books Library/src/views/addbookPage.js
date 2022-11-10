import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { addBook } from "../data/books.js";
import { inputValidator } from "../utility.js";


export function addbookPage(ctx) {
    render(addbookPageTemp(ctx), ctx.contentContainer);
}

async function onCreate(e, ctx) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = {
        title: formData.get('title'),
        description: formData.get('description'),
        imageUrl: formData.get('imageUrl'),
        type: formData.get('type')
    };

    if (inputValidator(data)) {
        await addBook(data, ctx);
        ctx.page.redirect(`/`);
    } else {
        alert('All fields required!');
    }
}

const addbookPageTemp = (ctx) => html`
    <!-- Create Page ( Only for logged-in users ) -->
    <section id="create-page" class="create">
        <form id="create-form" action="" method="" @submit=${(e) => onCreate(e, ctx)}>
            <fieldset>
                <legend>Add new Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" placeholder="Title">
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description" placeholder="Description"></textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" placeholder="Image">
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type">
                            <option value="Fiction">Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Add Book">
            </fieldset>
        </form>
    </section>
`;