function carFactory(requirements) {
    let car = {
        model: requirements.model,
        engine: getEngine(requirements.power),
        carriage: getCarriage(requirements.carriage, requirements.color),
        wheels: getWheels(requirements.wheelsize)
    };

    return car;

    function getEngine(minPower) {
        const smallEngine = { power: 90, volume: 1800 };
        const normalEngine = { power: 120, volume: 2400 };
        const monsterEngine = { power: 200, volume: 3500 };

        if (minPower < smallEngine.power) return smallEngine;
        else if (minPower < normalEngine.power) return normalEngine;
        else return monsterEngine;
    }

    function getCarriage(type, color) {
        const hatchback = { type: 'hatchback', color: color };
        const coupe = { type: 'coupe', color: color };

        if (type == 'hatchback') return hatchback;
        else if (type == 'coupe') return coupe;
    }

    function getWheels(size) {
        if (size % 2 == 0) size--;
        return [size, size, size, size];
    }
}

console.log(carFactory(
    {
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));

console.log(carFactory(
    {
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));