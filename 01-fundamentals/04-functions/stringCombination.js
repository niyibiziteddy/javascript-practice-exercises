// This is a program that makes the prossible combinations in a string
let string = 'Teddy';
let splitString = string.split('');

function combinizer(splitString){
    let j = 1;
    for(let i = 0; i <= string.length + 1 ; i++){
        for(let k = i + 2; k <string.length + 1; k++){

            let newArr = splitString.slice(i, k)
            newArr = newArr.join('')
            splitString.push(newArr);
            
        }
        
    }
   

    return ([... new Set(splitString)].length);

}
console.log(combinizer(splitString));