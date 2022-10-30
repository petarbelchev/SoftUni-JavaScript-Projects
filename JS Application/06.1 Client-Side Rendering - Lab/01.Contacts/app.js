import { contacts } from "./contacts.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

const contactsDiv = document.getElementById('contacts');

const contactTemplate = (contactData) => html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${contactData.name}</h2>
            <button class="detailsBtn" @click=${clickHandler}>Details</button>
            <div class="details" id="1">
                <p>Phone number: ${contactData.phoneNumber}</p>
                <p>Email: ${contactData.email}</p>
            </div>
        </div>
    </div>
`;

render(contacts.map(contactTemplate), contactsDiv);

function clickHandler(ev) {
    const div = ev.target.parentElement.querySelector('div');
    console.log(div)
    if (div.className == 'details') {
        div.className = '';
    } else {
        div.className = 'details';
    }
}