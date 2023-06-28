const prompt = require("prompt-sync")({ sigint: true });

function BasicFizzBuzz() {
    for (let number = 1; number <= 100; number++){
        if ((number % 3 === 0) && (number % 5 === 0)){
            console.log('FizzBuzz');
        }
        else if (number % 3 === 0){
            console.log('Fizz');
        } else if (number % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(number);
        }
    }
}

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

/* Main */

const maxNumber = prompt("Please enter the number you want to count to: ");
const userRules = prompt("Please enter the rules you want to include: ").split(' ');
console.log(userRules);
AdvancedFizzBuzz(maxNumber, userRules);