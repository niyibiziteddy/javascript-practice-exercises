//This is the program that uses switch statement to grade different marks bettween 0 and 10


let marks = 6;
switch(true){
    case (marks >= 9):
        console.log('A');
        break;
    case (marks >= 8):
        console.log('B');
        break;
    case (marks >= 7):
        console.log('C');
        break;
    case (marks >= 6):
        console.log('D');
        break;
    case (marks >= 5):
        console.log('E');
        break;
    case (marks < 5):
        console.log('F');
        break;
    default:
        console.log('Marks out of range');

}