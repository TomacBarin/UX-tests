// main.js

import { Car } from "./modules/Car.js";

const garageHtml = document.querySelector("#garage");

// Tre bilar:
const car1 = new Car("Ford", "vit", "automat");
const car2 = new Car("Toyota", "blå", "växellåda");
const car3 = new Car("Mazda", "beige", "automat");

const putCarInGarage = (car) => {

    const createDiv = document.createElement("div");
    createDiv.innerHTML = car.carInfo();

    const displayCar = createDiv.firstElementChild;

    displayCar.addEventListener("click", () => {
        car.honk();
    })

    garageHtml.appendChild(displayCar)

}

putCarInGarage(car1);
putCarInGarage(car2);
putCarInGarage(car3);