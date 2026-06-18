// this is the function that takes the array and return the second high and low numbers;

let array = [1,2,3,4,5];

function secondLowAndHigh(array){
    let sortArray = array.sort()
    let arrayLen = array.length;
    return `The second Lowest is ${sortArray[1]} and the second greatest is ${sortArray[arrayLen - 2]}`;
}
console.log(secondLowAndHigh(array));