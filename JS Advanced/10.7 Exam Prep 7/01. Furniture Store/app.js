window.addEventListener('load', solve);

function solve() {
    const modelField = document.getElementById('model');
    const yearField = document.getElementById('year');
    const descriptionField = document.getElementById('description');
    const priceField = document.getElementById('price');
    const tbody = document.getElementById('furniture-list');
    const totalPriceField = document.querySelector('.total-price');

    document.getElementById('add').addEventListener('click', (ev) => {
        ev.preventDefault();

        let model = modelField.value;
        let description = descriptionField.value;
        let year = yearField.value;
        let price = Number(priceField.value);

        if (model != '' &&
            description != '' &&
            // typeof yearField.value == 'number' &&
            year > 0 &&
            // typeof priceField.value == 'number' &&
            price > 0) {

            modelField.value = '';
            descriptionField.value = '';
            yearField.value = '';
            priceField.value = '';

            let trInfo = document.createElement('tr');
            trInfo.className = 'info';
            elemGenerator('td', model, trInfo);
            elemGenerator('td', price.toFixed(2), trInfo);
            let tdBtns = document.createElement('td');
            trInfo.appendChild(tdBtns);
            let moreInfoBtn = elemGenerator('button', 'More Info', tdBtns, 'moreBtn');
            let buyBtn = elemGenerator('button', 'Buy it', tdBtns, 'buyBtn');

            tbody.appendChild(trInfo);

            let trHide = document.createElement('tr');
            trHide.className = 'hide';
            elemGenerator('td', `Year: ${year}`, trHide);
            elemGenerator('td', `Description: ${description}`, trHide, undefined, 3);

            tbody.appendChild(trHide);

            moreInfoBtn.addEventListener('click', () => {
                if (moreInfoBtn.textContent == "More Info") {
                    moreInfoBtn.textContent = 'Less Info';
                    trHide.style.display = 'contents';
                } else {
                    moreInfoBtn.textContent = 'More Info';
                    trHide.style.display = 'none';
                }
            });


            buyBtn.addEventListener('click', () => {
                let currPrice = Number(totalPriceField.textContent);
                currPrice += price;
                totalPriceField.textContent = currPrice.toFixed(2);
                trInfo.remove();
                trHide.remove();
            });
        }
    });

    function elemGenerator(type, content, parent, className, colspan) {
        let elem = document.createElement(type);

        if (content) elem.textContent = content;
        if (parent) parent.appendChild(elem);
        if (className) elem.className = className;
        if (colspan) elem.setAttribute("colspan", colspan);

        return elem;
    }
}
