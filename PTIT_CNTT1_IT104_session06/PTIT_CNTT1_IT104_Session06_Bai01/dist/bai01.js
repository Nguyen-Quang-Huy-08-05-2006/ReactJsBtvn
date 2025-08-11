"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
        this.getSize();
    }
    getSize() {
        console.log(`chieu rong = ${this.width}, chieu cao = ${this.height}, dien tich = ${this.height * this.width}, chu vi = ${(this.height + this.width) * 2}`);
    }
}
const shape = [
    new Rectangle("Hinh chu nhat", 30, 20),
];
//# sourceMappingURL=bai01.js.map