class Student {
  constructor(id, name, age, score) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.score = score;
  }
}

const sutdent1 = new Student(1, "Nguyen Van A", 20, [100, 70, 60]);
const sutdent2 = new Student(2, "Nguyen Van B", 21, [10, 40, 39]);
const sutdent3 = new Student(3, "Nguyen Van C", 20, [90, 80, 54]);
const sutdent4 = new Student(4, "Nguyen Van D", 24, [100, 70, 78]);
const sutdent5 = new Student(5, "Nguyen Van E", 22, [23, 79, 60]);

const studentList = [sutdent1, sutdent2, sutdent3, sutdent4, sutdent5];

const getStudentById = (studentList, id) => {
  const findStudent = studentList.find((student) => student.id === id);

  return findStudent;
};

const resultFind = getStudentById(studentList, 1);
if (!resultFind) {
  console.log("cannot find");
} else {
  console.log("found :", resultFind);
}
