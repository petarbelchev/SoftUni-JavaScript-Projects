import { html, render } from './node_modules/lit-html/lit-html.js';
import { classMap } from './node_modules/lit-html/directives/class-map.js';

const searchField = document.getElementById('searchField');
const tbody = document.querySelector('tbody');
let searchValue;

const trTemplate = (student) => {
   let classes = { 'select': Object.values(student).some(v => v.toLowerCase().includes(searchValue)) };

   return html`
      <tr class=${classMap(classes)}>
         <td>${`${student.firstName} ${student.lastName}`}</td>
         <td>${student.email}</td>
         <td>${student.course}</td>
      </tr>
   `;
}

document.querySelector('#searchBtn').addEventListener('click', onClick);

let studetsData = await getStudentsData();
render(studetsData.map(trTemplate), tbody);


async function getStudentsData() {
   let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   let data = await response.json();
   if (response.ok != true) {
      throw new Error(data.message);
   }
   return Object.values(data);
}


function onClick() {
   searchValue = searchField.value.toLowerCase();
   searchField.value = '';
   render(studetsData.map(trTemplate), tbody);
}