function sum(str1, str2) {

    let num1 = Number(str1);
    let num2 = Number(str2);

    let sum = 0;

    for (num1; num1 <= num2; num1++) {
        sum += num1;
    }

    console.log(sum);
}

sum('1', '5');
sum('-8', '20');