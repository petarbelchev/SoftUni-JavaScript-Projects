function storeCatalogue(input) {
    let arrOfProducts = input.map(str => str.split(' : '));
    arrOfProducts.sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));
    let firstLetter = arrOfProducts[0][0].charAt(0);
    console.log(firstLetter);
    for (const product of arrOfProducts) {
        if (product[0].charAt(0) != firstLetter) {
            firstLetter = product[0].charAt(0);
            console.log(firstLetter);
        }
        console.log(`  ${product[0]}: ${product[1]}`);
    }
}

storeCatalogue(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);

storeCatalogue(
    [
        'Banana : 2',
        'Rubic\'s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10'
    ]
)