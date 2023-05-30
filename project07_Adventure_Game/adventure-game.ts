#! /usr/bin/env node
console.clear()
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation"
import chalk from 'chalk'



const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 5000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.neon(`Welcome to Vj Kazim Guess Game Create by Kazim Hussain`);

    await sleep();
    rainbowTitle.stop();



}

await welcome()

var playerLife: number = 3;

var playerscore:number = 0;



async function AskQuestion() {
    do {
        let colour: string[] = ["red", "blue", "green", "yellow", "orange"]
        var rdnumber: number = Math.floor(Math.random() * 5 + 1)
        var rdcolour: string = (colour[rdnumber]);
        console.log(chalk.bgBlue.bold(`Your Score is ${playerscore}`));



        var usernumber = await inquirer.prompt([{
            name: 'user',
            type: 'list',
            message: 'Select Any Colour ',
            choices: ["red", "blue", "green", "yellow", "orange"]
        }
        ])


        if (usernumber.user === rdcolour) {
            console.clear()
            playerscore = playerscore+5;

            console.log(chalk.yellowBright.bold(`Your Score is ${playerscore}`));
            
            console.log(chalk.blue.bold(` "CONGRATULATION YOU ARE WIN" YOU GUESS THE RIGHT COLOUR`));

        } 
        else {
            playerLife--
            console.log(chalk.redBright.bold(`"Sorry Best of Luck" Your Life Remaining is ${playerLife}`));
        }
        

    } while (playerLife > 0 && usernumber.user !== rdcolour);
    if (playerLife == 0) {
        console.clear()
        console.log(chalk.yellow.bold(`.........GAME OVER.......`))
    };

    restart()
    playerLife = 3;
    // playerscore = playerscore+5;

}
AskQuestion()

//* restart game functionality
async function restart() {
    let req = await inquirer.prompt([{
        name: 'user',
        type: 'list',
        message: "Do You Want to Restart Game????",
        choices: ['Yes', 'No' ]

    }]);

    let user_req = req.user;

    if (user_req === 'Yes') {
        console.clear()

        AskQuestion()
    }
    else if (user_req === 'No') {
        console.log(chalk.blue.bold(`your score is ${playerscore}`));
        console.log(chalk.bgYellow.bold('Thank You for Play this Game'));
 }
};