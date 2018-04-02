/* 1 */

let a = 'Hello';
b = 'World';
let wynik = `${a} ${b}`;

console.log(wynik);

/* 2 */

const multiply = (a, b = 1) => a * b;

console.log(multiply(2, 5));
console.log(multiply(6, 9));
console.log(multiply(5));

/* 3 */

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

/* 4 */

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

/* 5 */

const dane = [1, 4, 'Iwona', false, 'Nowak'];
let [, , firstName, , lastName] = dane;

console.log(`${firstName} ${lastName}`);