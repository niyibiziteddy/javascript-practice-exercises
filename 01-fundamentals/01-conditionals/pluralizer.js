//This is a program tha puts in plural some the english words
const consonantList = 'bcdfghjklmnpqrstvwxyz';
const vowelList = 'aeiou';

let word = 'bus';
let wordLen = word.length;
function pluralizer(word){
    let lastChars = word.slice(wordLen - 2, wordLen);
    if(lastChars === 'ss' || lastChars === 'sh' || lastChars === 'ch' || lastChars[1] === 's' || lastChars[1] === 'x' || lastChars[1] === 'z'){

        let splitOne = word.split(''); 
        splitOne.push('es')
        return splitOne.join('');

    }
    else if(consonantList.includes(lastChars[0]) && lastChars[1] === 'y'){
        let splitOne = word.split('');
        splitOne.pop();
        popedOne.push('ies');
        let joinedOne = splitOne.join('')
        return joinedOne;
    }
    else if(vowelList.includes(lastChars[0]) && lastChars[1] === 'y'){
        let splitOne = word.split('')
        splitOne.push('s');
        let joinedOne = splitOne.join('')
        return joinedOne;
    }
    else if(lastChars === 'fe' || lastChars[-1] === 'f'){
        if(lastChars === 'fe'){
            let splitOne = word.split('');
            let spliced = splitOne.splice(0, wordLen - 2);
            spliced.push('ves');
            let joinedOne = spliced.join('')
            return joinedOne;
            
        }
        else if(lastChars[-1] === 'f'){
            let splitOne = word.split('');
            splitOne.pop;
            popedOne.push('ves');
            let joinedOne = splitOne.join('');
            return joinedOne;
        }
    }
    else if(lastChars[1] === 'o'){
        let splitOne = word.split('')
        splitOne.push('es');
        let joinedOne = splitOne.join('');
        return joinedOne;
    }
    else{
        let splitOne = word.split('')
        splitOne.push('s');
        let joinedOne = splitOne.join('')
        return joinedOne;
    }
}
console.log(pluralizer(word));