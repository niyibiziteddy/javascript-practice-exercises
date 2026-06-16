let num1 = 12;
let num2 = 13;
let greatNum = num1 > num2? num1: num2;
let gcd;
for(let i = 1; i<= greatNum; i++ ){
    if(num1 % i === 0 && num2 % i === 0){
        gcd = i;
    }
}
console.log(gcd? gcd : 'These two numbers have no gcd');