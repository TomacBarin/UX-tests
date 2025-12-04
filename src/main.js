// main.js

import { Car } from "./modules/Car.js";

const garageHtml = document.querySelector("#garage");

const car1 = new Car("Lada", "röd", "automat");
const car2 = new Car("Yugo", "brun", "växellåda");
const car3 = new Car("Mercedes", "silver", "automat");

const myGarage = (car) => {
    const carDisplay = document.createElement("div");
    carDisplay.classList.add("car");
    carDisplay.innerHTML = car.carInfo();

    carDisplay.addEventListener("click", () => {
        car.honk();
    })

    garageHtml.appendChild(carDisplay);
}

myGarage(car1);
myGarage(car2);
myGarage(car3);