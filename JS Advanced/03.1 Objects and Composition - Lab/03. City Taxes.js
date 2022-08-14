function cityTaxes(name, population, treasury) {
    const newCity = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() { Math.floor(this.treasury += this.population * this.taxRate); },
        applyGrowth(percentage) { Math.floor(this.population += this.population * (percentage / 100)); },
        applyRecession(percentage) { Math.floor(this.treasury -= this.treasury * (percentage / 100)); }
    }
    return newCity;
}

city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);