import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { getAllGames } from "../data/games.js";


export async function allGamesPage(ctx) {
    let allGames = await getAllGames();
    render(allGamesPageTemp(allGames), ctx.contentContainer);
}

const allGamesPageTemp = (games) => html`
    <section id="catalog-page">
        <h1>All Games</h1>
        ${
            games.length > 0 
            ? html`${games.map(gameCardTemp)}`
            : html`<h3 class="no-articles">No articles yet</h3>`
        }
    </section>
`;

const gameCardTemp = (game) => html`
    <div class="allGames">
        <div class="allGames-info">
            <img src=${game.imageUrl}>
            <h6>${game.category}</h6>
            <h2>${game.title}</h2>
            <a href="/details/${game._id}" class="details-button">Details</a>
        </div>
    </div>
`;