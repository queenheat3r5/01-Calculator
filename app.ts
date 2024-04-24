import inquirer from 'inquirer';

// function for operator store
const calculate = (num1: number, operator: string, num2: number): number => {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                console.log("Math Error");
                process.exit(1);
            }
            return num1 / num2;
        default:
            console.log("Syntax Error");
            process.exit(1);
    }
}

// Prompt for number and operator from user
const promptCalculator = async () => {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:',
            validate: (value: string) => !isNaN(parseFloat(value)),
            filter: Number
        },
        {
            type: 'input',
            name: 'operator',
            message: 'Enter the operator (+, -, *, /):',
            validate: (value: string) => ['+', '-', '*', '/'].includes(value),
            filter: (value: string) => value.trim()
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:',
            validate: (value: string) => !isNaN(parseFloat(value)),
            filter: Number
        }
    ];

    const answers = await inquirer.prompt(questions);
    const result = calculate(answers.num1, answers.operator, answers.num2);
    console.log(`Result: ${result}`);
}

const main = async () => {
    console.log("Simple Command Line Calculator");
    await promptCalculator();
}
main();
