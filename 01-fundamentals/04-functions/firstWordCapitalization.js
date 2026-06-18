// the function that puts the first letters of the words in capital letter.
let string = 'Hello world'
let newString = []
function firstCapitalizer(string){
    let splitString = string.split(' ');
    splitString.forEach(el => {
        let splitElement = el.split('')
        let letter = el[0].toUpperCase()
        splitElement.shift()
        splitElement.unshift(letter)
        newString.push(splitElement.join(''));
        
    });
    return newString.join(' ')
}
console.log(firstCapitalizer(string))