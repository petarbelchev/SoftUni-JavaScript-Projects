const flowerShop = require('./flowerShop.js');
const expect = require('chai').expect;

describe("Tests …", function () {
    describe("calcPriceOfFlowers method tests:", function () {
        it("invalid flower input should throw an error", function () {
            expect(() => flowerShop.calcPriceOfFlowers(5, 2, 5))
                .throw("Invalid input!");
        });

        it("invalid price input should throw an error", function () {
            expect(() => flowerShop.calcPriceOfFlowers('Flower', '2', 5))
                .throw("Invalid input!");
        });

        it("invalid quantity input should throw an error", function () {
            expect(() => flowerShop.calcPriceOfFlowers('Flower', 2, '5'))
                .throw("Invalid input!");
        });

        it("valid input should return result", function () {
            expect(flowerShop.calcPriceOfFlowers('Flower', 2, 5))
                .equal('You need $10.00 to buy Flower!');
        });
    });

    describe('checkFlowersAvailable', function () {
        it("test with not presented flower", function () {
            expect(flowerShop.checkFlowersAvailable('Flower', ["Rose", "Lily", "Orchid"]))
                .equal("The Flower are sold! You need to purchase more!");
        });

        it("test with presented flower", function () {
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"]))
                .equal("The Lily are available!");
        });
    });

    describe('sellFlowers', function () {
        it("invalid space input should throw an error", function () {
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '2'))
                .throw("Invalid input!");
        });

        it("invalid gardenArr input should throw an error", function () {
            expect(() => flowerShop.sellFlowers("Rose", 2))
                .throw("Invalid input!");
        });

        it("valid input should return result", function () {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2))
                .equal("Rose / Lily");
        });
    });
});