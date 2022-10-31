import { trTemplate } from "./templates/trTemplate.js";
import { del, get, post, put } from "./api.js";
import { render } from "../node_modules/lit-html/lit-html.js";


const tbody = document.querySelector('tbody');
const addForm = document.getElementById('add-form');
const editForm = document.getElementById('edit-form');
editForm.addEventListener('submit', updateBook);

export async function loadBooks() {
    let booksData = Object.entries(await get());
    render(booksData.map(trTemplate), tbody);
}

export async function createBook(ev) {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    let data = {
        author: formData.get('author'),
        title: formData.get('title')
    };
    if (data.author != '' && data.title != '') {
        await post(data);
        ev.target.reset();
        loadBooks();
    } else {
        alert('All fields required!');
    }
}

async function updateBook(ev) {
    ev.preventDefault();
    let formData = new FormData(ev.target);
    let data = {
        author: formData.get('author'),
        title: formData.get('title')
    };
    let id = formData.get('id');
    if (data.author != '' && data.title != '') {
        await put(data, id);
        addForm.style.display = '';
        editForm.style.display = 'none';
        ev.target.reset();
        loadBooks();
    } else {
        alert('All fields required!');
    }
}

export async function onEdit(id) {
    addForm.style.display = 'none';
    editForm.style.display = '';
    let bookData = await get(id);
    editForm.querySelector('input[name="id"]').value = id;
    editForm.querySelector('input[name="title"]').value = bookData.title;
    editForm.querySelector('input[name="author"]').value = bookData.author;
}

export async function onDelete(id) {
    await del(id);
    addForm.reset();
    editForm.reset();
    addForm.style.display = '';
    editForm.style.display = 'none';
    loadBooks();
}