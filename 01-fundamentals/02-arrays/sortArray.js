// this is a functional way of sorting an array without changing it
let array = [4,6,3,2,5,7,3,-1];
console.log([...array].sort())
console.log(array);

// this is a manual way of sorting the array
for(let i = 0; i< array.length; i++){
    for(let j = i; j<array.length;j++){
        if(array[i] > array[j]){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log(array);