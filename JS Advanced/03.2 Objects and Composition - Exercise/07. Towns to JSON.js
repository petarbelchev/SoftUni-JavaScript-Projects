function townsToJson(arr) {
    let arrOfObj = [];
    let arrOfTownsData = arr.map(str => str.split('|').map(str => str.trim()).filter(str => str.length > 0));
    for (let i = 1; i < arrOfTownsData.length; i++) {
        arrOfObj.push(objCreator(arrOfTownsData[i]));
    }
    console.log(JSON.stringify(arrOfObj));

    function objCreator(arrOfTownData) {
        return {
            Town: arrOfTownData[0],
            Latitude: Number(Number(arrOfTownData[1]).toFixed(2)),
            Longitude: Number(Number(arrOfTownData[2]).toFixed(2))
        }
    }
}

townsToJson([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);

townsToJson([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);