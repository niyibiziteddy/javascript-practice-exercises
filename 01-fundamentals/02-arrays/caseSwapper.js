let text = 'The Quick Brown Fox';
function caseChanging(text){
    let lowerText = text.toLowerCase();
    let newArray = [];
    for(let i = 0; i < text.length; i++){
        if(text[i] === lowerText[i]){
            newArray.push(lowerText[i].toUpperCase())
        }
        else{
            newArray.push(lowerText[i])
        }
    }
    return newArray.join('');
}


console.log(caseChanging(text));