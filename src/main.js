// main.js

import { Animal } from "./modules/Animal.js";

const divHtml = document.querySelector("#djurhem");

const animal1 = new Animal("Findus", "katt", "mjau", "3")
const animal2 = new Animal("Bello", "hund", "voff voff", "5")
const animal3 = new Animal("Pippi", "kanin", "miip", "2")
const animal4 = new Animal("Kalle", "papegoja", "kraaak, hejsan", "12")

const myAnimals = (animal) => {
    
    const displayAnimal = document.createElement("div");
    displayAnimal.classList.add("animal");
    displayAnimal.innerHTML = animal.getCard();

    // click-event
    displayAnimal.addEventListener("click", () => {
        animal.makeSound();
    })

    // Printa nu på sida
    divHtml.appendChild(displayAnimal);


}
//Vanlig print.
// myAnimals(animal1)
// myAnimals(animal2)
// myAnimals(animal3)
// myAnimals(animal4)

// For each-print
const allAnimals = [animal1, animal2, animal3, animal4];
allAnimals.forEach(myAnimals);
