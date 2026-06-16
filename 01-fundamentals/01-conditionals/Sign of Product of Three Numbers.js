//This is the program to output the sign of product of 3 nummbers
let myNumbers = [2, -4, 5]
let sign = (numArray) => {
    let product = numArray.reduce((accum, caVa) => accum * caVa);
    return product;
}
console.log( sign(myNumbers) >=0? 'positive Sign' : 'negative Sign');
