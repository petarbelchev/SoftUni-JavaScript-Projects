function solve() {
    let creator = {
        mage(name) {
            let nameToLowerCase = name.toLowerCase();
            nameToLowerCase = {
                name,
                health: 100,
                mana: 100,
                cast(str) {
                    this.mana--;
                    console.log(`${this.name} cast ${str}`);
                }
            }
            return nameToLowerCase;
        },
        fighter(name) {
            let nameToLowerCase = name.toLowerCase();
            nameToLowerCase = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
            return nameToLowerCase;
        }
    }
    return creator;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);