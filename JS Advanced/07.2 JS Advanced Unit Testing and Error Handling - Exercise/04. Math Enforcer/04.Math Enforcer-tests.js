const mathEnforcer = require('./04.MathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer tester', () => {
    describe('addFive tests', () => {
        it('addFive param is NOT a number', () => {
            expect(mathEnforcer.addFive('0')).equal(undefined);
        });
    
        it('addFive with valid positive param', () => {
            expect(mathEnforcer.addFive(0)).equal(5);
        });

        it('addFive with valid negative param', () => {
            expect(mathEnforcer.addFive(-5)).equal(0);
        });

        it('addFive with valid floating point param', () => {
            expect(mathEnforcer.addFive(5.5)).closeTo(10.5, 0.01);
        });
    });

    describe('subtractTen tests', () => {
        it('subtractTen param is NOT a number', () => {
            expect(mathEnforcer.subtractTen('10')).equal(undefined);
        });
    
        it('subtractTen with valid positive param', () => {
            expect(mathEnforcer.subtractTen(10)).equal(0);
        });

        it('subtractTen with valid negative param', () => {
            expect(mathEnforcer.subtractTen(-10)).equal(-20);
        });

        it('subtractTen with valid floating point param', () => {
            expect(mathEnforcer.subtractTen(10.5)).closeTo(0.5, 0.01);
        });
    });

    describe('sum tests', () => {
        it('sum when first param is NOT a number', () => {
            expect(mathEnforcer.sum('1', 1)).equal(undefined);
        });
    
        it('sum when second param is NOT a number', () => {
            expect(mathEnforcer.sum(1, '1')).equal(undefined);
        });
    
        it('sum with valid positive params', () => {
            expect(mathEnforcer.sum(1, 1)).equal(2);
        });

        it('sum with valid negative params', () => {
            expect(mathEnforcer.sum(-1, -1)).equal(-2);
        });

        it('sum when first param is negative', () => {
            expect(mathEnforcer.sum(-1, 1)).equal(0);
        });

        it('sum when second param is negative', () => {
            expect(mathEnforcer.sum(1, -1)).equal(0);
        });

        it('sum when first param is floating point', () => {
            expect(mathEnforcer.sum(1.5, 1)).closeTo(2.5, 0.01);
        });

        it('sum when second param is floating point', () => {
            expect(mathEnforcer.sum(1, 1.5)).closeTo(2.5, 0.01);
        });
    });
});