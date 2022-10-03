function attachEvents() {
    let submitBtn = document.getElementById('submit');
    let locationField = document.getElementById('location');
    let divCurrent = document.getElementById('current');
    let divUpcoming = document.getElementById('upcoming');
    let forecastDiv = document.getElementById('forecast');
    let divCurrentInit = divCurrent.innerHTML;
    let divUpcomingInit = divUpcoming.innerHTML;

    submitBtn.addEventListener('click', function () {
        forecastDiv.style.display = 'block';
        divCurrent.innerHTML = divCurrentInit;
        divUpcoming.innerHTML = divUpcomingInit;

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(response => {
                if (response.status !== 200) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                } else if (locationField.value === '') {
                    throw new Error(`Error: Enter location!`);
                }

                return response.json();
            })
            .then(data => {
                let location = data.find(l => l.name === locationField.value);

                if (location === undefined) {
                    throw new Error(`Error: The location does not exist!`);
                }

                fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(`Error: ${response.status} ${response.statusText}`);
                        }

                        return response.json();
                    })
                    .then(data => {
                        divCurrent.appendChild(makeElement('span', getConditionSymbol(data.forecast.condition), 'condition symbol'));
                        let conditionSpan = makeElement('span', undefined, 'condition');
                        conditionSpan.appendChild(makeElement('span', data.name, 'forecast-data'));
                        conditionSpan.appendChild(makeElement('span', `${data.forecast.low}&#176/${data.forecast.high}&#176`, 'forecast-data'));
                        conditionSpan.appendChild(makeElement('span', data.forecast.condition, 'forecast-data'));
                        divCurrent.appendChild(conditionSpan);
                    });

                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error(`Error: ${response.status} ${response.statusText}`);
                        }

                        return response.json();
                    })
                    .then(data => {
                        let divForecastInfo = makeElement('div', undefined, 'forecast-info');
                        divUpcoming.appendChild(divForecastInfo);

                        for (let index = 0; index < data.forecast.length; index++) {
                            let upcoming = makeElement('span', undefined, 'upcoming');
                            upcoming.appendChild(makeElement('span', getConditionSymbol(data.forecast[index].condition), 'symbol'));
                            upcoming.appendChild(makeElement('span', `${data.forecast[index].low}&#176/${data.forecast[index].high}&#176`, 'forecast-data'));
                            upcoming.appendChild(makeElement('span', data.forecast[index].condition, 'forecast-data'));
                            divForecastInfo.appendChild(upcoming);
                        }
                    })
            })
            .catch((error) => {
                divCurrent.appendChild(makeElement('div', error.message));
            });
    })

    function makeElement(type, context, className) {
        let element = document.createElement(type);
        if (context !== undefined) element.innerHTML = context;
        if (className !== undefined) element.className = className;
        return element;
    }

    function getConditionSymbol(condition) {
        if (condition === 'Sunny') return '&#x2600';
        else if (condition === 'Partly sunny') return '&#x26C5';
        else if (condition === 'Overcast') return '&#x2601';
        else if (condition === 'Rain') return '&#x2614';
    }
}

attachEvents();