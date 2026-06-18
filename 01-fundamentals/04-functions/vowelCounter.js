// this is a function that counts the vowels in a string.

let string =  'The quick brown fox';

function vowelCounter(string){
    let splitString = string.split('')
    let vowels = ['a' ,'i' ,'e' ,'u' ,'o' ]
    let counter = 0;
    vowels.forEach(item => {
        let filtered = splitString.filter(el => el === item )
        let len = filtered.length
        counter = counter + len;
        
    })
    return counter
}
console.log(vowelCounter(string));