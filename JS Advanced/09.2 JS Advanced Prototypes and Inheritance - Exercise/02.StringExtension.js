(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str) == false) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str) == false) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return '.'.repeat(n);
            
        } else if (this.length <= n) {
            return this.toString();

        } else if (this.length > n) {
            let lastIndex = this.substring(0, n - 2).lastIndexOf(' ');

            if (lastIndex !== -1) {
                return this.substring(0, lastIndex) + '...';
            } else {
                return this.substring(0, n - 3) + '...';
            }
        }
    }

    String.format = function (string, ...params) {
        for (let index = 0; index < params.length; index++) {
            string = string.replace(`{${index}}`, params[index]);
        }
        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str)
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
console.log(str)
str = str.truncate(8);
console.log(str)
str = str.truncate(4);
console.log(str)
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str)
str = String.format('jumps {0} {1}', 'dog');
console.log(str)
console.log(str.isEmpty());