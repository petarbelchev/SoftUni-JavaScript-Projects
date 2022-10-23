const chooseYourCar = require('./sourceCode.js');
const expect = require('chai').expect;

describe("Tests …", function () {
    describe("choosingType", function () {
        it("if the year is less than 1900 , throw an error: Invalid Year!", function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'Black', 1899))
                .throw('Invalid Year!');
        });

        it("if the year is less than 1900 , throw an error: Invalid Year! - 2", function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'Black', -1899))
                .throw('Invalid Year!');
        });

        it("if the year is more than 2022, throw an error: Invalid Year!", function () {
            expect(() => chooseYourCar.choosingType('Sedan', 'Black', 2023))
                .throw('Invalid Year!');
        });

        it("If the value of the string type is different from 'Sedan', throw an error: 'This type of car is not what you are looking for.'", function () {
            expect(() => chooseYourCar.choosingType('Combi', 'Black', 1900))
                .throw('This type of car is not what you are looking for.');
        });

        it("the car meet the following requirement", function () {
            expect(chooseYourCar.choosingType('Sedan', 'Black', 2010))
                .equal("This Black Sedan meets the requirements, that you have.");
        });

        it("the car meet the following requirement - 2", function () {
            expect(chooseYourCar.choosingType('Sedan', 'Black', 2022))
                .equal("This Black Sedan meets the requirements, that you have.");
        });

        it("the car not meet the following requirement", function () {
            expect(chooseYourCar.choosingType('Sedan', 'Black', 2009))
                .equal("This Sedan is too old for you, especially with that Black color.");
        });
    });


    describe("brandName", function () {
        it("invalid input array, throw an error 'Invalid Information!'", function () {
            expect(() => chooseYourCar.brandName({}, 2))
                .throw('Invalid Information!');
        });

        it("invalid input array, throw an error 'Invalid Information!' - 2", function () {
            expect(() => chooseYourCar.brandName('', 2))
                .throw('Invalid Information!');
        });

        it("invalid input index, throw an error 'Invalid Information!' - 1", function () {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 'string'))
                .throw('Invalid Information!');
        });

        it("invalid input index, throw an error 'Invalid Information!' - 2", function () {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2.1))
                .throw('Invalid Information!');
        });

        it("invalid input index, throw an error 'Invalid Information!' - 3", function () {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], []))
                .throw('Invalid Information!');
        });

        it("invalid input index, throw an error 'Invalid Information!' - 4", function () {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], {}))
                .throw('Invalid Information!');
        });

        it("invalid inputs, throw an error 'Invalid Information!'", function () {
            expect(() => chooseYourCar.brandName([], 0))
                .throw("Invalid Information!");
        });

        it("input index outside the limits of the array, throw an error 'Invalid Information!'", function () {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3))
                .throw('Invalid Information!');
        });

        it("input index outside the limits of the array, throw an error 'Invalid Information!' - 2", function () {
            expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1))
                .throw('Invalid Information!');
        });

        it("valid input, should retur response", function () {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2))
                .equal("BMW, Toyota");
        });

        it("valid input, should retur response - 2", function () {
            expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0))
                .equal("Toyota, Peugeot");
        });

        it("valid input, should retur response - 3", function () {
            expect(chooseYourCar.brandName(["BMW"], 0))
                .equal("");
        });
    });

    describe("carFuelConsumption", function () {
        it("If the liters/100km is less or equal to 7L. return message", function () {
            expect(chooseYourCar.carFuelConsumption(100, 7))
                .equal("The car is efficient enough, it burns 7.00 liters/100 km.")
        });

        it("If the liters/100km is less or equal to 7L. return message - 2", function () {
            expect(chooseYourCar.carFuelConsumption(350, 14))
                .equal("The car is efficient enough, it burns 4.00 liters/100 km.")
        });

        it("If the liters/100km is more than 7L. return message", function () {
            expect(chooseYourCar.carFuelConsumption(100, 7.01))
                .equal("The car burns too much fuel - 7.01 liters!")
        });

        it("If the liters/100km is more than 7L. return message - 2", function () {
            expect(chooseYourCar.carFuelConsumption(250.45, 25.12))
                .equal(`The car burns too much fuel - ${((25.12/250.45)*100).toFixed(2)} liters!`)
        });

        it("invalid input should throw an error 1", function () {
            expect(() => chooseYourCar.carFuelConsumption([], 8))
                .throw("Invalid Information!");
        });

        it("invalid input should throw an error 2", function () {
            expect(() => chooseYourCar.carFuelConsumption(100, []))
                .throw("Invalid Information!");
        });

        it("invalid input should throw an error 3", function () {
            expect(() => chooseYourCar.carFuelConsumption(0, 8))
                .throw("Invalid Information!");
        });

        it("invalid input should throw an error 4", function () {
            expect(() => chooseYourCar.carFuelConsumption(100, 0))
                .throw("Invalid Information!");
        });

        it("invalid input should throw an error 5", function () {
            expect(() => chooseYourCar.carFuelConsumption(100, -1))
                .throw("Invalid Information!");
        });

        it("invalid input should throw an error 6", function () {
            expect(() => chooseYourCar.carFuelConsumption(-100, 5))
                .throw("Invalid Information!");
        });
    });
});
