import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getMyMemes } from "../data/memes.js";


export async function profilePage(ctx) {
    let myMemes = await getMyMemes(ctx);
    render(profilePageTemp(myMemes, ctx.userData), ctx.contentContainer);
}

const profilePageTemp = (memes, user) => html`
    <!-- Profile Page ( Only for logged users ) -->
    <section id="user-profile-page" class="user-profile">

        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src=${user.gender == 'female' ? "/images/female.png" : "/images/male.png"}>
            <div class="user-content">
                <p>Username: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>My memes count: ${memes.length}</p>
            </div>
        </article>

        <h1 id="user-listings-title">User Memes</h1>

        <div class="user-meme-listings">
            <!-- Display : All created memes by this user (If any) -->
            ${
                memes.length > 0
                ? html`${memes.map(memeCard)}`
                //<!-- Display : If user doesn't have own memes  -->
                : html`<p class="no-memes">No memes in database.</p>`
            }
        </div>

    </section>
`;

const memeCard = (meme) => html`
    <div class="user-meme">
        <p class="user-meme-title">${meme.title}</p>
        <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
        <a class="button" href="/details/${meme._id}">Details</a>
    </div>
`;