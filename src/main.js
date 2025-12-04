// main.js

import { Car } from "./modules/Car.js";

const garageHtml = document.querySelector("#garage");

// Tre bilar:
const car1 = new Car("Ford", "vit", "automat");
const car2 = new Car("Toyota", "blå", "växellåda");
const car3 = new Car("Mazda", "beige", "automat");

const putCarInGarage = (car) => {
    // console.log("Jag fick bilen: ", car.brand);

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = car.carInfo();

    // console.log("Här är hela tempDiv: ", tempDiv)
    // console.log("Här är det riktiga bilkortet inuti: ", tempDiv.firstElementChild)

    const card = tempDiv.firstElementChild;

    card.addEventListener("click", () => {
        car.honk();
    })

    garageHtml.appendChild(card)
}

putCarInGarage(car1);
putCarInGarage(car2);
putCarInGarage(car3);