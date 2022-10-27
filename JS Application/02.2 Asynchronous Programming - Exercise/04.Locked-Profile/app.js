let counter = 1;
let main = document.getElementById('main');

function lockedProfile() {

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(response => response.json())
        .then(persons => {
            Object.values(persons).forEach(person => {
                let divProfile = document.createElement('div');
                divProfile.className = 'profile';
                divProfile.innerHTML += getProfile(person, counter);
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
            })
        });
}

function getProfile(person, counter) {
    return `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user${counter}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${counter}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${counter}Username" value="${person.username}" disabled readonly />
        <div id="user${counter}HiddenFields" style="display: none">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${counter}Email" value="${person.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user${counter}Age" value="${person.age}" disabled readonly />
        </div>
        <button>Show more</button>`;
}