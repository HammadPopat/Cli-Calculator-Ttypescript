import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

let answer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "enter your first number",
    },
    {
        name: "operator",
        type: "list",
        message: "please select the operator",
        choices: ['+', '-', '*', '/']
    },
    {
        name: "num2",
        type: "number",
        message: "enter your second number",
    }

])
let number1: number = answer.num1
let number2: number = answer.num2
let operator: string = answer.operator

if (operator == "+") {
    console.log(`${number1} ${operator} ${number2} =${number1+number2}`)
}
else if (operator == "-") {
    console.log(`${number1} ${operator} ${number2} =${number1-number2}`)
}
else if (operator == "*") {
    console.log(`${number1} ${operator} ${number2} =${number1*number2}`)
} else if (operator == "/") {
    console.log(`${number1} ${operator} ${number2} =${number1/number2}`)
}
else {
    console.log("Enter correct operator")


}


