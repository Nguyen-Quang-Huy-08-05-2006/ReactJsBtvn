"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() { }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Subject: ${this.subject}, Name: ${this.name}`);
    }
}
const student = new Student("Nguyen Van A", "01");
student.displayInfo();
const teacher = new Teacher("Nguyen Van B", "Math");
teacher.displayInfo();
//# sourceMappingURL=bai04.js.map