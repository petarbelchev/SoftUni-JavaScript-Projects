class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let lookedPlant = this.plants.find(plant => plant.plantName == plantName);

        if (lookedPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (lookedPlant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        lookedPlant.ripe = true;
        lookedPlant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let lookedPlant = this.plants.find(plant => plant.plantName == plantName);

        if (lookedPlant == undefined) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (lookedPlant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.spaceAvailable += lookedPlant.spaceRequired;
        this.storage.push({ plantName: lookedPlant.plantName, quantity: lookedPlant.quantity });
        this.plants.splice(this.plants.indexOf(lookedPlant), 1);
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = [];
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        
        report.push(`The garden has ${this.spaceAvailable} free space left.`)
        report.push('Plants in the garden: ' + this.plants.map(p => p.plantName).join(', '));

        if(this.storage.length == 0) {
            report.push('Plants in storage: The storage is empty.');
        } else {
            report.push('Plants in storage: ' + this.storage.map(p => `${p.plantName} (${p.quantity})`).join(', '));
        }

        return report.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());