function solve() {
    let stopId = "depot";
    let infoBox = document.getElementsByTagName('span')[0];
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`)
            .then(response => {
                if(response.status !== 200){
                    throw new Error();
                }
                return response.json();
            })
            .then(data => {
                infoBox.textContent = `Next stop ${data.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(() => {
                infoBox.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    function arrive() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`)
            .then(response => {
                if(response.status !== 200){
                    throw new Error();
                }
                return response.json();
            })
            .then(data => {
                infoBox.textContent = `Arriving at ${data.name}`;
                stopId = data.next;
                departBtn.disabled = false;
                arriveBtn.disabled = true;
            })
            .catch(() => {
                infoBox.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    return {
        depart,
        arrive
    };
}

let result = solve();