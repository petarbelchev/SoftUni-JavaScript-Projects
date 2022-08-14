function townPopulation(arrOfStrs) {
    const tuples = arrOfStrs.map(str => str.split(' <-> '));
    const townRegistry = {};
    for (const town of tuples) {
        if (townRegistry[town[0]] == undefined) {
            townRegistry[town[0]] = 0;
        }
        townRegistry[town[0]] += Number(town[1]);
    }
    for ( let town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

townPopulation([
    'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'
]);