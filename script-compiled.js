'use strict';

/* 1 */

var a = 'Hello',
    b = 'World';
var wynik = a + ' ' + b;

console.log(wynik);

/* 2 */

var multiply = function multiply(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(6, 9));
console.log(multiply(5));

/* 3 */

var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var suma = 0;
    args.forEach(function (arg) {
        return suma += arg;
    });
    return suma / args.length;
};

console.log('zad3');
console.log(average(1));
console.log(average(2, 3));
console.log(average(1, 3, 6, 6));

/* 4 */

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

/* 5 */

var dane = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = dane[2],
    lastName = dane[4];


console.log(firstName + ' ' + lastName);
