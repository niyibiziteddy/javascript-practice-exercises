// this function is to take a string and it replaces second element with the later.

let string = 'javaScript';
let laterToChange = 'Z'
function laterChanger(string){
    let splitString = string.split('');
    for(let i = 0; i < string.length; i++){
        if(i % 2 !== 0){
            splitString.splice(i,1,laterToChange)
        }
    }
    return splitString.join('');
}
console.log(laterChanger(string))
let splitString1 = string.split('');
console.log(splitString1.some(item => item === 'y'))