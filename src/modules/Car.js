// Car.js

export class Car {
    constructor(brand, color, transmission) {
        this.brand = brand;
        this.color = color;
        this.transmission = transmission;
    }

    honk() {
        console.log(`Min ${this.brand} säger: "TUUT TUUT!`)
    }

    carInfo() {
        return `
        <div>
        <h2>${this.brand}</h2>
        <p>Min ${this.brand} är ${this.color} och ${this.transmission}.</p>
        </div>
        `
    }


}