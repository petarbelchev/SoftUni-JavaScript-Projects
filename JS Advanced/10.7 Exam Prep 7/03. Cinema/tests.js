const cinema = require('./sourceCode.js');
const expect = require('chai').expect;

describe("Tests …", function () {
    describe("showMovies", function () {
        it("empty array should return message", function () {
            expect(cinema.showMovies([]))
                .equal("There are currently no movies to show.");
        });

        it("array with movies should return looked movies", function () {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker']))
                .equal('King Kong, The Tomorrow War, Joker');
        });
    });

    describe("ticketPrice", function () {
        it("not presented type should throw an error", function () {
            expect(() => cinema.ticketPrice('NotExistingType'))
                .throw("Invalid projection type.");
        });

        it("invalid input should throw an error", function () {
            expect(() => cinema.ticketPrice({}))
                .throw("Invalid projection type.");
        });

        it("presented type should return the price", function () {
            expect(cinema.ticketPrice("Premiere"))
                .equal(12.00);
        });

        it("presented type should return the price 2", function () {
            expect(cinema.ticketPrice("Normal"))
                .equal(7.50);
        });

        it("presented type should return the price 3", function () {
            expect(cinema.ticketPrice("Discount"))
                .equal(5.50);
        });
    });

    describe("swapSeatsInHall", function () {
        it("one of the two numbers do not exist should return message", function () {
            expect(cinema.swapSeatsInHall(1))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("one of the two numbers do not exist should return message 2", function () {
            expect(cinema.swapSeatsInHall(1, -1))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("one of the two numbers do not exist should return message 2.1", function () {
            expect(cinema.swapSeatsInHall(-1, 1))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("one of the two numbers do not exist should return message 3", function () {
            expect(cinema.swapSeatsInHall(undefined, 1))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("the numbers are not integers should return message", function () {
            expect(cinema.swapSeatsInHall(1.2, 1))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("the numbers are not integers should return message 2", function () {
            expect(cinema.swapSeatsInHall(1, 1.2))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("if one of the numbers is greater than the capacity of the hall should return message", function () {
            expect(cinema.swapSeatsInHall(1, 21))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("if one of the numbers is greater than the capacity of the hall should return message 2", function () {
            expect(cinema.swapSeatsInHall(21, 1))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("if seats are less or equal of 0 should return message", function () {
            expect(cinema.swapSeatsInHall(0, 20))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("if seats are less or equal of 0 should return message 2", function () {
            expect(cinema.swapSeatsInHall(20, 0))
                .equal("Unsuccessful change of seats in the hall." );
        });

        it("valid input should swap the seats and return a message", function () {
            expect(cinema.swapSeatsInHall(1, 2))
                .equal("Successful change of seats in the hall.");
        });

        it("try to swap same seat should return message", function () {
            expect(cinema.swapSeatsInHall(1, 1))
                .equal("Unsuccessful change of seats in the hall.");
        });
    });
});
