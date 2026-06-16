// this is a program that takes the language code you want and it translates hello world;

let lang = 'es';
function translator(lang){
    if(lang === 'es'){ // this is spanish
        return "Hola, Mundo"
    }
    else if(lang === 'fr'){ // thsi is french
        return 'Bonjour le monde';
    }
    else if(lang === 'de'){ //for Germany
        return 'hallo welt'
    }
    else{
        return 'Hello world';
    }
}   
console.log(translator(lang));