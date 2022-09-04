const lookupChar = require('./03.CharLookup');
const expect = require('chai').expect;

describe('Tests', () => {
    it('first parameter is NOT a string', () => {
        expect(lookupChar(123, 1)).equal(undefined);
    });

    it('second parameter is NOT a number', () => {
        expect(lookupChar('123', '1')).equal(undefined);
    });

    it('second parameter is NOT a integer', () => {
        expect(lookupChar('123', 1.2)).equal(undefined);
    });

    it('incorrect index: -1', () => {
        expect(lookupChar('123', -1)).equal('Incorrect index');
    })

    it('incorrect index: 3', () => {
        expect(lookupChar('123', 3)).equal('Incorrect index');
    })

    it('correct types and values', () => {
        expect(lookupChar('123', 1)).equal('2');
    })
});