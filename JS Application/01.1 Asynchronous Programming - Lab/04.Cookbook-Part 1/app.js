window.addEventListener('load', () => {
    let urlRecipes = 'http://localhost:3030/jsonstore/cookbook/recipes';
    let mainElem = document.querySelector('main');

    fetch(urlRecipes)
        .then(res => res.json())
        .then(data => {
            mainElem.innerHTML = '';

            Object.values(data).forEach(r => {
                mainElem.appendChild(createRecipe(r));
            })
        });
})

function createRecipe(recipeData) {
    let divTitle = makeElement('div', undefined, 'title');
    divTitle.appendChild(makeElement('h2', recipeData.name));
    let divImg = makeElement('div', undefined, 'small');
    divImg.appendChild(makeElement('img', undefined, undefined, recipeData.img));

    let recipe = makeElement('article', undefined, 'preview', undefined, recipeData._id);
    recipe.appendChild(divTitle);
    recipe.appendChild(divImg);
    recipe.addEventListener('click', loadRecipeDetails);

    return recipe;
}

function loadRecipeDetails(e) {
    let recipeId = e.currentTarget.id;
    let urlDetails = `http://localhost:3030/jsonstore/cookbook/details/${recipeId}`;
    let mainElem = document.querySelector('main');

    fetch(urlDetails)
        .then(res => res.json())
        .then(details => {
            mainElem.innerHTML = '';
            mainElem.appendChild(getDetailedRecipe(details));
        });
}

function getDetailedRecipe(details) {
    let detailedRecipe = document.createElement('article');

    detailedRecipe.appendChild(makeElement('h2', details.name));
    
    let divBand = makeElement('div', undefined, 'band');    
    let divThumb = makeElement('div', undefined, 'thumb');
    divThumb.appendChild(makeElement('img', undefined, undefined, details.img));
    divBand.appendChild(divThumb);

    let divIngredients = makeElement('div', undefined, 'ingredients');    
    divIngredients.appendChild(makeElement('h3', 'Ingredients:'));
    let ul = document.createElement('ul');
    for (let index = 0; index < details.ingredients.length; index++) {
        ul.appendChild(makeElement('li', details.ingredients[index]));
    }
    divIngredients.appendChild(ul);    
    divBand.appendChild(divIngredients);

    let divDescription = makeElement('div', undefined, 'description');
    divDescription.appendChild(makeElement('h3', 'Preparation:'));
    for (let index = 0; index < details.steps.length; index++) {
        divDescription.appendChild(makeElement('p', details.steps[index]));
    }

    detailedRecipe.appendChild(divBand);
    detailedRecipe.appendChild(divDescription);

    return detailedRecipe;
}

function makeElement(type, textContent, className, src, id) {
    let element = document.createElement(type);

    if (textContent !== undefined) element.textContent = textContent;
    if (className !== undefined) element.className = className;
    if (src !== undefined) element.src = src;
    if (id !== undefined) element.id = id;

    return element;
}