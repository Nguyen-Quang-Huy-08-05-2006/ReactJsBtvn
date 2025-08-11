"use strict";
class Students {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let allStudents = [];
class Classroom {
    constructor(student = []) {
        this.student = [];
        this.student = student;
    }
    showStudents() {
        this.student.forEach(a => {
            console.log(`${a.getName()}, ID: ${a.getId()}`);
        });
    }
    addStudent(student) {
        this.student.push(student);
    }
    filterStudent(id) {
        return this.student.find(a => a.getId() === id);
    }
    addStudentInClass(studentId) {
        let i = allStudents.findIndex(a => a.getId() === studentId);
        if (i !== -1) {
            let temp = allStudents[i];
            this.student.push(temp);
            allStudents.splice(i, 1);
        }
        else {
            console.log(`Khong tim thay sinh vien co id ${studentId}`);
        }
    }
    removeStudent(studentId) {
        let i = this.student.findIndex(a => a.getId() === studentId);
        if (i !== -1) {
            let temp = this.student[i];
            allStudents.push(temp);
            this.student.splice(i, 1);
        }
        else {
            console.log(`Khong tim thay sinh vien co id ${studentId}`);
        }
    }
    editStudent(studentId, newName) {
        let find = this.student.find(a => a.getId() === studentId);
        if (find) {
            find.setName(newName);
        }
        else {
            console.log(`Khong tim thay sinh vien co id ${studentId}`);
        }
    }
}
allStudents = [
    new Students("S1", "Nguyen Van A"),
    new Students("S2", "Nguyen Van B"),
    new Students("S3", "Nguyen Van C"),
    new Students("S4", "Nguyen Van D"),
    new Students("S5", "Nguyen Van E"),
    new Students("S6", "Nguyen Van F")
];
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass("S1");
classA.addStudentInClass("S2");
classA.addStudentInClass("S3");
classB.addStudentInClass("S4");
classB.addStudentInClass("S5");
classB.addStudentInClass("S6");
classA.showStudents();
classB.showStudents();
console.log(allStudents);
classA.removeStudent("S1");
classA.removeStudent("S5");
classB.editStudent("S4", "Nguyen Quang Huy");
classA.showStudents();
classB.showStudents();
//# sourceMappingURL=bai07.js.map