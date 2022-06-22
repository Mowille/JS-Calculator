// Take the operand and operator input
const First_number = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter operator(either +, -, *, or /.): ");
const Second_number = parseFloat(prompt("Enter second number: "));

let Result;
if (operator == '+') {
    Result = First_number + Second_number;
}
else if (operator == '-') {
    Result = First_number - Second_number;
}
else if (operator == '*') {
    Result = First_number * Second_number;
}
else {
    Result = First_number / Second_number;
}
alert(`${First_number} ${operator} ${Second_number} = ${Result}`);