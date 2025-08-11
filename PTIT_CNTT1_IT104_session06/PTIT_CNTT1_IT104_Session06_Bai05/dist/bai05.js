"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    slowDown() {
        this.speed -= 5;
        console.log(`Current speed: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`current speed: ${this.speed} km/h`);
    }
    speedUp() {
        this.speed += 5;
        console.log(`current speed: ${this.speed} km/h`);
    }
}
const myVehicle = new Vehicle(50);
myVehicle.speedUp();
myVehicle.slowDown();
myVehicle.stop();
//# sourceMappingURL=bai05.js.map