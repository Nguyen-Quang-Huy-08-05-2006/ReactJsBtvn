"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() { }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    printName() {
        console.log(this.name);
    }
    makeNoise() {
        console.log("Meo Meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    printName() {
        console.log(this.name);
    }
    makeNoise() {
        console.log("Gau gau");
    }
}
const dog1 = new Dog("Husky");
dog1.printName();
dog1.makeNoise();
const cat1 = new Cat("ABCD");
cat1.printName();
cat1.makeNoise();
//# sourceMappingURL=bai03.js.map