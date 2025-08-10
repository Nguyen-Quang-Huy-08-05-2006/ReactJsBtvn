"use strict";
class Employee {
    constructor(id, name, company, phone) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
const emp = new Employee(1, "Quang Duy Manh", "fpt Corp", "0365303096");
emp.printInfo();
//# sourceMappingURL=bai04.js.map