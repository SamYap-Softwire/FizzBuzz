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
    do {
        rule = prompt("Please enter a rule in the following format: [NUMBER] [TEXT] [PRIORITY-optional]").split(' ');
        if (len(rule) === 2) {
            GeneralRules.constructor(rule[0], rule[1]);
        } else if (len(rule) === 3){
            GeneralRules.constructor(rule[0], rule[1], rule[2]);
        } else{
            console.log("Please enter a valid rule: ");

        }
        console.log("Would you like to enter another rule?");
        // continue here - console log should be prompt.
    } while (false){
    }
}
class GeneralRules{

    static rules = [];

    constructor(number, text, priority=Infinity){
        this.number = number;
        this.text = text; // this is the user description of the rule; simple: just the text to append in order
        this.priority = priority;
        this.addRule();
    }

    addRule(self, rule){
        GeneralRules.rules.push(rule);
        GeneralRules.rules.sort((element) => element.priority);
    }

    implementRule(self, numberToCheck, outputMessage){
        if (numberToCheck % self.number === 0){
            outputMessage += self.text;
        }
        return outputMessage;
    }
}

/* Main */

const maxNumber = prompt("Please enter the number you want to count to: ");
const userRules = prompt("Please enter the rules you want to include: ").split(' ');
console.log(userRules);
AdvancedFizzBuzz(maxNumber, userRules);
