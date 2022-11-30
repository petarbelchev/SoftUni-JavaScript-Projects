import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createOffer } from "../data/offers.js";
import { inputValidator } from "../utility.js";


export function createPage(ctx) {
    render(createPageTemp(onCreate), ctx.contentContainer);

    async function onCreate(e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            title: formData.get('title'),
            imageUrl: formData.get('imageUrl'),
            category: formData.get('category'),
            description: formData.get('description'),
            requirements: formData.get('requirements'),
            salary: formData.get('salary')
        };

        if (inputValidator(data)) {
            await createOffer(data, ctx);
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
            <h2>Create Offer</h2>
            <form class="create-form" @submit=${callback}>
                <input type="text" name="title" id="job-title" placeholder="Title" />
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" />
                <input type="text" name="category" id="job-category" placeholder="Category" />
                <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50"></textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                    cols="50"></textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;