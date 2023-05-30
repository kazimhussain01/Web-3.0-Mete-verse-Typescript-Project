#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Kindly Enter Your ID"
    },
    {
        type: "number",
        name: "userPIN",
        message: "Kindly Enter Your PIN"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select Your Account Type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fash Cash", "Withdraw"],
        message: "Select Your Transaction Type: ",
    },
    {
        type: "list",
        name: "amount",
        choices: [1000,2000,5000,10000,20000],
        message: "Select Your Amount: ",
        when(answers) {
            return answers.transactionType == "Fast Cash"
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount: ",
        when(answers) {
            return answers.transactionType == "Withdraw"
        }
    },
])

if(answers.userID && answers.userPIN){
    const balance = 500000;
    console.log("Previous Balance", balance);
    const enteredAmount = answers.amount;
    if(balance >= enteredAmount){
        const remaining = balance - enteredAmount;
        console.log("Your Remaining Balance is: ", remaining);
    }else {
        console.log("Insufficient Balance");
        
    }
}