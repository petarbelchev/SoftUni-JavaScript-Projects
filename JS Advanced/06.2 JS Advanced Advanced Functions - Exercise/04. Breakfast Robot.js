function solution() {
    let productsQty = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };

    const recepies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    function prepare(recipe, countOfRecipes) {
        let neededProducts = recepies[recipe];

        for (const product in neededProducts) {
            if (productsQty[product] < countOfRecipes * neededProducts[product]) {
                return `Error: not enough ${product} in stock`;
            }
        }
        for (const product in neededProducts) {
            productsQty[product] -= countOfRecipes * neededProducts[product];
        }

        return 'Success';
    }

    function operator(command) {
        let cmdArgs = command.split(' ');

        if (cmdArgs[0] == 'restock') {
            let microelem = cmdArgs[1];
            let qty = Number(cmdArgs[2]);
            productsQty[microelem] += qty;
            return 'Success';

        } else if (cmdArgs[0] == 'prepare') {
            let recipe = cmdArgs[1];
            let qty = Number(cmdArgs[2]);
            return prepare(recipe, qty);

        } else if (cmdArgs[0] == 'report') {
            return `protein=${productsQty.protein} carbohydrate=${productsQty.carbohydrate} fat=${productsQty.fat} flavour=${productsQty.flavour}`;
        }
    }
    return operator;
}


let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

// console.log(manager("prepare turkey 1"));
// console.log(manager("restock protein 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock carbohydrate 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare turkey 1"));
// console.log(manager("report"));