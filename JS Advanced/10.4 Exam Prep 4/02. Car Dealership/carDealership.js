class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' ||
            typeof model !== 'string' ||
            horsepower < 0 ||
            Number.isInteger(horsepower) == false ||
            price < 0 ||
            typeof price !== 'number' ||
            mileage < 0 ||
            typeof mileage !== 'number') {

            throw new Error("Invalid input!");
        }

        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let carForSale = this.availableCars.find(c => c.model == model);

        if (!carForSale) {
            throw new Error(`${model} was not found!`);
        }

        if (carForSale.mileage > desiredMileage) {
            if (carForSale.mileage - desiredMileage <= 40000) {
                carForSale.price -= carForSale.price * 0.05;
            } else {
                carForSale.price -= carForSale.price * 0.1;
            }
        }

        this.availableCars.pop(carForSale);

        this.soldCars.push({
            model,
            horsepower: carForSale.horsepower,
            soldPrice: carForSale.price
        })

        this.totalIncome += carForSale.price;

        return `${carForSale.model} was sold for ${carForSale.price.toFixed(2)}$`;
    }

    currentCar() {
        let result = [];

        if (this.availableCars.length == 0) {
            return "There are no available cars";
        } else {
            result.push('-Available cars:');

            this.availableCars.forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`));
        }

        return result.join('\n');
    }

    salesReport(criteria) {
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error('Invalid criteria!');
        }

        let result = [];

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);

        if (criteria == 'horsepower') {
            this.soldCars
            .sort((a, b) => b[criteria] - a[criteria])
            .forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        } else {
            this.soldCars
            .sort((a, b) => a[criteria].localeCompare(b[criteria]))
            .forEach(c => result.push(`---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`));
        }
        return result.join('\n');
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport(''));