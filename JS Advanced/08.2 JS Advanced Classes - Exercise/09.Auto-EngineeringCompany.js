function result(arr) {
    let brands = new Map;

    arr.forEach(production => {
        let tokens = production.split(' | ');
        let brand = tokens[0];
        let model = tokens[1];
        let qty = Number(tokens[2]);

        if (brands.has(brand) == false) {
            brands.set(brand, new Map);
        }
        if (brands.get(brand).has(model) == false) {
            brands.get(brand).set(model, 0);
        }
        let newQty = brands.get(brand).get(model) + qty;
        brands.get(brand).set(model, newQty);
    });

    for (const brand of brands.keys()) {
        console.log(brand);
        for (const [model, qty] of brands.get(brand).entries()) {
            console.log(`###${model} -> ${qty}`);
        }
    }
}

result([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
])