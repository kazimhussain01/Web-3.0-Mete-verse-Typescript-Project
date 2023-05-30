#! /usr/bin/env node
import inquirer from "inquirer";

const answer: {
    Sentence : string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence to Count the Word: "
    }
])

const word = answer.Sentence.trim().split(" ")
console.log(`Your Sentence Word Count is ${word.length}`);
