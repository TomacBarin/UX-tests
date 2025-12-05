export class Animal {
    constructor(name, species, sound, age) {
        this.name = name;
        this.species = species;
        this.sound = sound;
        this.age = age;
    }

    makeSound() {
        console.log(`${this.name} säger: "${this.sound}"!`);
    }

    getCard() {
        return `
        <h2>Info om ${this.name}</h2>
        <p>${this.name} är en ${this.species} som är ${this.age} år gammal. När den pratar säger den "${this.sound}".</p>
    `   
    }

}