// this is a program that takes the string and gives the string laters in order.
let string = 'Hello world'
function stringOrder (string){
    let sortString = string.split('')
    sortString.sort();
    return sortString.join('')
}
console.log(stringOrder(string))