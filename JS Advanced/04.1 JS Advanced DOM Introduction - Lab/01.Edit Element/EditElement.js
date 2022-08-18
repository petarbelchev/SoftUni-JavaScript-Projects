function editElement(element, match, replace) {
    let text = element.textContent;
    const pattern = new RegExp(match, 'g');
    text = text.replace(pattern, replace);
    element.textContent = text;
}