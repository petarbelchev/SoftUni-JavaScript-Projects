const testNumbers = require('./sourceCode.js');
const expect = require('chai').expect;

describe("Tests …", function () {
    describe("sumNumber", function () {
        it("when first parameter is not a number should return undefined", function () {
            expect(testNumbers.sumNumbers('', 2))
                .equal(undefined);
        });

        it("when second parameter is not a number should return undefined", function () {
            expect(testNumbers.sumNumbers(2, '2'))
                .equal(undefined);
        });

        it("with valid parameter is not a number should return the sum", function () {
            expect(testNumbers.sumNumbers(2, 2))
                .equal('4.00');
        });
    });

    describe("numberChecker", function () {
        it("the input is not a number and the function should throws an error ", function () {
            expect(() => testNumbers.numberChecker('notANumber'))
                .throw("The input is not a number!");
        });

        it("the input is even number and the function should return 'The number is even!'", function () {
            expect(testNumbers.numberChecker('2'))
                .equal("The number is even!");
        });

        it("the input is odd number and the function should return 'The number is odd!'", function () {
            expect(testNumbers.numberChecker('1'))
                .equal("The number is odd!");
        });
    });

    describe("averageSumArray", function () {
        it("method calculates the sum, and returns the average sum", function () {
            expect(testNumbers.averageSumArray([2, 2, 2]))
                .equal(2);
        });
    });
});
