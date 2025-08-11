"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return Math.PI * this.radius * 2;
    }
}
class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.height + this.width) * 2;
    }
}
const shapes = [
    new Circle(5),
    new Rectangle(10, 20)
];
shapes.forEach(shape => {
    console.log("Area:", shape.calculateArea());
    console.log("Perimeter:", shape.calculatePerimeter());
    console.log("------------------");
});
//# sourceMappingURL=bai04.js.map