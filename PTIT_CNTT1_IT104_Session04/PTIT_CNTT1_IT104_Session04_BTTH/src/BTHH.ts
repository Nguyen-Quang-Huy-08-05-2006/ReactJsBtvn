type Subjects={
    subjectName: string,
    score: number | string,
}
type Student = {
    id: number,
    name: string,
    age: number | string,
    subject: Subjects[]
}

//ham them sv
const students:Student[] = []

const createStudent = (student : Student)=>{
    students.push(student)
};

const updateStudent = (id:number, newStudent: Student) => {
    const findStudent = students.findIndex((st)=>st.id === id)
     if(findStudent!=-1 ){
        students.splice(findStudent,1);
    }else{
        students[findStudent].id = newStudent.id;
        students[findStudent].name = newStudent.name;
        students[findStudent].age = newStudent.age;
        students[findStudent].subject = newStudent.subject;
    }
}

const deleteStudent = (id:number): void=>{
    const findStudent = students.findIndex((st)=>st.id === id)
    if(findStudent!==-1){
        students.splice(findStudent,1);
    }else{
        console.log("Khong tim thay sv");
        
    }
}

const isNum = (score: string | number) =>{
    return typeof(score) === "number"  ;
}

const convertScoreToNumber = (score:string):number =>{
    const scoreMap: {[key: string]:number}={
        A: 10,
        B: 8,
        C: 6,
        D: 4,
    }

    return scoreMap[score]??0;
}

const calculateAvg = (student: Student)=>{
    const total  = student.subject.reduce((sum, subject)=>{
        if(isNum ( subject.score)){
            return sum + subject.score;
        }else{
            return sum + convertScoreToNumber(subject.score);
        }
    },0)
    return  total / student.subject.length;;
}

calculateAvg({
    id: 1,
    name: "Nguyen Van A",
    age: 20,
    subject:[
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