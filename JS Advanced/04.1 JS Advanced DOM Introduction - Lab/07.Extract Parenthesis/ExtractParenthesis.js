function extract(content) {
    let text = document.getElementById(content).innerText;
    let arrMatches = [];
    const pattern = /\((.+?)\)/g;
    let [...matches] = text.matchAll(pattern);
    for (const match of matches) {
        arrMatches.push(match[1]);
    }
    return arrMatches.join('; ');
}