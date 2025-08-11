class Students {
    private id : string;
    private name : string;
    constructor(id:string,name:string){
        this.id = id
        this.name = name
    }

    getId():string{
        return this.id
    }

    getName():string{
        return this.name
    }

    setName(newName:string):void{
        this.name = newName
    }
}

let allStudents : Students[] = []

class Classroom{
    student:Students[] = []
    constructor(student:Students[]=[] ){
        this.student = student
    }

    showStudents():void{
        this.student.forEach(a=>{
            console.log(`${a.getName()}, ID: ${a.getId()}`);
        })
    }

    addStudent(student:Students):void{
        this.student.push(student)
    }

    filterStudent(id:string):Students | undefined{
        return this.student.find(a=>
            a.getId()===id)
    }

    addStudentInClass(studentId:string):void{
        let i = allStudents.findIndex(a =>
             a.getId() === studentId)
        if(i!==-1){
            let temp = allStudents[i]
            this.student.push(temp)
            allStudents.splice(i,1)
        }else{
            console.log(`Khong tim thay sinh vien co id ${studentId}`);
        }
    }

    removeStudent(studentId:string):void{
        let i = this.student.findIndex(a =>
             a.getId() === studentId)
        if(i!==-1){
            let temp = this.student[i]
            allStudents.push(temp)
            this.student.splice(i,1)
        }else{
            console.log(`Khong tim thay sinh vien co id ${studentId}`);
        }
    }

    editStudent(studentId:string, newName:string):void{
        let find = this.student.find(a =>
             a.getId() === studentId)
        if(find){
            find.setName(newName)
        }else{
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

classA.removeStudent("S1")
classA.removeStudent("S5")

classB.editStudent("S4", "Nguyen Quang Huy")

classA.showStudents();
classB.showStudents();