"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.id = id;
        this.speed = speed;
        this.name = name;
    }
    slowDown() {
        this.speed -= 5;
    }
    speedUp() {
        this.speed += 5;
    }
    showSpeed() {
        console.log(`Current speed: ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
const bike1 = new Bicycle("ABCD01", 20, "01", 6);
bike1.showSpeed();
bike1.slowDown();
bike1.slowDown();
bike1.showSpeed();
bike1.speedUp();
bike1.showSpeed();
//# sourceMappingURL=bai02.js.map