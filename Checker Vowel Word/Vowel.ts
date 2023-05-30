import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"

const sleep = ()=> {
    return new Promise((res)=>{
        setTimeout(res, 2000)
    })
}

async function Vowel(){
   let glitch = chalkanimation.rainbow("Let's Check Vowel & Consonant Word");
   await sleep();
   glitch.stop();
}
Vowel();

let choice ={
    choice: "Y"
}

while(choice.choice=='Y' || choice.choice=='y'){
let vowel = await inquirer.prompt([
    {
    type: "input",
    name: "character",
    message: "Enter the Character:"}
]);

let caseLower = vowel.character.toLowerCase();
if (caseLower =='a' || caseLower =='e' || caseLower =='i' || caseLower =='o' || caseLower =='u'){
    console.log(chalk.yellowBright.bold.inverse(`The Character ${caseLower} You Entered is a Vowel`));
} else {
    console.log(chalk.redBright.bold.inverse(`The Character ${caseLower} You Entered is a Consonant`));  
} 
choice = await inquirer.prompt([{
    name: "choice",
    message: "Do You Want to Perform an other Operation Press Y for Yes & N for No:"
}
])
}
