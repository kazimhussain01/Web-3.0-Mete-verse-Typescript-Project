#! /usr/bin/env node
console.clear();
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow(`Welcome to Vj Kazim Time App Create by Kazim Hussain`);
    await sleep();
    rainbowTitle.stop();
}
await welcome();
async function App() {
    let Timeout = await inquirer.prompt([
        {
            type: "number",
            name: "user",
            message: "Please Select Time in Second"
        }
    ]);
    let second = Timeout.user;
    const makeIteration = () => {
        console.clear();
        if (second > 0) {
            console.log(chalk.yellowBright.bold(`      Time is Remaining     ${second}        `));
            setTimeout(makeIteration, 1000); // Wait 1 Second
            second -= 1;
        }
        else {
            console.log(chalk.redBright.bold(`    CountDown is Complete     `));
            restartApp();
        }
    };
    setTimeout(makeIteration); // wait 1 Second
}
App();
async function restartApp() {
    let req = await inquirer.prompt([
        {
            type: "list",
            name: "user",
            message: "Do You Want to Restart CountDown App",
            choices: ["Yes", "No"]
        }
    ]);
    let user_req = req.user;
    if (user_req == 'Yes') {
        console.clear;
        App();
    }
    else if (user_req == 'No') {
        console.log(chalk.blueBright.bold(`     .....Thank For Use Timer App.....     `));
    }
}
