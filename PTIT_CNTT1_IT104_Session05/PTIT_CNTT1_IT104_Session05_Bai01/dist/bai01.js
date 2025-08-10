"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`Ten: ${this.name}, Nam san xuat: ${this.year}, Hang: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Camry", 2022, "Toyota");
vehicle1.printInfo();
vehicle2.printInfo();
//# sourceMappingURL=bai01.js.map