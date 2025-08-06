let num1: number | string = "1"
let num2: number | string = 2

let math = (num1: number | string,num2: number | string ): void =>{
    if(!Number(num1)||!Number(num2)){
        console.log("Invalid input");
    }
    console.log(`Cong: ${num1 + num2}`)
    console.log(`Tru: ${num1 - num2}`)
    console.log(`Nhan: ${num1 * num2}`)
    console.log(`Chia: ${num1 / num2}`)
};