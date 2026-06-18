// this is a program that reverses a string.

let number = 1234567;
let numSplit = (number.toString()).split('');
console.log(numSplit);
let newArray = [];
let i = numSplit.length - 1;
while(i >= 0){
    newArray.push(numSplit[i]);
    i--;
}
console.log(newArray);