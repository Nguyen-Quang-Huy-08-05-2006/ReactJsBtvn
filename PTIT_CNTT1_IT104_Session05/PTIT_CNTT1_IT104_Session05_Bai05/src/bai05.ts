class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getWidth(): number {
        return this.width;
    }
    public getHeight(): number {
        return this.height;
    }
    public setWidth(value: number): void {
        this.width = value;
    }
    public setHeight(value: number): void {
        this.height = value;
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
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