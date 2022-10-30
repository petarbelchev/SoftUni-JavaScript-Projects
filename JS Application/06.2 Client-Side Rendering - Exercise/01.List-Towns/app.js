import { html, render } from './node_modules/lit-html/lit-html.js';


const listTemplate = (towns) => {
    let liArr = towns.map(t => html`<li>${t}</li>`);
    return html`<ul>${liArr}</ul>`;
};

const townsDiv = document.getElementById('root');
const form = document.querySelector('form');
form.addEventListener('submit', renderTowns);

function renderTowns(ev) {
    ev.preventDefault();
    let formData = new FormData(form);
    let towns = formData.get('towns').split(', ');
    
    console.log(towns);
    render(listTemplate(towns), townsDiv);
}