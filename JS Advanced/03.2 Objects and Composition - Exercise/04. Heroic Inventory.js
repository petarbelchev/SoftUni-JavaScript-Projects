function registerCreator(arr) {
    let arrOfHeroes = [];
    for (const heroStr of arr) {
        let [name, level, items] = heroStr.split(' / ');
        arrOfHeroes.push({
            name: name,
            level: Number(level),
            items: items ? items.split(', ') : []
        });
    }
    return JSON.stringify(arrOfHeroes);
}

console.log(registerCreator(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]
));

console.log(registerCreator(
    ['Jake / 1000 / Gauss, HolidayGrenade']
));