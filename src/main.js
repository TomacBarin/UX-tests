import { Car } from "./modules/Car.js";

const car1 = new Car("Yugo", "rostiga")
console.log(`Min ${car1.color} ${car1.brand} är familjens stolthet.`)
const car2 = new Car("Lada Riva", "röda")
console.log(`Min ${car2.color} ${car2.brand} gör alla Tesla-ägare gröna av avund.`)
car1.honk()