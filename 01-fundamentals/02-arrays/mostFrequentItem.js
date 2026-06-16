/* This is a program that takes the array and outputs the highest occurence
number and it's occurence.*/

let array = [1,1,3,4,2,2,2,4,6,5];

function highestOccurence(array){
    let uniqueOne = [...new Set(array)]
    let number = array[0];
    let occurence = (array.filter( el => el === number)).length;
    uniqueOne.forEach(item => {
        let eachUniqueOccurence = array.filter( el => el === item);
        let occur = eachUniqueOccurence.length
        if(occurence < occur){
            number = item;
            occurence = occur
        }

    })
    return `the number is ${number} and it's occurence is ${occurence}`
}

console.log(highestOccurence(array));