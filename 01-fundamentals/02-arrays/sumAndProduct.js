// This is a function that takes the array and calculates the product and sum.
let array = [1,4,5];
let sum = 0;
let product = 0;
function sumAndProduct(array){
    for(let i = 1; i <3; i++){
    if( i === 1){
        sum = array.reduce((accum, curr) => accum + curr)
    }
    if( i === 2){
        product = array.reduce((accum, curr) =>  accum * curr)

    }
   }
    return `The sum is ${sum} and the product is ${product}`

}
console.log(sumAndProduct(array));