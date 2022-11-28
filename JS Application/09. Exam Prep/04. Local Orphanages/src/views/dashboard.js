import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllMaterials } from "../data/materials.js";


export async function dashboardPage(ctx) {
    let allMaterials = await getAllMaterials();
    render(dashboardPageTemp(allMaterials), ctx.contentContainer);
}

const dashboardPageTemp = (materials) => html`
    <!-- Dashboard -->
    <section id="dashboard-page">
        <h1 class="title">All Posts</h1>
        <!-- Display a div with information about every post (if any)-->
        ${
            materials.length > 0 ?
                html`
                    ${materials.map(materialCardTemp)}
                `
            //<!-- Display an h1 if there are no posts -->
            : html`<h1 class="title no-posts-title">No posts yet!</h1>`
        }
    </section>
`;

const materialCardTemp = (material) => html`
    <div class="all-posts">
        <div class="post">
            <h2 class="post-title">${material.title}</h2>
            <img class="post-image" src=${material.imageUrl} alt="Material Image">
            <div class="btn-wrapper">
                <a href="/details/${material._id}" class="details-btn btn">Details</a>
            </div>
        </div>
    </div>
`;