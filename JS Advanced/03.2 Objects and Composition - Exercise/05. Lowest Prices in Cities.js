function lowestPrices(arr) {
    let arrOfObjects = [];
    for (const obj of arr) {
        let [town, product, price] = obj.split(' | ');
        arrOfObjects.push({
            town: town,
            product: product,
            price: Number(price)
        });
    }
    let filteredObjs = [];
    while (arrOfObjects.length > 0) {
        let currObj = arrOfObjects.shift();
        for (let i = 0; i < arrOfObjects.length; i++) {
            let objToCompare = arrOfObjects[i];
            if (currObj.product == objToCompare.product) {
                if (currObj.price > objToCompare.price) {
                    currObj = objToCompare;
                }
                arrOfObjects.splice(i, 1);
                i--;
            }
        }
        filteredObjs.push(currObj);
    }
    for (const key in filteredObjs) {
        console.log(`${filteredObjs[key].product} -> ${filteredObjs[key].price} (${filteredObjs[key].town})`)
    }
}

lowestPrices(
    [
        'Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10'
    ]
);

lowestPrices(
    [
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',
    ]
)