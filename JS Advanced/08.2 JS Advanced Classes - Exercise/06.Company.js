class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        let employeeData = [name, salary, position, department];

        if ((employeeData.includes('') || employeeData.includes(undefined) || employeeData.includes(null))
            || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, salary, position, department });
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestAvSalary = 0;
        let bestDepartment;

        for (const department in this.departments) {
            let sumSalaries = 0;

            for (const employee of this.departments[department]) {
                sumSalaries += employee.salary;
            }

            let currAvSalary = sumSalaries / this.departments[department].length;

            if (bestAvSalary < currAvSalary) {
                bestAvSalary = currAvSalary;
                bestDepartment = department;
            }
        }

        let result = [`Best Department is: ${bestDepartment}`, `Average salary: ${bestAvSalary.toFixed(2)}`];

        this.departments[bestDepartment].sort((a, b) => {
            if (b.salary < a.salary) return -1;
            else if (b.salary > a.salary) return 1;
            else return a.name.localeCompare(b.name);
        })

        for (const employee of this.departments[bestDepartment]) {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
