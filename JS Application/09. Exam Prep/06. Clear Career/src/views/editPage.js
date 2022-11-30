import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editOfferById, getOfferById } from "../data/offers.js";
import { inputValidator } from "../utility.js";


export async function onEdit(ctx) {
    let offer = await getOfferById(ctx.params.id);
    render(editPageTemp(offer, onSubmit), ctx.contentContainer);

    async function onSubmit(e, offer) {
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
            await editOfferById(offer._id, data, ctx);
            ctx.page.redirect(`/details/${offer._id}`);
        } else {
            alert('All fields required!');
        }
    }
}

const editPageTemp = (offer, onSubmit) => html`
    <!-- Edit Page (Only for logged-in users) -->
    <section id="edit">
        <div class="form">
            <h2>Edit Offer</h2>
            <form class="edit-form" @submit=${(e) => onSubmit(e, offer)}>
                <input type="text" name="title" id="job-title" placeholder="Title" .value=${offer.title}/>
                <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${offer.imageUrl}/>
                <input type="text" name="category" id="job-category" placeholder="Category" .value=${offer.category}/>
                <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" .value=${offer.description}></textarea>
                <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                    cols="50" .value=${offer.requirements}></textarea>
                <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${offer.salary}/>
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>
`;