function greatestCommonDivisor(num1, num2) {
    for (let divisor = 9; divisor >= 1; divisor--) {
        if (num1 % divisor == 0 && num2 % divisor == 0) {
            console.log(divisor);
            break;
        }
    }
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);