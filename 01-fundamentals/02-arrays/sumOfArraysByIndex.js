// this is a program that takes two arrays and add them by index

array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];

function sumArrayBinder(array1,array2){
    if(array1.length > array2.length){
    let difference = array1.length - array2.length
    for(let i = 0; i < difference; i++){
        array2.push(0);
    }

    }
    else if(array1.length < array2.length){
        let difference = array2.length - array1.length
        for(let i = 0; i < difference; i++){
            array1.push(0);
        }
    }

    let arrayLen = array1.length;
    let newArray = [];
    for(let i = 0; i < arrayLen; i++ ){
        let temp = array1[i] + array2[i];
        newArray.push(temp);
    }
    return newArray
}


console.log(sumArrayBinder(array1, array2));