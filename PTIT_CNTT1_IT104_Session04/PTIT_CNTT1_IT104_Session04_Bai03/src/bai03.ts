type Student ={
    name:string,
    age: number,
    email: string, 
}

const printInfo = (student:Student)=>{
    console.log(`Xin chao toi la ${student.name}, toi ${student.age} tuoi, email cua toi la ${student.email}`)
}

const Student1:Student={
    name: "Nguyen Van A",
    age: 20,
    email: "abc@gmail.com"
}
printInfo(Student1);