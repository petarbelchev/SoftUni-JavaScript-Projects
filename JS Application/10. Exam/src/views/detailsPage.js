import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { addLike, checkForLike, deleteAlbum, getAlbumById, getAllLikes } from "../data/albums.js";


export async function detailsPage(ctx) {
    let album = await getAlbumById(ctx.params.id);
    let albumLikes = await getAllLikes(album._id);
    let isCreator = ctx.userData && ctx.userData._id == album._ownerId;
    let isUser = ctx.userData && !isCreator;
    let hasLiked = isUser && await checkForLike(album._id, ctx.userData._id) != 0;

    render(detailsPageTemp(album, albumLikes, isCreator, isUser, hasLiked), ctx.contentContainer);
}

export async function onDelete(ctx) {
    if(confirm('You are going to delete this album! Are you sure?')){
        await deleteAlbum(ctx);
        ctx.page.redirect('/dashboard');
    }
}

export async function onLike(ctx) {
    await addLike(ctx.params.id, ctx);
    ctx.page.redirect(`/details/${ctx.params.id}`);
}

const detailsPageTemp = (album, albumLikes, isCreator, isUser, hasLiked) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src=${album.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
                <p>
                    <strong>Album name:</strong><span id="details-album">${album.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${albumLikes}</span></div>
    
            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
                ${
                    isCreator ?
                        html`
                            <a href="/edit/${album._id}" id="edit-btn">Edit</a>
                            <a href="/delete/${album._id}" id="delete-btn">Delete</a>
                        `
                    : isUser && !hasLiked ?
                        html`<a href="/like/${album._id}" id="like-btn">Like</a>`
                    : nothing
                }
            </div>
        </div>
    </section>
`;