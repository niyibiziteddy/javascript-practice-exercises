//This is a program that finds the occurence of 3 words;

let paragraph = `Conan the Coder

Infinite Loop Inc., 2017 - 2019
- wrote migration scripts for SQL databases
- built reusable UI components with React

Varlet Agency, 2016 - 2017
- created user interfaces using JS, React, and CSS
- built API services with NodeJS and MongoDB

InfoSysDigiTechSphere Consulting Solutions, 2015 - 2016
- built API services with in Java, Spring Boot, and SQL`

let splitParagraph = paragraph.split(' ')


function finder(word1, word2, word3){
    let occurence1 = (splitParagraph.filter(item => item === word1)).length;
    let occurence2 = (splitParagraph.filter(item => item === word2)).length;
    let occurence3 = (splitParagraph.filter(item => item === word3)).length;

    return {
        [word1] : occurence1,
        [word2] : occurence2,
        [word3] : occurence3
    }
}

console.log(finder('SQL', 'API', 'migration'));