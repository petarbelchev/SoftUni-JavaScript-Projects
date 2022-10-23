class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let names = [];

        footballPlayers.forEach(player => {
            let [name, age, playerValue] = player.split('/');

            const currPlayer = this.invitedPlayers.find(p => p.name == name);

            if (currPlayer) {
                if (currPlayer.playerValue > playerValue) {
                    currPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
            }

            names.push(name);
        });

        return `You successfully invite ${names.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');

        const currPlayer = this.invitedPlayers.find(p => p.name == name);

        if (!currPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (playerOffer < currPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currPlayer.playerValue - playerOffer} million more are needed to sign the contract!`);
        }

        currPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        const currPlayer = this.invitedPlayers.find(p => p.name == name);

        if (!currPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (currPlayer.age < age) {
            let difference = age - currPlayer.age;

            if (difference < 5) {
                return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let result = ["Players list:"];

        this.invitedPlayers
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(p => {
                result.push(`Player ${p.name}-${p.playerValue}`);
            });
        
        return result.join('\n');
    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));


// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());