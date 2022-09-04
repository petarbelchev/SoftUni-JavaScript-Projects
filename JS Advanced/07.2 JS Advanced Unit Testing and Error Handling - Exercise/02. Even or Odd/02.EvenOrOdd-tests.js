const isOddOrEven = require('./02.EvenOrOdd');
const expect = require('chai').expect;

describe('Tests', () => {
    it('odd string', () => {
        expect(isOddOrEven('123')).equals('odd');
    });

    it('even string', () => {
        expect(isOddOrEven('1234')).equals('even');
    });

    it('its a object', () => {
        expect(isOddOrEven({})).equals(undefined);
    });

    it('its a integer', () => {
        expect(isOddOrEven(123)).equals(undefined);
    });
});