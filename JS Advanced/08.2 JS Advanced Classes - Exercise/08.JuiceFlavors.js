function result(arr) {
    let juices = {};
    let bottles = {};
    
    arr.forEach(juice => {
        let juiceData = juice.split(' => ');
        let name = juiceData[0];
        let qty = Number(juiceData[1]);

        if (!juices[name]) {
            juices[name] = 0;
        }
        juices[name] += qty;

        if (juices[name] >= 1000) {
            let bottlesQty = Math.trunc(juices[name] / 1000);
            juices[name] -= bottlesQty * 1000;

            if (!bottles[name]) {
                bottles[name] = 0;
            }
            bottles[name] += bottlesQty;
        }
    });

    for (const [juice, qty] of Object.entries(bottles)) {
        console.log(`${juice} => ${qty}`);
    }
}

result([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);

result([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);