import { html } from "../../node_modules/lit-html/lit-html.js";

export const editFormTemplate = (bookData) => html`
    <form id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" value=${bookData[1].title}>
        <label>AUTHOR</label>
        <input type="text" name="author" value=${bookData[1].author}>
        <input type="submit" value="Save" @submit=${}>
    </form>
`;