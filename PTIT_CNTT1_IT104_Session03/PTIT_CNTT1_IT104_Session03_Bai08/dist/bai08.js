"use strict";
let num1 = "1";
let num2 = 2;
let math = (num1, num2) => {
    if (!Number(num1) || !Number(num2)) {
        console.log("Invalid input");
    }
    console.log(`Cong: ${num1 + num2}`);
    console.log(`Tru: ${num1 - num2}`);
    console.log(`Nhan: ${num1 * num2}`);
    console.log(`Chia: ${num1 / num2}`);
};
//# sourceMappingURL=bai08.js.map