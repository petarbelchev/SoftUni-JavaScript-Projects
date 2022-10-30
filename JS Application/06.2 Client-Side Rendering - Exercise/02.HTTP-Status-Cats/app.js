import { cats } from "./catSeeder.js";
import { html, render } from "./node_modules/lit-html/lit-html.js"


const liTemplate = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${clickHandler}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>${`Status Code: ${cat.statusCode}`}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;

const ulTemplate = (cats) => html`<ul>${cats}</ul>`;

const catsSecation = document.getElementById('allCats');

render(ulTemplate(cats.map(liTemplate)), catsSecation)

function clickHandler(ev) {
    let btn = ev.target;
    let div = btn.parentElement.querySelector('div');

    if (btn.textContent == 'Show status code') {
        btn.textContent = 'Hide status code';
        div.style.display = 'block';
    } else {
        btn.textContent = 'Show status code';
        div.style.display = 'none';
    }
}