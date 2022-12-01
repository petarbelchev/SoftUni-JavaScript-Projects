import { html, nothing, render } from "../../node_modules/lit-html/lit-html.js";
import { createComment, deleteGame, getAllComments, getGameById } from "../data/games.js";


export async function detailsPage(ctx) {
    let game = await getGameById(ctx.params.id);
    let comments = await getAllComments(game._id);
    render(detailsPageTemp(game, comments, ctx, ), ctx.contentContainer);
}

export async function onDelete(ctx) {
    if (confirm('You are going to delete game! Are you sure?')) {
        await deleteGame(ctx);
        ctx.page.redirect('/allgames');
    }
}

async function onComment(e, game, ctx) {
    e.preventDefault();
    let formData = new FormData(e.target);
    await createComment(game._id, formData.get('comment'), ctx);
    e.target.reset();
    ctx.page.redirect(`/details/${game._id}`);
}

const detailsPageTemp = (game, comments, ctx) => html`
    <section id="game-details">
        <h1>Game Details</h1>
        <div class="info-section">
    
            <div class="game-header">
                <img class="game-img" src=${game.imageUrl}/>
                <h1>${game.title}</h1>
                <span class="levels">MaxLevel: 4</span>
                <p class="type">${game.category}</p>
            </div>
    
            <p class="text">${game.summary}</p>
    
            <div class="details-comments">
                <h2>Comments:</h2>
                ${
                    comments.length > 0 
                    ? html`
                        <ul>
                            ${comments.map(commentCardTemp)}
                        </ul>
                    `
                    : html`<p class="no-comment">No comments.</p>`
                }
                
            </div>
    
            ${
                ctx.userData && ctx.userData._id == game._ownerId ?
                    html`
                        <div class="buttons">
                            <a href="/edit/${game._id}" class="button">Edit</a>
                            <a href="/delete/${game._id}" class="button">Delete</a>
                        </div>
                    `
                : nothing
            }
        </div>
    
        ${
            ctx.userData && ctx.userData._id != game._ownerId ?
                html`
                    <article class="create-comment">
                        <label>Add new comment:</label>
                        <form class="form" @submit=${(e) => onComment(e, game, ctx)}>
                            <textarea name="comment" placeholder="Comment......"></textarea>
                            <input class="btn submit" type="submit" value="Add Comment">
                        </form>
                    </article>
                `
            : nothing
        }
    
    </section>
`;

const commentCardTemp = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>
`