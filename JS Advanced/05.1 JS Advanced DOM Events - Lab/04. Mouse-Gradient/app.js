function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    gradientBox.addEventListener('mousemove', getPercentage);
    gradientBox.addEventListener('mouseout', clear);

    function getPercentage(e) {
        document.getElementById('result').textContent = `${Math.floor(e.offsetX / 300 * 100)}%`;
    }

    function clear() {
        document.getElementById('result').textContent = '';
    }
}