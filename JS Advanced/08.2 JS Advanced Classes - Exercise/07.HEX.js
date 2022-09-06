class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(arg) {
        return new Hex(this.value + arg.value);
    }

    minus(arg) {
        return new Hex(this.value - arg.value);
    }

    parse(hexNum) {
        return parseInt(hexNum, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
console.log(b.minus(a).toString());
console.log(FF.parse('0x8C'));
