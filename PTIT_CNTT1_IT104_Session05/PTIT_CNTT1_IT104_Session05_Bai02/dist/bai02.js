"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    printInfo() {
        console.log(`ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}
let students = [];
students.push(new Student(1, 10, "sv1@gmail.com"));
students.push(new Student(2, 11, "sv2@gmail.com"));
students.push(new Student(3, 12, "sv3@gmail.com"));
for (let student of students) {
    student.printInfo();
}
//# sourceMappingURL=bai02.js.map