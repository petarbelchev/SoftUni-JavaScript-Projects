class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach(p => {
            let [productName, productQuantity, productTotalPrice] = p.split(' ');

            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }

                this.stockProducts[productName] += Number(productQuantity);
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);

            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        });

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if (!this.menu[meal]) {
            let products = neededProducts.map(p => {
                let [productName, productQuantity] = p.split(' ');

                return {
                    productName,
                    productQuantity: Number(productQuantity)
                }
            });

            this.menu[meal] = {
                products,
                price
            };

            let countOfMeals = Object.keys(this.menu).length;

            if (countOfMeals == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${countOfMeals} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        }

        let result = [];

        for (const key in this.menu) {
            result.push(`${key} - $ ${this.menu[key].price}`);
        }

        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        if (this.menu[meal].products.some(p => !this.stockProducts[p.productName])) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.menu[meal].products.forEach(p => this.stockProducts[p.productName] -= p.productQuantity);
        this.budgetMoney += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
