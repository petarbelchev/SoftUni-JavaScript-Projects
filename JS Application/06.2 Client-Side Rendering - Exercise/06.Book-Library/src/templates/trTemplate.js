import { html } from "../../node_modules/lit-html/lit-html.js";
import { onEdit, onDelete } from "../dom.js";

export const trTemplate = (book) => html`
    <tr id=${book[0]}>
        <td>${book[1].title}</td>
        <td>${book[1].author}</td>
        <td>
            <button @click=${() => onEdit(book[0])}>Edit</button>
            <button @click=${() => onDelete(book[0])}>Delete</button>
        </td>
    </tr>
`;