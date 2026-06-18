// This function outputs the longest word in a string;
let string = 'Web Development Tutorial';
function longestWord(string){
    let count = 0;
    let word;
    let splitString = string.split(" ");
    splitString.forEach(item => {
        let counter = item.length;
        if(counter > count){
            count = counter;
            word = item;
        }
    })
    return word;
}
console.log(longestWord(string));