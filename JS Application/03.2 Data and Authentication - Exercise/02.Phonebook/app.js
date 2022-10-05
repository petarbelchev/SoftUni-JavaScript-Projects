function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadEntries);
    document.getElementById('btnCreate').addEventListener('click', createEntry);

    function loadEntries() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let ul = document.getElementById('phonebook');
                ul.innerHTML = '';

                Object.values(data).forEach(entry => {
                    let li = document.createElement('li');
                    li.textContent = `${entry.person}: ${entry.phone}`;
                    li.id = entry._id;
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.className = 'button';
                    deleteBtn.addEventListener('click', deleteEntry);
                    li.appendChild(deleteBtn);
                    ul.appendChild(li);
                });
            });
    }

    function createEntry() {
        let personField = document.getElementById('person');
        let phoneField = document.getElementById('phone');

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                person: personField.value,
                phone: phoneField.value
            })
        });

        personField.value = '';
        phoneField.value = '';

        loadBtn.click();
    }

    function deleteEntry(e) {
        let entry = e.target.parentElement;

        fetch(url + `/${entry.id}`, { method: 'DELETE' })
            .then(res => {
                if (res.status === 200) {
                    loadBtn.click();
                }
            });
    }
}

attachEvents();