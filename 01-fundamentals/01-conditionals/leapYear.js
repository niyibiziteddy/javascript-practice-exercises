// This is a program of determining leap year
let year = 2023;
let result = year%4 === 0 || (year%100 === 0 && year%400 === 0)? 'This is a leapYear': 'This is a normal year';
console.log(result);