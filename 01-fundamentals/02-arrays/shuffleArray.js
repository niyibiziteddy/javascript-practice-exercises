// This a program that shuffles the array
let array = ['first','second','third','forth'];

let arrayLen = array.length - 1;
let temp;

function shuffle(array){
    for(let i = 0; i <= 3; i++){
        let iteratorNUm = Math.floor(Math.random() * 4);
        temp = array[0];
        array[0] = array[iteratorNUm];
        array[iteratorNUm] = temp;
    }
    return array;
}

    


console.log(shuffle(array));
 
