interface Geometry{
    calculateArea() : number
    calculatePerimeter() : number
}

class Circle implements Geometry{
    private radius: number

    constructor(radius:number ){
        this.radius = radius
    }

    calculateArea(): number{
        return Math.PI * this.radius * this.radius
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2
    }
}

class Rectangle implements Geometry{
    private width: number
    private height: number

    constructor(width:number,height:number){
        this.height = height
        this.width = width
    }

    calculateArea(): number {
        return this.width * this.height
    }

    calculatePerimeter(): number {
        return (this.height + this.width) * 2
    }
}

const shapes: Geometry[] = [
    new Circle(5),
    new Rectangle(10, 20)
];

shapes.forEach(shape => {
    console.log("Area:", shape.calculateArea());
    console.log("Perimeter:", shape.calculatePerimeter());
    console.log("------------------");
});