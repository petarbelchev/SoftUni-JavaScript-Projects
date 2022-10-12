const rentCar = require('./rentCar.js');
const expect = require('chai').expect;

describe("Tests …", function () {
    describe("searchCar method tests:", function () {
        it("invalid shop input should throw an error", function () {
            expect(() => rentCar.searchCar({}, 'Audi'))
                .throw('Invalid input!');
        });

        it("invalid model input should throw an error", function () {
            expect(() => rentCar.searchCar([], {}))
                .throw('Invalid input!');
        });

        it("no matching element should throw an error", function () {
            expect(() => rentCar.searchCar([], 'Audi'))
                .throw('There are no such models in the catalog!');
        });

        it("valid inputs should return matched elements", function () {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi'))
                .equal(`There is 1 car of model Audi in the catalog!`);
        });
    });

    describe("calculatePriceOfCar method tests:", function () {
        it("invalid model input should throw an error", function () {
            expect(() => rentCar.calculatePriceOfCar({}, 2))
                .throw('Invalid input!');
        });

        it("invalid days input should throw an error", function () {
            expect(() => rentCar.calculatePriceOfCar('Audi', '2'))
                .throw('Invalid input!');
        });

        it("valid input and valid model should return the cost", function () {
            expect(rentCar.calculatePriceOfCar('Audi', 2))
                .equal(`You choose Audi and it will cost $${36 * 2}!`);
        });

        it("valid input and invalid model should throw an error", function () {
            expect(() => rentCar.calculatePriceOfCar('Honda', 2))
                .throw('No such model in the catalog!');
        });
    });

    describe("checkBudget method tests:", function () {
        it("invalid costPerDay input should throw an error", function () {
            expect(() => rentCar.checkBudget('', 2, 100))
                .throw("Invalid input!");
        });

        it("invalid days input should throw an error", function () {
            expect(() => rentCar.checkBudget(10, '2', 100))
                .throw("Invalid input!");
        });

        it("invalid budget input should throw an error", function () {
            expect(() => rentCar.checkBudget(10, 2, '100'))
                .throw("Invalid input!");
        });

        it("valid input and budget should return: 'You rent a car!'", function () {
            expect(rentCar.checkBudget(10, 2, 100))
                .equal('You rent a car!');
        });

        it("equal cost and budget should return: 'You rent a car!'", function () {
            expect(rentCar.checkBudget(10, 2, 20))
                .equal('You rent a car!');
        });

        it("valid input but small budget should return: 'You need a bigger budget!'", function () {
            expect(rentCar.checkBudget(10, 2, 10))
                .equal('You need a bigger budget!');
        });
    });
});