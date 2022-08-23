function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', convert);
    document.getElementById('hoursBtn').addEventListener('click', convert);
    document.getElementById('minutesBtn').addEventListener('click', convert);
    document.getElementById('secondsBtn').addEventListener('click', convert);

    function convert(e) {
        let daysField = document.getElementById('days');
        let hoursField = document.getElementById('hours');
        let minutesField = document.getElementById('minutes');
        let secondsField = document.getElementById('seconds');

        if (e.target.id == 'daysBtn') {
            hoursField.value = daysField.value * 24;
            minutesField.value = hoursField.value * 60;
            secondsField.value = minutesField.value * 60;
        } else if (e.target.id == 'hoursBtn') {
            daysField.value = hoursField.value / 24;
            minutesField.value = hoursField.value * 60;
            secondsField.value = minutesField.value * 60;
        } else if (e.target.id == 'minutesBtn') {
            hoursField.value = minutesField.value / 60;
            daysField.value = hoursField.value / 24;
            secondsField.value = minutesField.value * 60;
        } else if (e.target.id == 'secondsBtn') {
            minutesField.value = secondsField.value / 60;
            hoursField.value = minutesField.value / 60;
            daysField.value = hoursField.value / 24;
        }
    }
}