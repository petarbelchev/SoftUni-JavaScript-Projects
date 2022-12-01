import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { editGameById, getGameById } from "../data/games.js";
import { inputValidator } from "../utility.js";


export async function onEdit(ctx) {
    let game = await getGameById(ctx.params.id);
    render(editPageTemp(game, onSubmit), ctx.contentContainer);

    async function onSubmit(e, game) {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = {
            title: formData.get('title'),
            category: formData.get('category'),
            maxLevel: formData.get('maxLevel'),
            imageUrl: formData.get('imageUrl'),
            summary: formData.get('summary')
        };

        if (inputValidator(data)) {
            await editGameById(game._id, data, ctx);
            ctx.page.redirect(`/details/${game._id}`);
        } else {
            alert('All fields required!');
        }
    }
}

const editPageTemp = (game, onSubmit) => html`
    <section id="edit-page" class="auth">
        <form id="edit" @submit=${(e) => onSubmit(e, game)}>
            <div class="container">
    
                <h1>Edit Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" .value=${game.title}>
    
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" .value=${game.category}>
    
                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel}>
    
                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl}>
    
                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary" .value=${game.summary}></textarea>
                <input class="btn submit" type="submit" value="Edit Game">
    
            </div>
        </form>
    </section>
`;