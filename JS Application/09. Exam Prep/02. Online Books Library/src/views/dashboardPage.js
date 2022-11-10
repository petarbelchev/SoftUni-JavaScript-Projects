import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllBooks } from "../data/books.js";


export async function dashboardPage(ctx) {
    let books = await getAllBooks();
    render(dashboardPageTemp(books), ctx.contentContainer);
}

const dashboardPageTemp = (books) => html`
    <!-- Dashboard Page ( for Guests and Users ) -->
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        <!-- Display ul: with list-items for All books (If any) -->
        ${books.length > 0 
            ? html`
                <ul class="other-books-list">
                    ${books.map(bookCardTemp)}
                </ul>
            `
            //<!-- Display paragraph: If there are no books in the database -->
            : html`
                <p class="no-books"> No books in database!</p>
            
            `
        }
    </section>
`;

const bookCardTemp = (book) => html`
    <li class="otherBooks">
        <h3>${book.title}</h3>
        <p>Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <a class="button" href="/details/${book._id}">Details</a>
    </li>
`;