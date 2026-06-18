// this is a program that checks the prime numbers.

let number = 7;
let i = 1;
let checker = 0

while( i < number){
    if( number % i === 0){
        checker++
    }
    i++
}

console.log(checker)
if(checker === 1){
        console.log('The number ' + number + ' is a prime number')
    }
else if(checker > 1){
    console.log('The number ' + number + ' is not a prime number')
    }