import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { createGame } from "../data/games.js";
import { inputValidator } from "../utility.js";


export function createPage(ctx) {
    render(createPageTemp(onCreate), ctx.contentContainer);

    async function onCreate(e) {
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
            await createGame(data, ctx);
            ctx.page.redirect(`/`);
        } else {
            alert('All fields required!');
        }
    }
}

const createPageTemp = (callback) => html`
    <section id="create-page" class="auth">
        <form id="create" @submit=${callback}>
            <div class="container">
    
                <h1>Create Game</h1>
                <label for="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" placeholder="Enter game title...">
    
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter game category...">
    
                <label for="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">
    
                <label for="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">
    
                <label for="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input class="btn submit" type="submit" value="Create Game">
            </div>
        </form>
    </section>
`;