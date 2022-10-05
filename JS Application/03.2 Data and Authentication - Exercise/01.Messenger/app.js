function attachEvents() {
    let sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', sendMessage);
    let refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refreshMessages);
    let url = 'http://localhost:3030/jsonstore/messenger';

    function sendMessage() {
        let authorName = document.getElementsByTagName('input')[0];
        let messageText = document.getElementsByTagName('input')[1];

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                author: authorName.value,
                content: messageText.value
            })
        });

        authorName.value = '';
        messageText.value = '';
    }

    function refreshMessages() {
        fetch(url)
            .then(res => res.json())
            .then(messagesData => {
                let messagesField = document.getElementById('messages');
                messagesField.textContent = 'Loading...';
                let result = [];

                Object.values(messagesData).forEach(m => {
                    result.push(`${m.author}: ${m.content}`);
                });

                messagesField.textContent = result.join('\n');
            });
    }
}

attachEvents();



