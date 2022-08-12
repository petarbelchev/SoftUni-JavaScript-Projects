function getPreviusDay(year, month, day) {
    let date = new Date(year, month, day);
    date.setDate(day - 1);
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
}

getPreviusDay(2016, 9, 30);
getPreviusDay(2016, 10, 1);