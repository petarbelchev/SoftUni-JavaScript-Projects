import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getMyBooks } from "../data/books.js";


export async function myBooksPage(ctx) {
    let myBooks = await getMyBooks(ctx);
    render(myBooksPageTemp(myBooks, ctx.userData), ctx.contentContainer);
}

const myBooksPageTemp = (books, user) => html`
    <!-- My Books Page ( Only for logged-in users ) -->
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        <!-- Display ul: with list-items for every user's books (if any) -->
        ${
            books.length > 0
            ? html`
                <ul class="my-books-list">
                    ${books.map(bookCard)}    
                </ul>
            `
            //<!-- Display paragraph: If the user doesn't have his own books  -->
            : html`<p class="no-books">No books in database!</p>`
        }
    </section>
`;

const bookCard = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;