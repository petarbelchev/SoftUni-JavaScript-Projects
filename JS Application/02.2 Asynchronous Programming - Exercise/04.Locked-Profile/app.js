let counter = 0;
let main = document.getElementById('main');

function lockedProfile() {
    main.innerHTML = '';

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => {
            if (response.status !== 200) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            
            return response.json();
        })
        .then(data => {
            for (const key in data) {
                let divProfile = document.createElement('div');
                divProfile.className = 'profile';
                divProfile.innerHTML += getProfile(data[key], counter);
                let button = divProfile.querySelector('button');

                button.onclick = (event) => {
                    let checkBox = event.target.parentElement.getElementsByTagName('input')[1];

                    if (checkBox.checked == true) {
                        if (button.textContent == 'Show more') {
                            checkBox.parentElement.querySelector('div').style.display = 'block';
                            button.textContent = 'Hide it';
                        } else {
                            checkBox.parentElement.querySelector('div').style.display = 'none';
                            button.textContent = 'Show more';
                        }
                    }
                }

                main.appendChild(divProfile);
                counter++;
            }
        });
}

function getProfile(data, counter) {
    return `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${counter}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${counter}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${counter}Username" value="${data.username}" disabled readonly />
        <div id="user${counter}HiddenFields" style="display: none">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${counter}Email" value="${data.email}" disabled readonly />
            <label>Age:</label>
            <input type="text" name="user${counter}Age" value="${data.age}" disabled readonly />
        </div>
        <button>Show more</button>`;
}