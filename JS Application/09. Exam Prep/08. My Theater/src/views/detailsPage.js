import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { addLike, checkForLike, deleteEvent, getAllLikes, getEventById } from "../data/theaters.js";


export async function detailsPage(ctx) {
    let event = await getEventById(ctx.params.id);
    let likes = await getAllLikes(event._id);
    let isUser = ctx.userData && ctx.userData._id != event._ownerId;
    let canLike = ctx.userData && await checkForLike(event._id, ctx.userData._id) == 0;
    let isAuthor = ctx.userData && ctx.userData._id == event._ownerId;
    render(detailsPageTemp(event, likes, isAuthor, isUser, canLike), ctx.contentContainer);
}

export async function onDelete(ctx) {
    if(confirm('You are going to delete this event! Are you sure?')){
        await deleteEvent(ctx);
        ctx.page.redirect('/profile');
    }
}

export async function onLike(ctx){
    await addLike(ctx.params.id, ctx);
    ctx.page.redirect(`/details/${ctx.params.id}`);
}

const detailsPageTemp = (event, likes, isAuthor, isUser, canLike) => html`
    <!--Details Page-->
    <section id="detailsPage">
        <div id="detailsBox">
            <div class="detailsInfo">
                <h1>Title: ${event.title}</h1>
                <div>
                    <img src=${event.imageUrl}/>
                </div>
            </div>
    
            <div class="details">
                <h3>Theater Description</h3>
                <p>${event.description}</p>
                <h4>Date: ${event.date}</h4>
                <h4>Author: ${event.author}</h4>
                <div class="buttons">
                    ${
                        isAuthor
                        ? html`
                            <a class="btn-delete" href="/delete/${event._id}">Delete</a>
                            <a class="btn-edit" href="/edit/${event._id}">Edit</a>
                        `
                        : isUser && canLike
                        ? html`
                            <a class="btn-like" href="/like/${event._id}">Like</a>
                        `
                        : nothing
                    }
                    
                </div>
                <p class="likes">Likes: ${likes}</p>
            </div>
        </div>
    </section>
`;