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

function AdvancedFizzBuzz(maxNumber){
    /*maxNumber should be turned into an integer
    * Perform checks on maxNumber
    * store function returned by enableRules in a variable
    * do a for loop
    * perform the stored function in each iteration*/
}

function EnableRules(userInput){
    /*User input will be taken in as string
    * Need to parse the user input and convert into array
    * Check that array elements are type int
    * Then sort it in ascending order + filter out numbers that are not valid rules
    * Then return a function which applies the correct rules*/
    const listOfRules = userInput.split(' ');
    for (const element of userInput) {
        console.assert(typeof element === 'number');
    }
}


function RuleFor3(currentMessage, number){
    if (number % 3 === 0){
        currentMessage = 'Fizz';
    }
    return currentMessage;
}

function RuleFor5(currentMessage, number){
    if (number % 5 === 0){
        currentMessage += 'Buzz';
    }
    return currentMessage;
}

function RuleFor7(currentMessage, number){
    if (number % 7 === 0){
        currentMessage += 'Bang';
    }
    return currentMessage;
}

function RuleFor11(currentMessage, number){
    if (number % 11 === 0){
        currentMessage = 'Bong';
    }
    return currentMessage;
}

function RuleFor13(currentMessage, number) {
    if (number % 13 === 0) {
        let indexOfB = currentMessage.indexOf('B');
        if (indexOfB === -1) {
            currentMessage += 'Fezz';
        } else {
            currentMessage = currentMessage.substring(0, indexOfB) + 'Fezz' + currentMessage.substring(indexOfB);
        }
    }
}
function RuleFor17(currentMessage, number){
    if (number % 17 === 0){
        let temporaryMessage = '';
        for (let index = 0; index < currentMessage.length; index += 4){
            temporaryMessage = currentMessage.substring(index, index+4) + temporaryMessage;
        }
        currentMessage = temporaryMessage;
    }
    return currentMessage;
}

/* Main */

const maxNumber = prompt("Please enter the number you want to count to: ");
AdvancedFizzBuzz(maxNumber);