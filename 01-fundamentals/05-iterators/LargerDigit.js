let number = 324545836;
let splitNumber = (number.toString()).split('')
let splitLen = splitNumber.length;
let i = 0;
let largeDigit = 0;
while(i < splitLen){
    if(Number(splitNumber[i]) > largeDigit){
        largeDigit = Number(splitNumber[i]);
    }
    i++

}
console.log(largeDigit)