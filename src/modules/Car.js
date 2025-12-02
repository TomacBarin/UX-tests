export class Car {
    constructor(brand, color) {
        this.brand = brand
        this.color = color
    }
    honk() {
        console.log(`Den ${this.color} ${this.brand} säger: TUT TUT, WHEEE!`)
    }
}