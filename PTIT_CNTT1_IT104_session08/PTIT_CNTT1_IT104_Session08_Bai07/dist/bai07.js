"use strict";
function flatten(arr) {
    let result = [];
    for (let subArr of arr) {
        result = result.concat(subArr);
    }
    return result;
}
console.log(flatten([[1, 2], [3, 4], [5, 6]]));
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
//# sourceMappingURL=bai07.js.map