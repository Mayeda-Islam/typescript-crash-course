"use strict";
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
console.log(divide(10, 2));
const result = divide(10, 2);
const pointresult = result.toFixed(2);
console.log(pointresult);
