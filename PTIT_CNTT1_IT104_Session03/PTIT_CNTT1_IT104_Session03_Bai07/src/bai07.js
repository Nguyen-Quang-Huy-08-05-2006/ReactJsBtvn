"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = "banana";
let b = "Hello World";
let temp = "";
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (!temp.includes(element)) {
        temp += element;
    }
}
console.log(temp);
temp = "";
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    if (!temp.includes(element)) {
        temp += element;
    }
}
console.log(temp);
//# sourceMappingURL=bai07.js.map