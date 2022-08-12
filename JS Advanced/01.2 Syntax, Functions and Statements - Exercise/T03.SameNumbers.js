function sameNumbers(number) {

    let str = String(number);
    let isSameDigits = true;

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i + 1] != str[i]) {
            isSameDigits = false;
        }
    }

    let sum = 0;
    
    for (let j = 0; j < str.length; j++) {
        sum += Number(str[j]);
    }

    console.log(isSameDigits);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);