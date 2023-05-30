#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

async function AskQuestion() {
    
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "questionNo1",
            choices: ["Amazone", "Microsoft", "Oracle", "Typescript"],
            message: "Which of the following Companies has Developed Typerscript?"
        }, 
        {
            type: "list",
            name: "questionNo2",
            choices: ["Gradual", "Duck", "Dynamic", "All of the Above"],
            message: "What is the Typing Principal of Typescript?"
        },{
            type: "list",
            name: "questionNo3",
            choices: ["Sir Zia Khan", "Sir Hisham Sarwar", "Sir Imran Ali Dina", "All of the Above"],
            message: "Who is the Hero of Present Day Pakistan?"
        },{
            type: "list",
            name: "questionNo4",
            choices: [".tt", ".tsx", ".nod", ".ts"],
            message: "Which of the following filename is the extension for Typescript?"
        },
    ]);

    let marks = 0;

    if(answer.questionNo1 === "Microsoft"){
        console.log("Answer 1 is correct");
        marks += 2;
    } else {
        console.log("Answer 1 is incorrect");    
    }
    
    if(answer.questionNo2 === "Dynamic"){
        console.log("Answer 2 is correct");
        marks += 2;
    } else {
        console.log("Answer 2 is incorrect");    
    }
    
    if(answer.questionNo3 === "All of the Above"){
        console.log("Answer 3 is correct");
        marks += 2;
    } else {
        console.log("Answer 3 is incorrect");    
    }
    
    if(answer.questionNo4 === ".ts"){
        console.log("Answer 4 is correct");
        marks += 2;
    } else {
        console.log("Answer 4 is incorrect");    
    }

    console.log(chalk.yellowBright.bold(`You have got ${marks} Marks out of 8 marks`));
}

AskQuestion();
