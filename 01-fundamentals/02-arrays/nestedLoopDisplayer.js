// This is a program that takes the array and outputs the nested array elements as done bellow.
let nestedArray = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]

function nestedDisplayer(array){
    nestedArray = array
    let i = 0;

    nestedArray.forEach(item => {
        console.log(`row${i}`)
        item.forEach(nestedItem => {
            console.log(`'${nestedItem}'`);
        })
        i++
    })
}

nestedDisplayer(nestedArray);