function moneyCalculator(fruit, weightInGrams, pricePerKilo) {
    let weight = weightInGrams / 1000;
    let money = weight * pricePerKilo;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
moneyCalculator('orange', 2500, 1.80);
moneyCalculator('apple', 1563, 2.35);