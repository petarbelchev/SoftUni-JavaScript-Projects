function printRectangle(size = 5) {
    for (let i = 0; i < size; i++) {
        console.log('* '.repeat(size))
    }
}

printRectangle(1);
printRectangle(2);
printRectangle(5);
printRectangle(7);