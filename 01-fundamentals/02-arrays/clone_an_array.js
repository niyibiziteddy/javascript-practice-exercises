// this is a program that clone an array 

// using .slice();
let array = [1,3,5,6,7,4];
function cloneSliceArray(array){
    return array.slice();
}
let clonedArrayUsingSlice = cloneSliceArray(array);
console.log(array);
console.log('From slice Operator ' + '[' + clonedArrayUsingSlice + ']');

// using spreadOperator
let arraySpread = [1,3,5,6,7,4];
function cloneSpreadArray(array){
    return [...array];
}
let clonedArrayUsingSpread = cloneSpreadArray(array);
console.log(array);
console.log('from spread Operator ' + '[' + clonedArrayUsingSpread  + ']');