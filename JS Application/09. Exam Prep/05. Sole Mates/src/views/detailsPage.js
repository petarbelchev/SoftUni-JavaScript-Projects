import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { deleteShoes, getShoesById } from "../data/shoes.js";


export async function detailsPage(ctx) {
    let shoes = await getShoesById(ctx.params.id);
    render(detailsPageTemp(shoes, ctx), ctx.contentContainer);
}

export async function onDelete(ctx) {
    if (confirm('You are going to delete shoes! Are you sure?')) {
        await deleteShoes(ctx);
        ctx.page.redirect('/dashboard');
    }
}

const detailsPageTemp = (shoes, ctx) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
                <img src=${shoes.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>Brand: <span id="details-brand">${shoes.brand}</span></p>
                <p>
                    Model: <span id="details-model">${shoes.model}</span>
                </p>
                <p>Release date: <span id="details-release">${shoes.release}</span></p>
                <p>Designer: <span id="details-designer">${shoes.designer}</span></p>
                <p>Value: <span id="details-value">${shoes.value}</span></p>
            </div>
    
            <!--Edit and Delete are only for creator-->
            ${
                ctx.userData && ctx.userData._id == shoes._ownerId ?
                    html`
                        <div id="action-buttons">
                            <a href="/edit/${shoes._id}" id="edit-btn">Edit</a>
                            <a href="/delete/${shoes._id}" id="delete-btn">Delete</a>
                        </div>
                    `
                : nothing
            }
        </div>
    </section>
`;