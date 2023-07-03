const prompt = require("prompt-sync")({ sigint: true });

function AdvancedFizzBuzz(maxNumber, userRules){
    console.assert(maxNumber >= 1, "Number provided is not valid.");
    for (let number = 1; number <= maxNumber; number++){
        console.log(AdvancedRules(number, userRules));
    }
}

function AdvancedRules(number, userRules){
    let outputMessage = '';
    if (userRules.includes('3') && number % 3 === 0){
        outputMessage = 'Fizz';
    }
    if (userRules.includes('5') && number % 5 === 0){
        outputMessage += 'Buzz';
    }
    if (userRules.includes('7') && number % 7 === 0){
        outputMessage += 'Bang';
    }
    if (userRules.includes('11') && number % 11 === 0){
        outputMessage = 'Bong';
    }
    if (userRules.includes('13') && number % 13 === 0){
        let indexOfB = outputMessage.indexOf('B');
        if (indexOfB === -1){
            outputMessage += 'Fezz';
        } else {
            outputMessage = outputMessage.substring(0,indexOfB) + 'Fezz' + outputMessage.substring(indexOfB);
        }
    }
    if (userRules.includes('17') && number % 17 === 0){
        let temporaryMessage = '';
        for (let index = 0; index < outputMessage.length; index += 4){
            temporaryMessage = outputMessage.substring(index, index+4) + temporaryMessage;
        }
        outputMessage = temporaryMessage;
    }
    if (outputMessage === ''){
        return number;
    }
    return outputMessage;
}

function customFizzBuzz(){
    let addMoreRules;
    do {
        const rule = prompt("Please enter a rule in the following format: [NUMBER] [TEXT] [PRIORITY-optional]: ").split(' ');
        if (rule.length === 2) {
            new GeneralRules(rule[0], rule[1])
        } else if (rule.length === 3){
            new GeneralRules(rule[0], rule[1], rule[2]);
        } else{
            console.log("Please enter a valid rule.");
        }
        addMoreRules = prompt("Would you like to enter another rule? (Y/N): ");
    } while (addMoreRules === "Y" || addMoreRules === "y");
    const maxNumber = prompt("Please enter the number you want to count to: ");
    GeneralRules.fizzBuzz(maxNumber);
}
class GeneralRules{

    static rules = [];

    constructor(number, text, priority){
        this.number = +number;
        this.text = text; // this is the user description of the rule; simple: just the text to append in order
        this.priority = (priority === undefined)? Infinity: +priority;
        this.addRule();
    }

    addRule(){
        GeneralRules.rules.push(this);
        GeneralRules.rules.sort((element) => element.priority);
    }

    static implementRule(numberToCheck, outputMessage){
        for (const rule of GeneralRules.rules){
            if (numberToCheck % rule.number === 0){
                outputMessage += rule.text;
            }
        }
        if (outputMessage === ''){
            return numberToCheck;
        }
        return outputMessage;
    }

    static fizzBuzz(maxNumber){
        for (let number = 1; number <= maxNumber; number++){
            console.log(this.implementRule(number, ''));
        }
    }
}

/* Main */

customFizzBuzz();
// const maxNumber = prompt("Please enter the number you want to count to: ");
// const userRules = prompt("Please enter the rules you want to include: ").split(' ');
// console.log(userRules);
// AdvancedFizzBuzz(maxNumber, userRules);
