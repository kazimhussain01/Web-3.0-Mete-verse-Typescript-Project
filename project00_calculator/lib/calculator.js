#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let glitch = chalkanimation.rainbow("Let's Strat Calculator");
    await sleep();
    glitch.stop();
}
welcome();
let choose = {
    choose: 'Y'
};
while (choose.choose == 'Y' || choose.choose == 'y') {
    let number1 = await inquirer.prompt([{
            name: "num1",
            type: "number",
            message: "Enter First Number:"
        }
    ]);
    let number2 = await inquirer.prompt([{
            name: "num2",
            type: "number",
            message: "Enter Second Number"
        }
    ]);
    console.log(chalk.yellowBright.bold("Which Operator You Want to Perform?"));
    console.log("Perss 1 for Addition");
    console.log("Perss 2 for Subtraction");
    console.log("Perss 3 for Multiplication");
    console.log("Perss 4 for Division");
    let optional = await inquirer.prompt([{
            name: "optional",
            type: "number"
        }
    ]);
    if (optional.optional == 1) {
        console.log("Sum of " + number1.num1 + " and " + number2.num2 + " is: " + (number1.num1 + number2.num2));
    }
    else if (optional.optional == 2) {
        console.log("Subtraction of " + number1.num1 + " and " + number2.num2 + " is: " + (number1.num1 - number2.num2));
    }
    else if (optional.optional == 3) {
        console.log("Multiplicaation of " + number1.num1 + " and " + number2.num2 + " is: " + (number1.num1 * number2.num2));
    }
    else if (optional.optional == 4) {
        console.log("Division of " + number1.num1 + " and " + number2.num2 + " is: " + (number1.num1 / number2.num2));
    }
    else {
        console.log("Invalid Option");
    }
    choose = await inquirer.prompt([{
            name: "choose",
            message: "Do You Want to Perform an other Operation Press Y for Yes & N for No?"
        }]);
}
