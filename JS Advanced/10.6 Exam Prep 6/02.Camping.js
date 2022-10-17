class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (this.listOfParticipants.some(p => p.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }

        if (this.priceForTheCamp[condition] > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        let index = this.listOfParticipants.findIndex(p => p.name == name);

        if (index == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let firstParticipant = this.listOfParticipants.find(p => p.name == participant1);

        if (!firstParticipant) {
            throw new Error(`Invalid entered name/s.`);
        }

        if (typeOfGame == 'Battleship') {
            firstParticipant.power += 20;
            return `The ${firstParticipant.name} successfully completed the game ${typeOfGame}.`;

        } else if (typeOfGame == 'WaterBalloonFights') {
            let secondParticipant = this.listOfParticipants.find(p => p.name == participant2);

            if (!secondParticipant) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (firstParticipant.condition != secondParticipant.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (firstParticipant.power == secondParticipant.power) {
                return `There is no winner.`;
            }

            let winner = null;

            if (firstParticipant.power > secondParticipant.power) {
                winner = firstParticipant;
            } else {
                winner = secondParticipant;
            }

            winner.wins++;
            return `The ${winner.name} is winner in the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        this.listOfParticipants
            .sort((a,b) => b.wins - a.wins)
            .forEach(p => result.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        
        return result.join('\n');
    }
}


// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());

