function solve() {
    let recipientNameField = document.getElementById('recipientName');
    let titleField = document.getElementById('title');
    let messageField = document.getElementById('message');
    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    let listOfMails = document.getElementById('list');
    let listOfSentMails = document.querySelector('article ul');
    let listDeletedMails = document.querySelector('.delete-list');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (recipientNameField.value === '' &&
            titleField.value === '' &&
            messageField.value === '') {

            return;
        }

        let liElement = document.createElement('li');
        let title = titleField.value;
        let recipientName = recipientNameField.value;
        let message = messageField.value;

        let liElementHtml = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recipientName}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>
        `

        liElement.innerHTML = liElementHtml;

        liElement.querySelector('#send').addEventListener('click', (e) => {
            liElement.remove();
            sendMessage(e, title, recipientName);
        });

        liElement.querySelector('#delete').addEventListener('click', (e) => {
            liElement.remove();
            deleteMessage(recipientName, title);
        })

        listOfMails.appendChild(liElement);

        clearFields();
    });

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clearFields();
    });

    function clearFields() {
        recipientNameField.value = '';
        titleField.value = '';
        messageField.value = '';
    }

    function sendMessage(e, title, recipientName) {
        let liElementHtml = `
        <span>To: ${recipientName}</span>
        <span>Title: ${title}</span>
        <div class="btn">
            <button type="submit" class="delete">Delete</button>
        </div>
        `;

        let liElement = document.createElement('li');
        liElement.innerHTML = liElementHtml;
        listOfSentMails.appendChild(liElement);

        liElement.querySelector('button').addEventListener('click', () => {
            liElement.remove();
            deleteMessage(recipientName, title);
        });
    }

    function deleteMessage(recipientName, title) {
        let liElementHtml = `
        <span>To: ${recipientName}</span>
        <span>Title: ${title}</span>
        `;

        let liElement = document.createElement('li');
        liElement.innerHTML = liElementHtml;
        listDeletedMails.appendChild(liElement);
    }
}

solve()