// This is program that finds the duplicates in an array.

let array = [1,3,4,4,5,2,1,2];
function duplicateFinder(array){
    
    let arraySet = [...new Set(array)];
    let duplicates = [];
    arraySet.forEach(item => {
        let temp = array.filter(el => item === el)
        if(temp.length > 1){
            duplicates.push(item);
        }
    })
    
}
console.log(duplicateFinder(array));