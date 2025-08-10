"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(value) {
        this.width = value;
    }
    setHeight(value) {
        this.height = value;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 10);
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Diện tích: ${rect.getArea()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
rect.setWidth(8);
rect.setHeight(12);
console.log("Sau khi cập nhật:");
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Diện tích: ${rect.getArea()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
//# sourceMappingURL=bai05.js.map