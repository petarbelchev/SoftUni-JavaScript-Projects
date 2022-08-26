function add(a) {
    function inner(b) {
        a += b;
        return inner;
    }
    inner.toString = () => {
        return a;
    }
    return inner;
}

console.log(add(1)(6)(-3).toString());