class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.energi = 50;
    }
    introduce() {
        console.log(`Hej, jag heter ${this.name} och är ${this.age} år gammal.`)
    }

}

export default Animal;