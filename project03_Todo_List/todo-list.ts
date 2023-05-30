#! /usr/bin/env node
import inquirer from "inquirer";
let todos : string[] = [];
let loop = true;

while(loop){
    const answer: {
        TODO: string,
        addMore: boolean
    } = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do You want to Add in Your Todo?"
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do You want to Add more Todo?",
            default: false
        },
    ]);


const {TODO, addMore} = answer;
loop = addMore;

if(TODO){
    todos.push(TODO)
} else{
    console.log("Kindly Add Valid Input");   
}
}

if(todos.length > 0){
    console.log("Your Todo List id: ");
    todos.forEach(todo => {
        console.log(todo);
    });
}
    else{
        console.log("No Todos Found");
    }
