"use strict";
function findElement(arr, value) {
    for (let item of arr) {
        if (item === value) {
            return item;
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], 3));
console.log(findElement(["a", "b", "c"], "b"));
console.log(findElement([true, false, true], false));
console.log(findElement([1, 2, 3], 5));
//# sourceMappingURL=bai06.js.map