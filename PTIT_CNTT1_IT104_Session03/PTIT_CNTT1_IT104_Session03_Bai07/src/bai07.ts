let a:string = "banana"
let b:string = "Hello World"
let temp: string = ""


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (!temp.includes(element)) {
        temp+=element
    }
}
console.log(temp);

temp = ""

for (let index = 0; index < b.length; index++) {
    const element = b[index];
    if (!temp.includes(element)) {
        temp+=element
    }
}
console.log(temp);