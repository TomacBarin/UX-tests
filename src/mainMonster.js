// main.js

import { Monster } from "./modules/Monster.js";

const divHtml = document.querySelector("#monsterbok");

const monster1 = new Monster("Fritz", "rosa", "tre", "7");
const monster2 = new Monster("Hasse", "ljusblå", "två", "4");
const monster3 = new Monster("Milfred", "beige", "sex", "2");
const monster4 = new Monster("Måns", "vit", "fyra", "9");

const monsterBook = (monster) => {
    const monsterInfo = document.createElement("div");
    monsterInfo.classList.add("monster");
    monsterInfo.innerHTML = monster.getCard();

    monsterInfo.addEventListener("click", () => {
        monster.roar();
    })

    divHtml.appendChild(monsterInfo);
}

monsterBook(monster1)
monsterBook(monster2)
monsterBook(monster3)
monsterBook(monster4)