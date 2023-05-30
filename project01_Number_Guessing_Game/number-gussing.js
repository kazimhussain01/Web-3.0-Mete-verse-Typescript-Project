#! /usr/bin/env node
import inquirer from "inquirer";
async function startFunc() {
    const systemNUm = Math.floor(Math.random() * 10);
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter Your Number B/w 1 - 10:"
        }
    ]);
    const { userGuess } = userNum;
    console.log("Your Guess:", userGuess, "\nsystem's Guess:", systemNUm);
    if (userGuess == systemNUm) {
        console.log("Your Guess is Correct \n You Win!");
    }
    else {
        console.log("Better Luck Next Time");
    }
}
async function startAgain() {
    do {
        await startFunc();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do You Want To Continue? Press Y for Yes & N for No"
        });
    } while (again.restart == "Y" || again.restart == "y" || again.restart == "yes" || again.restart == "Yes");
}
startAgain();
