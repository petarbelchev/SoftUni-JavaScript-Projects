class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let currAdded = [];
        vegetables.forEach(veg => {
            let [type, quantity, price] = veg.split(' ');
            let lookedVeg = this.availableProducts.find(x => x.type == type);
            if (!lookedVeg) {
                this.availableProducts.push({ type, quantity: Number(quantity), price: Number(price) });
                currAdded.push(type);
            } else {
                lookedVeg.quantity += Number(quantity);
                if (lookedVeg.price < price) {
                    lookedVeg.price = price;
                }
            }
        });
        return 'Successfully added ' + currAdded.join(', ');
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(prod => {
            let [type, quantity] = prod.split(' ');
            let lookedProd = this.availableProducts.find(p => p.type == type);

            if (!lookedProd) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (lookedProd.quantity < quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += lookedProd.price * quantity;
            lookedProd.quantity -= quantity;
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity) {
        let lookedProd = this.availableProducts.find(prod => prod.type == type);

        if (!lookedProd) {
            throw new Error(`${type} is not available in the store.`);
        }

        if (lookedProd.quantity < quantity) {
            lookedProd.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }

        lookedProd.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }

    revision () {
        let report = ["Available vegetables:"];

        for (const vegetable of this.availableProducts.sort((a,b) => a.price - b.price)) {
            report.push(`${vegetable.type}-${vegetable.quantity}-$${vegetable.price}`);
        }

        report.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return report.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());