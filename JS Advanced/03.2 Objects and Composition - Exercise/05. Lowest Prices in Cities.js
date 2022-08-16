function lowestPrices(arr) {
    let products = {};

    for (const obj of arr) {
        let [town, product, price] = obj.split(' | ');
        price = Number(price);
        if (!products.hasOwnProperty(product)) {
            products[product] = { town, price };
        } else if (products[product].price > price) {
            products[product] = { town, price };
        }
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key].price} (${products[key].town})`)
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