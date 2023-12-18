//Snake, Water, Gun game.
//The game works fine but the game logic is not fixed.
const prompt = require('prompt-sync')();

let score = 0;

var lists= ['s','w','g']

let cont = true;

while(cont){
let choice = prompt("Enter 's' 'w' or 'g'\t")
console.log("You chose :: " + choice)

var bot = lists[Math.floor(Math.random() * lists.length)]
console.log("Computer chose :: " + bot)

if(bot == 'g' && choice == 's'){
    console.log("You lose")
}
else if(bot == 'w' && choice == 's'){
    console.log("You lose")
}
else if(bot == 's' && choice == 'w'){
    console.log("You lose")
}
else if(bot == choice ){
    console.log("Match Drawn")
}
else{
    console.log("You win")
    score += 1
    console.log("Your score is " + score)
}
cont = prompt("Do you want to continue");{
    if (cont == 'n'){
        console.log("Bye Bye")
        break;
    }
}
}
