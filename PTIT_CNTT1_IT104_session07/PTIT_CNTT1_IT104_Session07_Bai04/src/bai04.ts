abstract class Person{
    name:string;
    constructor(name:string){
        this.name = name
    }
    displayInfo():void{}
}

class Student extends Person{
    id: string
    constructor(name:string,id:string){
        super(name)
        this.id=id
    }
    displayInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

class Teacher extends Person{
    subject:string
    constructor(name:string,subject:string){
        super(name)
        this.subject = subject
    }
    displayInfo(): void {
        console.log(`Subject: ${this.subject}, Name: ${this.name}`);
    }
}

const student = new Student("Nguyen Van A","01")
student.displayInfo()
const teacher = new Teacher("Nguyen Van B", "Math")
teacher.displayInfo()