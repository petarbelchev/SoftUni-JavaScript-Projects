function calorieObject(arrOfStrs) {
    let object = {};
    for (let i = 0; i < arrOfStrs.length - 1; i += 2) {
        object[arrOfStrs[i]] = Number(arrOfStrs[i + 1]);
    }
    console.log(object)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])