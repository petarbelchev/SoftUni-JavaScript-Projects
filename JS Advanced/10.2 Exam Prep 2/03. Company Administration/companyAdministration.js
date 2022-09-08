const companyAdministration = {

    hiringEmployee(name, position, yearsExperience) {
        if (position == "Programmer") {
            if (yearsExperience >= 3) {
                return `${name} was successfully hired for the position ${position}.`;
            } else {
                return `${name} is not approved for this position.`;
            }
        }
        throw new Error(`We are not looking for workers for this position.`);
    },
    calculateSalary(hours) {

        let payPerHour = 15;
        let totalAmount = payPerHour * hours;

        if (typeof hours !== "number" || hours < 0) {
            throw new Error("Invalid hours");
        } else if (hours > 160) {
            totalAmount += 1000;
        }
        return totalAmount;
    },
    firedEmployee(employees, index) {

        let result = [];

        if (!Array.isArray(employees) || !Number.isInteger(index) || index < 0 || index >= employees.length) {
            throw new Error("Invalid input");
        }
        for (let i = 0; i < employees.length; i++) {
            if (i !== index) {
                result.push(employees[i]);
            }
        }
        return result.join(", ");
    }
}

const expect = require('chai').expect;

describe('Tests...', function () {
    describe('hiringEmployee', () => {
        it('if the position is different from "Programmer"', () => {
            expect(() => { companyAdministration.hiringEmployee('Name', 'Different Position', 10) }).throw(Error).property('message', 'We are not looking for workers for this position.')
        });

        it('if the years of experience lower than 3 years', () => {
            expect(companyAdministration.hiringEmployee('Name', 'Programmer', 2)).string('Name is not approved for this position.')
        });

        it('if the years of experience are greater than or equal to 3 years', () => {
            expect(companyAdministration.hiringEmployee('Name', 'Programmer', 3)).string('Name was successfully hired for the position Programmer.')
        });
    })

    describe('calculateSalary', () => {
        it('if the hours are not a number', () => {
            expect(() => { companyAdministration.calculateSalary('not a number') }).throw(Error).property('message', 'Invalid hours')
        });

        it('if the hours are negative number', () => {
            expect(() => { companyAdministration.calculateSalary(-1) }).throw(Error).property('message', 'Invalid hours')
        });

        it('if the hours are valid number', () => {
            expect(companyAdministration.calculateSalary(1)).equal(15);
        });

        it('the employee has been working for more than 160 hours', () => {
            expect(companyAdministration.calculateSalary(161)).equal(3415);
        });

        it('the employee has been working for 160 hours', () => {
            expect(companyAdministration.calculateSalary(160)).equal(15 * 160);
        });
    })

    describe('firedEmployee', () => {
        it("check with invalid inputs", () => {
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee([], "1")).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Peter"], 1)).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee(["Peter"], [])).to.throw("Invalid input");
            expect(() => companyAdministration.firedEmployee("1", 1)).to.throw("Invalid input");
        });
        it("check with valid inputs", () => {
            expect(companyAdministration.firedEmployee(["Peter", "Ivan"], 1)).to.equal("Peter");
            expect(companyAdministration.firedEmployee(["Peter", "Ivan", "John"], 0)).to.equal("Ivan, John");
        });
    })
})