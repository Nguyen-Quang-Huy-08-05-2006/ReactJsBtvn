abstract class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    abstract makeNoise():void
    printName():void {}
}

class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    printName(): void {
        console.log(this.name);
    }
    makeNoise(): void {
        console.log("Meo Meo");
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    printName(): void {
        console.log(this.name);
    }
    makeNoise(): void {
        console.log("Gau gau");
    }
}

const dog1 = new Dog("Husky")
dog1.printName()
dog1.makeNoise()
const cat1 = new Cat("ABCD")
cat1.printName()
cat1.makeNoise()
