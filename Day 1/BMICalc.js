const BMICalc = (weight, height) => {
    BMI = weight / (height * height);
    if(BMI> 30){
        return "Obese";
    }
    else if (BMI<= 30 && BMI > 25){
        return "Overweight";
    }
    else if (BMI<= 25 && BMI > 18.5){
        return "Normal";
    }
    else if (BMI<= 18.5){
        return "Underweight";
    }
    else{
        return "Invalid Input";
    }
}