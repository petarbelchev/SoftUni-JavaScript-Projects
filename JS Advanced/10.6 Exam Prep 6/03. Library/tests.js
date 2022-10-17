const library = require('./sourceCode.js');
const expect = require('chai').expect;

describe("Tests …", function () {
    describe("calcPriceOfBook:", function () {
        it("invalid nameOfBook input should throw an error", function () {
            expect(() => library.calcPriceOfBook({}, 1981))
                .throw("Invalid input");
        });

        it("invalid year input should throw an error", function () {
            expect(() => library.calcPriceOfBook('BookName', '1981'))
                .throw("Invalid input");
        });

        it("invalid year input should throw an error", function () {
            expect(() => library.calcPriceOfBook({}, 1981.5))
                .throw("Invalid input");
        });

        it("valid inputs should return result", function () {
            expect(library.calcPriceOfBook('BookName', 1981))
                .equal('Price of BookName is 20.00');
        });

        it("valid inputs should return result", function () {
            expect(library.calcPriceOfBook('BookName', 1980))
                .equal('Price of BookName is 10.00');
        });
    });

    describe("findBook:", function () {
        it("empty array should throw an message", function () {
            expect(() => library.findBook([], 'BookName'))
                .throw("No books currently available");
        });

        it("valid inputs should return result", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Torronto'))
                .equal("We found the book you want.");
        });

        it("valid inputs should return result", function () {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'BookName'))
                .equal("The book you are looking for is not here!");
        });
    });

    describe("arrangeTheBooks:", function () {
        it("invalid input should throw an error 1", function () {
            expect(() => library.arrangeTheBooks('2'))
                .throw("Invalid input");
        });

        it("invalid input should throw an error 2", function () {
            expect(() => library.arrangeTheBooks(2.2))
                .throw("Invalid input");
        });

        it("invalid input should throw an error 3", function () {
            expect(() => library.arrangeTheBooks(-2))
                .throw("Invalid input");
        });

        it("valid inputs should return result", function () {
            expect(library.arrangeTheBooks(40))
                .equal("Great job, the books are arranged.");
        });

        it("valid inputs should return result", function () {
            expect(library.arrangeTheBooks(41))
                .equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});