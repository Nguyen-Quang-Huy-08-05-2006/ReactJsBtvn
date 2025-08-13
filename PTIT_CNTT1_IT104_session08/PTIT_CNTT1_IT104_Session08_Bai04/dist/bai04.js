"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { name: "Nguyen Van A", age: 19 };
const contact = { email: "abc@example.com", phone: "0123456789" };
const merged = mergeObjects(person, contact);
console.log(merged);
//# sourceMappingURL=bai04.js.map