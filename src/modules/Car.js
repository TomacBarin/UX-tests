// Car.js

export class Car {
    constructor(brand, color, transmission) {
        this.brand = brand;
        this.color = color;
        this.transmission = transmission;
    }

    carInfo() {
        return `
        <div>
        <h2>${this.brand}</h2>
        <p>Min ${this.brand} är ${this.color} och ${this.transmission}</p>
        </div>
        `
    }

    honk() {
        console.log(`När jag åker i min ${this.brand} så tjuter jag: "TUUT TUUT!`)
    }
}