// This program outputs the bodyMass index of your body.
let weight  = 65; // In kg
let height = 1.7; // in m²
let BMI = weight/(height * height);
console.log(BMI)

function bodyMassWeight(BMI){
    if(BMI < 18.5){
        return 'underweight';
    }
    else if(BMI > 18.5 && BMI <= 24.9){
        return 'Healthy weight';
    }
    else if(BMI > 25 && BMI <= 29.9){
        return 'Overweight';
    }
    else if( BMI <= 30){
        return 'Obesity';
    }
}
console.log(bodyMassWeight(BMI))