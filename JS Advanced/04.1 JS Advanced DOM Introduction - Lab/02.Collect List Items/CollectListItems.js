function extractText() {
    let data = document.getElementsByTagName('li')
    let text = '';
    for (const item of data) {
        text += item.textContent + '\n';
    }
    document.getElementById('result').textContent = text;
}