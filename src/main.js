// main.js

import { Car } from "./modules/Car.js";

const garageHtml = document.querySelector("#garage");

// Tre bilar:
const car1 = new Car("Ford", "vit", "automat");
const car2 = new Car("Toyota", "blå", "växellåda");
const car3 = new Car("Mazda", "beige", "automat");

const putCarInGarage = (car) => {
    // Skapa div
    const carDiv = document.createElement("div");
    // Skapa .class "car"
    carDiv.classList.add("car");
    // Fyll hela divven med HTML-strängen från carInfo()
    carDiv.innerHTML = car.carInfo();
    // Gör så att du kan klicka och skriva "tut" i domen
    carDiv.addEventListener("click", () => {
        car.honk()
    })

    // Lägg in hela carDiv i garaget
    garageHtml.appendChild(carDiv)
}

putCarInGarage(car1);
putCarInGarage(car2);
putCarInGarage(car3);