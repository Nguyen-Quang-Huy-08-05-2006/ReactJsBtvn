"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone number: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfoManager() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone number: ${this.getPhone()}`);
        console.log(`Team size: ${this.teamSize}`);
    }
}
const employee = new Employee("Nguyen Van A", "Cong Ty TNHH A", "0123456789");
employee.printInfo();
const manager = new Manager("Nguyen Van B", "Cong ty TNHH A", "0987654321", 10);
manager.printInfoManager();
//# sourceMappingURL=bai01.js.map