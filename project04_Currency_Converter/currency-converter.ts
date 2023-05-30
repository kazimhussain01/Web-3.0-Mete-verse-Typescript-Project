#! /usr/bin/env node
import inquirer from "inquirer";

let Convertion = {
    "PKR": {
        "USD": 0.0035,
        "UAE": 77,
        "PKR": 1
    },
    "UAE": {
        "USD": 0.27,
        "UAE": 1,
        "PKR": 77
    },
    "USD": {
        "USD": 1,
        "UAE": 3.67,
        "PKR": 285
    }
}

const answer: {
    from: "PKR" | "UAE" | "USD",
    to: "PKR" | "UAE" | "USD",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "UAE", "USD"],
        message: " Select Your Currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "UAE", "USD"],
        message: " Select Your Convertion Currency: "
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Convertion Amount: "
    }
]);

const {from, to, amount} = answer;

if(from && to && amount){
    let result = Convertion[from][to] * amount
    console.log(`Your Convertion from ${from} to ${to} is ${result}`);
} else {
    console.log("Invalid Inputs");
}