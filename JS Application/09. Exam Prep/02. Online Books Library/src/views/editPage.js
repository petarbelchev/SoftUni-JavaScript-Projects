import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editBookById, getBookById } from "../data/books.js";
import { inputValidator } from "../utility.js";


export async function editPage(ctx) {
    let book = await getBookById(ctx.params.id);
    render(editPageTemp(book, ctx), ctx.contentContainer);    
}

async function onSubmit(e, book, ctx) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let data = {
        title: formData.get('title'),
        description: formData.get('description'),
        imageUrl: formData.get('imageUrl'),
        type: formData.get('type')
    };

    if (inputValidator(data)) {
        await editBookById(book._id, data, ctx);
        ctx.page.redirect(`/details/${book._id}`);
    } else {
        alert('All fields required!');
    }
}

const editPageTemp = (book, ctx) => html`
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="edit">
        <form id="edit-form" action="#" method="" @submit=${(e) => onSubmit(e, book, ctx)}>
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" .value=${book.title}>
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description"
                            id="description">${book.description}</textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" .value=${book.type}>
                            <option value="Fiction" selected>Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>
`;