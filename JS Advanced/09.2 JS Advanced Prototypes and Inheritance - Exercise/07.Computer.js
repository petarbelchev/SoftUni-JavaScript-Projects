function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expextedLife) {
            this.manufacturer = manufacturer;
            this.expextedLife = expextedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target == Computer) {
                throw new TypeError('This is an abstract class!')
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery() { return this._battery }
        set battery(battery) {
            if (battery instanceof Battery == false) {
                throw new TypeError('The object is not an instance of Battery class')
            }
            this._battery = battery;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.keyboard = keyboard;
            this.monitor = monitor
        }

        get keyboard() { return this._keyboard }

        set keyboard(keyboard) {
            if (keyboard instanceof Keyboard == false) {
                throw new TypeError('The object is not an instance of Keyboard class')
            }
            this._keyboard = keyboard;
        }

        get monitor() { return this._monitor }

        set monitor(monitor) {
            if (monitor instanceof Monitor == false) {
                throw new TypeError('The object is not an instance of Monitor class');
            }
            this._monitor = monitor;
        }
    }

    return { Keyboard, Monitor, Battery, Computer, Laptop, Desktop }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
let keyboard = new Keyboard('havit', 2)
let monitor = new Monitor('Samsung', 20, 30)
let desktop = new Desktop('Acer', 3.0, 8, 1, 'keyboard', 'monitor')
console.log(desktop)