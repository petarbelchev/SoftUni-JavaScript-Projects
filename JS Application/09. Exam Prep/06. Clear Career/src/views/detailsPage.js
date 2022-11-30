import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { addApplication, deleteOffer, getAllApplications, hasUserApplication, getOfferById } from "../data/offers.js";


export async function detailsPage(ctx) {
    let offer = await getOfferById(ctx.params.id);
    let applications = await getAllApplications(offer._id);
    let canUserMakeApplication = false;

    if (ctx.userData && await hasUserApplication(offer._id, ctx.userData._id) == 0) {
        canUserMakeApplication = true;
    }    
        
    render(detailsPageTemp(offer, ctx, applications, canUserMakeApplication), ctx.contentContainer);
}

export async function onDelete(ctx) {
    await deleteOffer(ctx);
    ctx.page.redirect('/dashboard');
}

export async function onApply(ctx) {
    await addApplication(ctx.params.id, ctx);
    ctx.page.redirect(`/details/${ctx.params.id}`);
}

const detailsPageTemp = (offer, ctx, applications, canUserMakeApplication) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
                Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
                Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
                <div id="details-description">
                    <h4>Description</h4>
                    <span>${offer.description}</span>
                </div>
                <div id="details-requirements">
                    <h4>Requirements</h4>
                    <span>${offer.requirements}</span>
                </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>
    
            ${
                ctx.userData && ctx.userData._id == offer._ownerId ? 
                    html`
                        <!--Edit and Delete are only for creator-->
                        <div id="action-buttons">
                            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                            <a href="/delete/${offer._id}" id="delete-btn">Delete</a>
                        </div>
                    `
                : ctx.userData && ctx.userData._id != offer._ownerId && canUserMakeApplication ? 
                    html`
                        <!--Bonus - Only for logged-in users ( not authors )-->
                        <div id="action-buttons">
                            <a href="/apply/${offer._id}" id="apply-btn">Apply</a>
                        </div>
                    `
                : nothing
            }
        </div>
    </section>
`;