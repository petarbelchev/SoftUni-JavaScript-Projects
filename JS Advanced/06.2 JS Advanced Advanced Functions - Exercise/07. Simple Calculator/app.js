function calculator() {
    let num1Field;
    let num2Field;
    let resultField;

    return {        
        init(selector1, selector2, resultSelector) {
            num1Field = document.querySelector(selector1);
            num2Field = document.querySelector(selector2);
            resultField = document.querySelector(resultSelector);
        },
        add: () => resultField.value = Number(num1Field.value) + Number(num2Field.value),
        subtract: () => resultField.value = Number(num1Field.value) - Number(num2Field.value)
    }
}