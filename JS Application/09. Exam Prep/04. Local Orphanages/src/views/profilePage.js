import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getMyMaterials } from "../data/materials.js";


export async function profilePage(ctx) {
    let myMaterials = await getMyMaterials(ctx);
    render(profilePageTemp(myMaterials), ctx.contentContainer);
}

const profilePageTemp = (materials) => html`
    <!-- My Posts -->
    <section id="my-posts-page">
        <h1 class="title">My Posts</h1>
    
        <!-- Display a div with information about every post (if any)-->
        ${
            materials.length > 0 ?
                html`
                    <div class="my-posts">    
                        ${materials.map(materialCard)}
                    </div>
                `
            //<!-- Display an h1 if there are no posts -->
            : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
        }
    </section>
`;

const materialCard = (material) => html`
    <div class="post">
        <h2 class="post-title">${material.title}</h2>
        <img class="post-image" src=${material.imageUrl} alt="Material Image">
        <div class="btn-wrapper">
            <a href="/details/${material._id}" class="details-btn btn">Details</a>
        </div>
    </div>
`;