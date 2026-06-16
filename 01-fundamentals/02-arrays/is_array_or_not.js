// This is the function that returns whether the variable is an array or not
function is_array(array){
    return toString.call(array) === '[object Array]'? 'This is an array': 'This is not an array';

}
console.log(is_array([2,3,4]));
