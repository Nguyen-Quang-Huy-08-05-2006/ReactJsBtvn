function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person = { name: "Nguyen Van A", age: 19 };
const contact = { email: "abc@example.com", phone: "0123456789" };

const merged = mergeObjects(person, contact);
console.log(merged);
