"use strict";
//ham them sv
const students = [];
const createStudent = (student) => {
    students.push(student);
};
const updateStudent = (id, newStudent) => {
    const findStudent = students.findIndex((st) => st.id === id);
    if (findStudent != -1) {
        students.splice(findStudent, 1);
    }
    else {
        students[findStudent].id = newStudent.id;
        students[findStudent].name = newStudent.name;
        students[findStudent].age = newStudent.age;
        students[findStudent].subject = newStudent.subject;
    }
};
const deleteStudent = (id) => {
    const findStudent = students.findIndex((st) => st.id === id);
    if (findStudent !== -1) {
        students.splice(findStudent, 1);
    }
    else {
        console.log("Khong tim thay sv");
    }
};
const isNum = (score) => {
    return typeof (score) === "number";
};
const convertScoreToNumber = (score) => {
    var _a;
    const scoreMap = {
        A: 10,
        B: 8,
        C: 6,
        D: 4,
    };
    return (_a = scoreMap[score]) !== null && _a !== void 0 ? _a : 0;
};
const calculateAvg = (student) => {
    const total = student.subject.reduce((sum, subject) => {
        if (isNum(subject.score)) {
            return sum + subject.score;
        }
        else {
            return sum + convertScoreToNumber(subject.score);
        }
    }, 0);
    return total / student.subject.length;
    ;
};
calculateAvg({
    id: 1,
    name: "Nguyen Van A",
    age: 20,
    subject: [
        {
            score: "A",
            subjectName: "HTML"
        },
        {
            score: "B",
            subjectName: "C++",
        }
    ]
});
//# sourceMappingURL=BTHH.js.map