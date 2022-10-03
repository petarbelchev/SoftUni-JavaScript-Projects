let main = document.getElementById('main');

fetch('http://localhost:3030/jsonstore/advanced/articles/list')
    .then(res => {
        if (res.status !== 200) {
            throw new Error();
        }
        return res.json();
    })
    .then(data => {
        data.map(article => {
            let divHead = makeElement('div', 'head');
            divHead.appendChild(makeElement('span', undefined, article.title));
            let button = makeElement('button', 'button', 'More', article._id);
            let divExtra = makeElement('div', 'extra');
            
            button.addEventListener('click', () => {
                if (button.textContent == 'More') {
                    divExtra.style.display = 'block';
                    button.textContent = 'Less';
                } else {
                    divExtra.style.display = 'none';
                    button.textContent = 'More';
                }
            });
            
            divHead.appendChild(button);
            let divAccordion = makeElement('div', 'accordion');
            divAccordion.appendChild(divHead);
            main.appendChild(divAccordion);

            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${article._id}`)
                .then(res => {
                    if (res.status !== 200) {
                        throw new Error();
                    }
                    return res.json();
                })
                .then(data => {
                    divExtra.appendChild(makeElement('p', undefined, data.content));
                    divAccordion.appendChild(divExtra);
                });            
        })
    })
    .catch(error => console.log(error.message));

function makeElement(type, className, textContent, id) {
    let element = document.createElement(type);

    if (className !== undefined) element.className = className;
    if (textContent !== undefined) element.textContent = textContent;
    if (id !== undefined) element.id = id;

    return element;
}