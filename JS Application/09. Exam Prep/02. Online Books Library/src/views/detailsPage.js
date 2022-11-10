import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { checkForLike, deleteBook, getAllLikesOfBook, getBookById, likeBook } from "../data/books.js";


export async function detailsPage(ctx) {
    let book = await getBookById(ctx.params.id);
    let likes = await getAllLikesOfBook(ctx.params.id);
    let isUserLikedTheBook = true;
    if (ctx.userData) {
        isUserLikedTheBook = await checkForLike(ctx.params.id, ctx.userData._id);
    }
    render(detailsPageTemp(book, likes, isUserLikedTheBook, ctx), ctx.contentContainer);
}

export async function onDelete(ctx) {
    await deleteBook(ctx);
    ctx.page.redirect('/');
}

export async function onLike(ctx) {
    let response = await likeBook(ctx.params.id, ctx);
    ctx.page.redirect(`/details/${response.bookId}`);
}

const detailsPageTemp = (book, likes, isUserLikedTheBook, ctx) => html`
    <!-- Details Page ( for Guests and Users ) -->
    <section id="details-page" class="details">
        <div class="book-information">
            <h3>${book.title}</h3>
            <p class="type">Type: ${book.type}</p>
            <p class="img"><img src=${book.imageUrl}></p>
            <div class="actions">
                <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                ${
                    ctx.userData?._id == book._ownerId
                    ? html`
                        <a class="button" href="/edit/${book._id}">Edit</a>
                        <a class="button" href="/delete/${book._id}">Delete</a>                    
                    `
                    : nothing
                }
    
                <!-- Bonus -->
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                ${
                    ctx.userData != undefined && ctx.userData._id != book._ownerId && !isUserLikedTheBook
                    ? html`<a class="button" href="/like/${book._id}">Like</a>`
                    : nothing
                }                
                
    
                <!-- ( for Guests and Users )  -->
                <div class="likes">
                    <img class="hearts" src="/images/heart.png">
                    <span id="total-likes">Likes: ${likes}</span>
                </div>
                <!-- Bonus -->
            </div>
        </div>
        <div class="book-description">
            <h3>Description:</h3>
            <p>${book.description}</p>
        </div>
    </section>
`;