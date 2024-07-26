#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//Title Description
console.log(chalk.bold.magentaBright.italic("\n \t \t ATM-Machine Application"));
console.log("*".repeat(50));
let myBalance = 50000;
let myPincode = 9876;
let pinCode = await inquirer.prompt([
    {
        name: "pinAnswer",
        message: "Enter your pincode:",
        type: "number",
    }
]);
if (pinCode.pinAnswer === myPincode) {
    console.log(chalk.bold.greenBright("Your Pincode is correct!"));
}
else {
    console.log(chalk.bold.redBright("Enter your valid Pincode!"));
}
let select = await inquirer.prompt([
    {
        name: "operations",
        message: "Please select option:",
        type: "list",
        choices: ["withdraw", "Fast cash", "check balance", "cancel"],
    }
]);
if (select.operations === "withdraw") {
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            message: "Enter your amount:",
            type: "number"
        }
    ]);
    if (amountAnswer.amount <= myBalance) {
        let balance = myBalance - amountAnswer.amount;
        console.log(chalk.bold.yellowBright("Your remaining balance is:" + balance));
    }
    else {
        console.log(chalk.bold.redBright("You have Insufficient balance!"));
    }
}
else if (select.operations === "Fast cash") {
    let fastcashAns = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: ["10000", "20000", "30000", "40000", "50000"]
        }
    ]);
    if (fastcashAns.amount <= myBalance) {
        let cash = myBalance - fastcashAns.amount;
        console.log(chalk.bold.yellowBright("Your remaining balance is:" + cash));
    }
    else {
        console.log(chalk.bold.redBright("You have insufficient amount!"));
    }
}
else if (select.operations === "check balance") {
    console.log(chalk.bold.greenBright("Your Balance is:" + myBalance));
}
