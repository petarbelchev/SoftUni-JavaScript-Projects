function argumentInfo(...args) {
    let types = {};

    args.forEach(arg => {
        let type = typeof arg;
        let value = arg;

        if (!types[type]) {
            types[type] = 0;
        }

        types[type]++;

        console.log(`${type}: ${value}`)
    });

    Object.entries(types).sort((a, b) => b[1] - a[1]).forEach(type => console.log(`${type[0]} = ${type[1]}`));
}

// argumentInfo('cat', 42, function () { console.log('Hello world!'); })
argumentInfo({ name: 'bob'}, 3.333, 9.999)