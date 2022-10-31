import { html, render } from './node_modules/lit-html/lit-html.js';


const optionTemplate = (option) => html`
    <option value=${option._id}>${option.text}</option>
`;

const menu = document.getElementById('menu');
const form = document.querySelector('form');
form.addEventListener('submit', addOption);

loadOptions();

async function loadOptions() {
    let options = await request();
    render(options.map(optionTemplate), menu);
}

async function request(method = 'get', data) {
    const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
    let options = {
        method,
        headers: {}
    };
    if (data !== undefined) {
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data)
    }

    try {
        let response = await fetch(url, options);
        let data = await response.json();
        if (response.ok != true) {
            throw new Error(data.message);
        }
        return Object.values(data);
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

async function addOption(ev) {
    ev.preventDefault();
    let formData = new FormData(form);
    let data = { text: formData.get('itemText') };
    if (data != '') {
        await request('post', data);
        loadOptions();
        form.reset();
    }
}