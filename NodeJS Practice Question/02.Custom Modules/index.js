const arithmetic = require('./operations');

const a = 10;
const b = 5;

console.log(`a + b = ${arithmetic.add(a, b)}`);
console.log(`a - b = ${arithmetic.subtract(a, b)}`);
console.log(`a * b = ${arithmetic.multiply(a, b)}`);
console.log(`a / b = ${arithmetic.divide(a, b)}`);
