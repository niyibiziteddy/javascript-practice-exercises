// 

let array = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let cleanedArray;
function removeFalseVal(array){
    for( let i = 0 ; i < array.length; i++){
        if(Number.isNaN(array[i]) || array[i] === 0 || array[i] == false || array[i] == '' || array[i] == null || array[i] === undefined){
            array.splice(i, 1);
            console.log(i + ': ' + array[i]);
        }
    }
        
    return array;
}

console.log(removeFalseVal(array));