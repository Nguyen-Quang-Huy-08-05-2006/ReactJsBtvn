interface changeSpeed{
    speedUp():void
    slowDown():void
    stop():void
}

class Vehicle implements changeSpeed{
    private speed:number 
    constructor(speed:number){
        this.speed = speed
    }

    slowDown(): void {
        this.speed -= 5
        console.log(`Current speed: ${ this.speed} km/h`);
    }

    stop(): void {
        this.speed = 0
        console.log(`current speed: ${ this.speed } km/h`);
        
    }

    speedUp(): void {
        this.speed += 5
        console.log(`current speed: ${this.speed} km/h`);
    }
}

const myVehicle = new Vehicle(50)
myVehicle.speedUp()
myVehicle.slowDown()
myVehicle.stop()