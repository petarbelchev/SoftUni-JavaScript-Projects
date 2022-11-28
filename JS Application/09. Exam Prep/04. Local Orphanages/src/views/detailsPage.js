import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { checkDonate, deleteMaterial, getDonationsCount, getMaterialById, makeDonation } from "../data/materials.js";


export async function detailsPage(ctx) {
    let material = await getMaterialById(ctx.params.id);
    let hasDonate = await checkDonate(ctx.params.id, ctx.userData._id) == 0 ? false : true;
    let donationsCount = await getDonationsCount(ctx.params.id);
    render(detailsPageTemp(material, ctx, hasDonate, donationsCount), ctx.contentContainer);
}

export async function onDelete(ctx) {
    if (confirm('You are going to delete this post! Are you sure?')){
        await deleteMaterial(ctx);
        ctx.page.redirect('/');
    }
}

export async function onDonate(ctx) {
    await makeDonation(ctx.params.id, ctx);
    ctx.page.redirect(`/details/${ctx.params.id}`);
}

const detailsPageTemp = (material, ctx, hasDonate, donationsCount) => html`
    <!-- Details Page -->
    <section id="details-page">
        <h1 class="title">Post Details</h1>
    
        <div id="container">
            <div id="details">
                <div class="image-wrapper">
                    <img src=${material.imageUrl} alt="Material Image" class="post-image">
                </div>
                <div class="info">
                    <h2 class="title post-title">${material.title}</h2>
                    <p class="post-description">Description: ${material.description}</p>
                    <p class="post-address">Address: ${material.address}</p>
                    <p class="post-number">Phone number: ${material.phone}</p>
                    <p class="donate-Item">Donate Materials: ${donationsCount}</p>
    
                    <!--Edit and Delete are only for creator-->
                    <div class="btns">
                        ${
                            ctx.userData && ctx.userData._id == material._ownerId ?
                                html`
                                    <a href="/edit/${material._id}" class="edit-btn btn">Edit</a>
                                    <a href="/delete/${material._id}" class="delete-btn btn">Delete</a>
                                `
                            : nothing
                        }

                        ${
                            ctx.userData && ctx.userData._id != material._ownerId && !hasDonate ?
                                html`
                                    <!--Bonus - Only for logged-in users ( not authors )-->
                                    <a href="/donate/${material._id}" class="donate-btn btn">Donate</a>                                
                                `
                            : nothing
                        }
    
                    </div>
    
                </div>
            </div>
        </div>
    </section>
`;