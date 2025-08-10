class Student {
    id: number;
    age: number;
    email: string;

    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }

    printInfo(): void {
        console.log(`ID: ${this.id}, Age: ${this.age}, Email: ${this.email}`);
    }
}

let students: Student[] = [];

students.push(new Student(1, 10, "sv1@gmail.com"));
students.push(new Student(2, 11, "sv2@gmail.com"));
students.push(new Student(3, 12, "sv3@gmail.com"));

for (let student of students) {
    student.printInfo();
}