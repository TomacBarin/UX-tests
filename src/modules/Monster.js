// Monster.js

export class Monster {
    constructor(name, color, eyes, scaryLevel) {
        this.name = name;
        this.color = color;
        this.eyes = eyes;
        this.scaryLevel = scaryLevel;
    }

    roar() {
        console.log(`När ${this.name} vrålar börjar skogens alla träd barra av skräck!`)
    }

    getCard() {
        return `
        <h2>${this.name}</h2>
        <p>${this.name} är ${this.color}, har ${this.eyes} ögon och ligger på läskighetsnivå ${this.scaryLevel}.</p>
        `
        }
        
}