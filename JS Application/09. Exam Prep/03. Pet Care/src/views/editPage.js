import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editPetById, getPetById } from "../data/pets.js";
import { inputValidator } from "../utility.js";


export async function onEdit(ctx) {
    let pet = await getPetById(ctx.params.id);
    render(editPageTemp(pet, onSubmit), ctx.contentContainer);

    async function onSubmit(e, pet) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            name: formData.get('name'),
            breed: formData.get('breed'),
            age: formData.get('age'),
            weight: formData.get('weight'),
            image: formData.get('image')
        };

        if (inputValidator(data)) {
            await editPetById(pet._id, data, ctx);
            ctx.page.redirect(`/details/${pet._id}`);
        } else {
            alert('All fields required!');
        }
    }
}

const editPageTemp = (pet, onSubmit) => html`
    <!--Edit Page-->
    <section id="editPage">
        <form class="editForm" @submit=${(e) => onSubmit(e, pet)}>
            <img src="./images/editpage-dog.jpg">
            <div>
                <h2>Edit PetPal</h2>
                <div class="name">
                    <label for="name">Name:</label>
                    <input name="name" id="name" type="text" value=${pet.name}>
                </div>
                <div class="breed">
                    <label for="breed">Breed:</label>
                    <input name="breed" id="breed" type="text" value=${pet.breed}>
                </div>
                <div class="Age">
                    <label for="age">Age:</label>
                    <input name="age" id="age" type="text" value=${pet.age}>
                </div>
                <div class="weight">
                    <label for="weight">Weight:</label>
                    <input name="weight" id="weight" type="text" value=${pet.weight}>
                </div>
                <div class="image">
                    <label for="image">Image:</label>
                    <input name="image" id="image" type="text" value=${pet.image}>
                </div>
                <button class="btn" type="submit">Edit Pet</button>
            </div>
        </form>
    </section>
`;