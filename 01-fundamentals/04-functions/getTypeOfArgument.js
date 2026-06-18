let argument = null;

function typeRetrievel (arg){
    let allType = Object.prototype.toString.call(arg); 
    let splitAllType = ((allType.split(' '))[1]).split('')
    let singleType = (splitAllType.slice(0,splitAllType.length - 1)).join('')
    return singleType;
}

console.log(typeRetrievel(argument));