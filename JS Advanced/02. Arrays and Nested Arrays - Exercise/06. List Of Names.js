function solve(arrOfNames) {
    let num = 1;
    for (let name of arrOfNames.sort((a, b) => a.localeCompare(b))) {
        console.log(`${num++}.${name}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);