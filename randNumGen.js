//A simple number guess for random number generator

const prompt = require('prompt-sync')();

let randomvar = Math.floor(Math.random() * 101)
let guess;
let chance = 0;

while(guess != randomvar){
    guess = prompt("Enter a random number to guess:")
    if(guess < randomvar){
        console.log("Your guessed number is less than the answer")
    }else if(guess > randomvar){
        console.log("Your guessed number is high than the answer")
    }
    chance += 1
}
console.log(`You have guessed right. The score is ${100-chance}`);
