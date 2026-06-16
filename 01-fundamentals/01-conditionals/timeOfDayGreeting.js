// This is a program that checks the time and greets you
let currentDate = new Date();
let currentHours = currentDate.getHours();

function greetings(hour){
    if(hour === 24){
        return 'Go and sleep and sleep well it is in mid night'
    }
    else if(hour <= 5){
        return 'If you woke up Good Morning';
    }
    else if(hour < 12){
        return 'Good morning sir';
    }
    else if(hour < 15){
        return 'Good afternoon';
    }
    else if( hour < 7){
        return 'Good evening';
    }
    else{
        return('Good night bro, go and sleep');
    }
}
console.log(greetings(currentHours))