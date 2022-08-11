function aggregateElements(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    console.log(sum);
    sum = 0;
    for (let j = 0; j < input.length; j++) {
        sum += 1 / input[j];
    }
    console.log(sum);
    sum = "";
    for (let k = 0; k < input.length; k++) {
        sum += String(input[k]);
    }
    console.log(sum);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);