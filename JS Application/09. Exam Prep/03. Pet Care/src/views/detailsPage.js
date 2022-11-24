import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { checkDonation, deletePet, donate, getDonations, getPetById } from "../data/pets.js";


export async function detailsPage(ctx) {
    let pet = await getPetById(ctx.params.id);
    let donations = await getDonations(pet._id);
    let hasDonate = true;
    if(ctx.userData){
        let response = await checkDonation(pet._id, ctx.userData._id);
        response == 0 ? hasDonate = false : nothing;
    }
    render(detailsPageTemp(pet, donations, hasDonate, ctx), ctx.contentContainer);
}

export async function onDelete(ctx) {
    await deletePet(ctx);
    ctx.page.redirect('/');
}

export async function onDonate(ctx) {
    let petId = ctx.params.id;
    let data = { petId };
    await donate(data, ctx);
    ctx.page.redirect(`/details/${petId}`);
}

const detailsPageTemp = (pet, donations, hasDonate, ctx) => html`
    <!--Details Page-->
    <section id="detailsPage">
        <div class="details">
            <div class="animalPic">
                <img src=${pet.image}>
            </div>
            <div>
                <div class="animalInfo">
                    <h1>Name: ${pet.name}</h1>
                    <h3>Breed: ${pet.breed}</h3>
                    <h4>Age: ${pet.age}</h4>
                    <h4>Weight: ${pet.weight}</h4>
                    <h4 class="donation">Donation: ${donations * 100}$</h4>
                </div>
                <!-- if there is no registered user, do not display div-->
                ${
                    ctx.userData?._id == pet._ownerId ?
                        html`
                            <div class="actionBtn">
                                <!-- Only for registered user and creator of the pets-->
                                <a href="/edit/${pet._id}" class="edit">Edit</a>
                                <a href="/delete/${pet._id}" class="remove">Delete</a>
                            </div>
                        `
                    : ctx.userData != undefined && ctx.userData._id !== pet._ownerId && hasDonate == false ?
                        html`
                            <!--(Bonus Part) Only for no creator and user-->
                            <div class="actionBtn">
                                <a href="/donate/${pet._id}" class="donate">Donate</a>
                            </div>
                        `
                    : nothing
                }
            </div>
        </div>
    </section>
`;