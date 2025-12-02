export class Box {
    constructor(color) {
        this.color = this.color;
        this.element = null;
    }

    create() {
        this.element = document.createElement("div");
        this.element.style.width = "100px";
        this.element.style.height = "100px";
        this.element.style.backgroundColor = this.color;
        this.element.style.display = "none";
        document.body.appendChild(this.element);
        console.log(`Box skapad med färg: ${this.color}`);
    }

    show() {
        
    }

}