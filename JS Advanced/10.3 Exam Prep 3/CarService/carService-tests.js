const carService = require('./03. Car Service_Resources')
const expect = require('chai').expect

describe("Car Service Tests:", function () {
    describe("isItExpensive method tests:", function () {
        it("test with valid argument - Engine", function () {
            expect(carService.isItExpensive('Engine'))
                .equal(`The issue with the car is more severe and it will cost more money`)
        });

        it("test with valid argument - Transmission", function () {
            expect(carService.isItExpensive('Engine'))
                .equal(`The issue with the car is more severe and it will cost more money`)
        });

        it("test with invalid argument - empty string", function () {
            expect(carService.isItExpensive(''))
                .equal(`The overall price will be a bit cheaper`)
        });
    });

    describe("discount mothod tests:", function () {
        it("throw error with invalid non number argument", function () {
            expect(() => carService.discount('2', 20))
                .throw("Invalid input")
        });

        it("throw error with invalid non number argument - 2", function () {
            expect(() => carService.discount(2, '20'))
                .throw("Invalid input")
        });

        it("test with valid args - 1", function () {
            expect(carService.discount(3, 100))
                .equal(`Discount applied! You saved ${(15 / 100) * 100}$`)
        });

        it("test with valid args - 2", function () {
            expect(carService.discount(7, 100))
                .equal(`Discount applied! You saved ${(15 / 100) * 100}$`)
        });

        it("test with valid args - 3", function () {
            expect(carService.discount(8, 100))
                .equal(`Discount applied! You saved ${(30 / 100) * 100}$`)
        });

        it("test with valid args - 4", function () {
            expect(carService.discount(2, 100))
                .equal("You cannot apply a discount")
        });
    });

    describe("partsToBuy method tests:", function () {
        it("test with invalid args - 1", function () {
            expect(() => carService.partsToBuy({}, []))
                .throw("Invalid input")
        });

        it("test with invalid args - 2", function () {
            expect(() => carService.partsToBuy([], {}))
                .throw("Invalid input")
        });

        it("test with invalid args - 3", function () {
            expect(() => carService.partsToBuy('', []))
                .throw("Invalid input")
        });

        it("test empty partsCatalog should return 0", function () {
            expect(carService.partsToBuy([], []))
                .equal(0)
        });

        it("test with valid args", function () {
            let partsCatalog = [
                {
                    part: "blowoff valve",
                    price: 145
                },
                {
                    part: "coil springs",
                    price: 230
                }
            ]

            let neededParts = [
                "blowoff valve",
                "injectors"
            ]

            expect(carService.partsToBuy(partsCatalog, neededParts))
                .equal(145)
        });
    });
});
