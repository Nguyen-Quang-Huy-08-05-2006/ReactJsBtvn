class Vehicle{
    protected name:string
    protected speed:number
    protected id:string
    constructor(name:string,speed:number,id:string){
        this.id = id
        this.speed = speed
        this.name = name
    }

    slowDown():void{
        this.speed -= 5
    }

    speedUp():void{
        this.speed += 5
    }

    showSpeed():void{
        console.log(`Current speed: ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle{
    private gear:number
    constructor(name:string,speed:number,id:string,gear:number){
        super(name,speed,id)
        this.gear = gear
    }
}

const bike1 = new Bicycle("ABCD01",20,"01",6)
bike1.showSpeed()
bike1.slowDown()
bike1.slowDown()
bike1.showSpeed()
bike1.speedUp()
bike1.showSpeed()
