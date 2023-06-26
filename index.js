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

function AdvancedFizzBuzz(){
    for (let number = 1; number <= 500; number++){
        console.log(AdvancedRules(number));
    }
}

function AdvancedRules(number){
    let outputMessage = '';
    if (number % 3 === 0){
        outputMessage = 'Fizz';
    }
    if (number % 5 === 0){
        outputMessage += 'Buzz';
    }
    if (number % 7 === 0){
        outputMessage += 'Bang';
    }
    if (number % 11 === 0){
        outputMessage = 'Bong';
    }
    if (number % 13 === 0){
        let indexOfB = outputMessage.indexOf('B');
        if (indexOfB === -1){
            outputMessage += 'Fezz';
        } else {
            outputMessage = outputMessage.substring(0,indexOfB) + 'Fezz' + outputMessage.substring(indexOfB);
        }
    }
    if (number % 17 === 0){
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

AdvancedFizzBuzz();