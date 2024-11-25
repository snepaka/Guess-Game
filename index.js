const randomNumber = Math.floor(Math.random()*100);

//console.log(randomNumber);

const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout
});

function guessNumber()
{
readline.question('Guess a number between 1 - 100:',

(userGuess)=> {
console.log(userGuess);

const guess = parseInt(userGuess);

if(guess === randomNumber){

console.log("well done! Hongera sana!");
}
else{
console.log("Owapuka!");
guessNumber();
}
})
};
guessNumber();
