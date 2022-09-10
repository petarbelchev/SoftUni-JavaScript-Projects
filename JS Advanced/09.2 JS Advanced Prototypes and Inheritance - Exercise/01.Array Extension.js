(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(n);
        }
    }

    Array.prototype.take = function (n) {
        if (n >= 0 && n < this.length) {
            return this.slice(0, n);
        }
    }

    Array.prototype.sum = function () {
        let sum = 0;
        this.forEach(el => sum += el);
        return sum;
    }

    Array.prototype.average = function () {
        let sum = 0;
        this.forEach(el => sum += el);
        return sum / this.length;
    }
})();

// const arr = [1, 2, 3]

// console.log(arr.skip(1))
// console.log(arr.take(2))
// console.log(arr.sum())
// console.log(arr.average())