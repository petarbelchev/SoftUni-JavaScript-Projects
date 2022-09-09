function solve() {
    class Figure {
        constructor() {
            this.units = 'cm';
        }

        get area() { }

        changeUnits(newUnits) {
            const unitsRate = {
                m: 0.01,
                cm: 1,
                mm: 10
            }

            if (this.constructor.name == 'Circle') {
                this.radius /= unitsRate[this.units]
            } else if (this.constructor.name == 'Rectangle') {
                this.width /= unitsRate[this.units]
                this.height /= unitsRate[this.units]
            }

            if (this.constructor.name == 'Circle') {
                this.radius *= unitsRate[newUnits]
            } else if (this.constructor.name == 'Rectangle') {
                this.width *= unitsRate[newUnits]
                this.height *= unitsRate[newUnits]
            }

            this.units = newUnits;
        }

        toString() {
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super()
            this.radius = radius;
        }

        get area() {
            return Math.PI * Math.pow(this.radius, 2);
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super()
            this.width = width
            this.height = height
            if (this.units != units) {
                this.changeUnits(units)
            }
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return { Figure, Circle, Rectangle }
}

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
