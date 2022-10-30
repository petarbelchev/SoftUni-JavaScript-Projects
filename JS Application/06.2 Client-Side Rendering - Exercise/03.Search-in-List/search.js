import { html, render } from "./node_modules/lit-html/lit-html.js";
import { classMap } from "./node_modules/lit-html/directives/class-map.js";
import { towns } from "./towns.js";

const townsDiv = document.getElementById('towns');
const textInputField = document.getElementById('searchText');
const resultField = document.getElementById('result');
let text;
let counter = 0;

const liTemplate = (town) => {
   const classes = { 'active': town.includes(text) };
   if (town.includes(text)) {
      counter++;
   }
   return html`<li class=${classMap(classes)}>${town}</li>`;
};

const ulTemplate = (townsLiElements) => html`<ul>${townsLiElements}</ul>`;

document.querySelector('button').addEventListener('click', search);

let currLiElements = towns.map(liTemplate);
render(ulTemplate(currLiElements), townsDiv);

function search() {
   counter = 0;
   text = textInputField.value;
   currLiElements = towns.map(liTemplate);

   render(ulTemplate(currLiElements), townsDiv);

   resultField.textContent = `${counter} matches found`;
}
