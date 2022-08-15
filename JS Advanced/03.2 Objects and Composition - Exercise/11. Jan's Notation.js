function notation(arr) {
    let nums = [];
    for (const item of arr) {
        if (typeof item == 'number') nums.push(item);
        else {
            if (nums.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else {
                let secondNum = nums.pop();
                let firstNum = nums.pop();
                if (item == '+') nums.push(firstNum + secondNum);
                else if (item == '-') nums.push(firstNum - secondNum);
                else if (item == '*') nums.push(firstNum * secondNum);
                else if (item == '/') nums.push(firstNum / secondNum);
            }
        }
    }
    if (nums.length == 1) console.log(nums[0]);
    else if (nums.length > 1) console.log('Error: too many operands!');
}

notation([
    3,
    4,
    '+'
])

notation([
    5,
    3,
    4,
    '*',
    '-'
])

notation([
    7,
    33,
    8,
    '-'
])

notation([
    15,
    '/'
])

notation([
    31,
    2,
    '+',
    11,
    '/'
])

notation([15, '/']);