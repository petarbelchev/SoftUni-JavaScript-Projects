import { createBook, loadBooks } from './dom.js';

document.getElementById('loadBooks').addEventListener('click', loadBooks);

document.getElementById('add-form').addEventListener('submit', createBook);