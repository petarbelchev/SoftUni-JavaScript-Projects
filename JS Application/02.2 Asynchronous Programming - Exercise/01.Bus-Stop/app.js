function getInfo() {
    let inputField = document.getElementById('stopId');
    let stopId = inputField.value;
    inputField.value = '';

    let stopNameField = document.getElementById('stopName');
    let busesList = document.getElementById('buses');
    busesList.replaceChildren();

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then(response => {
            if (stopId === '' || response.status != 200) {
                throw new Error();
            }
            return response.json();
        })
        .then(data => {
            stopNameField.textContent = data.name;
            for (let [busId, time] of Object.entries(data.buses)) {
                let li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesList.appendChild(li);
            }
        })
        .catch(() => stopNameField.textContent = "Error");
}