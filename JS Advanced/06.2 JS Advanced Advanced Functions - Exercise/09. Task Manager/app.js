function solve() {
    document.getElementById('add').addEventListener('click', checkInputField);
    let taskNameField = document.getElementById('task');
    let descriptionField = document.getElementById('description');
    let dateField = document.getElementById('date');

    function checkInputField(e) {
        e.preventDefault();
        if (taskNameField.value != '' && descriptionField.value != '' && dateField.value != '') {
            addArticle();
        }
    }

    function addArticle() {        
        let div = document.createElement('div');
        div.classList.add('flex');
        div.appendChild(createElement('button', 'Start', 'green', moveInProgress));
        div.appendChild(createElement('button', 'Delete', 'red', deleteArticle));

        let article = document.createElement('article');
        article.appendChild(createElement('h3', taskNameField.value));
        article.appendChild(createElement('p', `Description: ${descriptionField.value}`));
        article.appendChild(createElement('p', `Due Date: ${dateField.value}`));
        article.appendChild(div);

        document.getElementsByTagName('section')[1].children[1].appendChild(article);
    }

    function moveInProgress(e) {
        e.target.parentElement.appendChild(createElement('button', 'Finish', 'orange', moveToComplete));
        document.getElementById('in-progress').appendChild(e.target.parentElement.parentElement);
        e.target.remove();
    }

    function deleteArticle(e) {
        e.target.parentElement.parentElement.remove();
    }

    function moveToComplete(e) {
        document.getElementsByTagName('section')[3].children[1].appendChild(e.target.parentElement.parentElement)
        e.target.parentElement.remove();
    }

    function createElement(type, textContent, className, func) {
        let element = document.createElement(type);
        element.textContent = textContent;
        if (className) element.className = className;
        if (func) element.addEventListener('click', func);
        return element;
    }
}