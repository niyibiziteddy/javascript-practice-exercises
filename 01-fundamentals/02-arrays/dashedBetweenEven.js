// This is a program that takes the even numbers in a number an
// puts a dash on it
let number = 25468;
function dasherBtnEven(num){
    let numSplitString = num;
    numSplitString = number.toString().split('');
    for(let i = 0; i < numSplitString.length; i++){
        if(Number(numSplitString[i])%2 === 0 && numSplitString[i+1]%2 === 0){
            numSplitString[i] = numSplitString[i] + '-' ;
        }
    }
    return numSplitString.join('');
}

console.log(dasherBtnEven(number));