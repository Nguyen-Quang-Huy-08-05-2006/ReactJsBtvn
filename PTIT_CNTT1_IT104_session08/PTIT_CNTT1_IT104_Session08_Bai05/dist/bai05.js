"use strict";
function findFirst(arr) {
    for (let item of arr) {
        if (typeof item === "number" && item % 2 === 0) {
            return item;
        }
    }
    return undefined;
}
console.log(findFirst([1, 3, 4, 5, 6]));
console.log(findFirst(["a", "b", 2, 4]));
//# sourceMappingURL=bai05.js.map