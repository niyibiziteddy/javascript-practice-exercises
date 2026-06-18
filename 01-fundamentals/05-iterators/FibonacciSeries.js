// This is a program that prints the fibonacci series less than the number. 

let number = 21;
let num1 = 0;
let num2 = 1;
let diff = 0;
console.log(num1);
while( num2 < number){
    diff = num1 + num2 
    console.log(num2);
    num1 = num2;
    num2 = diff
}