function carFactory(requirements) {
    let engines = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    let carriages = [
        { type: 'hatchback', color: requirements.color },
        { type: 'coupe', color: requirements.color }
    ];

    function wheels(wheelsize) {
        if (wheelsize % 2 == 0) wheelsize--;
        return [wheelsize, wheelsize, wheelsize, wheelsize];
    }

    let car = {
        model: requirements.model,
        engine: engines.find(e => e.power >= requirements.power),
        carriage: carriages.find(c => c.type == requirements.carriage),
        wheels: wheels(requirements.wheelsize)
    };
    
    return car;
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