let username: string = "Nguyen Van A"
let age: number = 20
let job: string = "coder"

const printInfo = (name: string, age:number, job:string): void =>{
    console.log(`Name: ${name}`)
    console.log(`Age: ${age}`)
    console.log(`job: ${job}`)
};

printInfo(username, age, job)