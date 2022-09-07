const expect = require('chai').expect;
const bookSelection = require('./solution');

describe("Tests …", function () {
    describe("isGenreSuitable", function () {
        it("not suitable Thriller genre for kids", function () {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.string('Books with Thriller genre are not suitable for kids at 12 age')
        });

        it("not suitable Horror genre for kids", function () {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.string('Books with Horror genre are not suitable for kids at 12 age')
        });

        it("suitable genre", function () {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.be.string('Those books are suitable')
        });
    });

    describe('isItAffordable', function () {
        it('don\'t have enough money', function () {
            expect(bookSelection.isItAffordable(10, 5)).string('You don\'t have enough money');
        });

        it('do have enough money', function () {
            expect(bookSelection.isItAffordable(5, 10)).string('Book bought. You have 5$ left');
        });

        it('price input is not a number', function () {
            expect(() => bookSelection.isItAffordable('5', 10)).throw(Error).property('message', 'Invalid input');
        });

        it('budget input is not a number', function () {
            expect(() => bookSelection.isItAffordable(5, '10')).throw(Error).property('message', 'Invalid input');
        });
    });

    describe('suitableTitles', function () {
        it('array parameter is not an array', function () {
            expect(() => bookSelection.suitableTitles('array', 'string')).throw(Error).property('message', 'Invalid input');
        });

        it('string parameter is not a string', function () {
            expect(() => bookSelection.suitableTitles([], {})).throw(Error).property('message', 'Invalid input');
        });

        it('return array with matched book titles', function () {
            expect(bookSelection.suitableTitles([{title: "FirstBook", genre: "Horror"}, {title: "SecondBook", genre: "Thriller"}], 'Thriller')).eql(["SecondBook"]);
        });
    });
});
