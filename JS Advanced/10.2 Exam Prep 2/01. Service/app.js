window.addEventListener('load', solve);

function solve() {
    //Getting the information from the repair form
    document.querySelector('button').addEventListener('click', (e) => {
        e.preventDefault();
        const typeOfProduct = document.getElementById('type-product');
        const description = document.getElementById('description');
        const clientName = document.getElementById('client-name');
        const clientPhone = document.getElementById('client-phone');

        if (description.value !== '' && clientName.value !== '' && clientPhone.value !== '') {
            moveToReceivedOrders(typeOfProduct.value, description.value, clientName.value, clientPhone.value);
            typeOfProduct.value = 'Computer';
            description.value = '';
            clientName.value = '';
            clientPhone.value = '';
        }
    })

    //Move the information to Received orders
    function moveToReceivedOrders(typeOfProduct, description, clientName, clientPhone) {
        const div = makeElement('div', undefined, 'container');
        div.appendChild(makeElement('h2', `Product type for repair: ${typeOfProduct}`));
        div.appendChild(makeElement('h3', `Client information: ${clientName}, ${clientPhone}`));
        div.appendChild(makeElement('h4', `Description of the problem: ${description}`));
        const startBtn = makeElement('button', 'Start repair', 'start-btn');
        startBtn.addEventListener('click', (e) => {
            e.target.disabled = true;
            finishBtn.disabled = false;
        })
        const finishBtn = makeElement('button', 'Finish repair', 'finish-btn');
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', (e) => {
            while (div.querySelector('button')) {
                div.querySelector('button').remove();
            }
            document.getElementById('completed-orders').appendChild(div);
        })
        div.appendChild(startBtn);
        div.appendChild(finishBtn);
        document.getElementById('received-orders').appendChild(div);
    }

    //Function for making DOM elements
    function makeElement(type, content, className) {
        const element = document.createElement(type);
        if (content) element.textContent = content;
        if (className) element.className = className;
        return element;
    }

    document.querySelector('#completed-orders button').addEventListener('click', () => {
        let divEleements = document.querySelector('#completed-orders div');
        while (divEleements) {
            divEleements.remove();
            divEleements = document.querySelector('#completed-orders div');
        }
    })
}