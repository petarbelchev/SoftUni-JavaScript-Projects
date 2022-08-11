function mathOperations(num1, num2, str) {
    
    let result;
    
    if (str == '+') {
        result = num1 + num2;
    } else if (str == '-') {
        result = num1 - num2;
    } else if (str == '*') {
        result = num1 * num2;
    } else if (str == '/') {
        result = num1 / num2;
    } else if (str == '%') {
        result = num1 % num2;
    } else if (str == '**') {
        result = num1 ** num2;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');