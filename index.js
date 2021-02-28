const numOfDice = document.querySelector("#num-of-dice"); // grab user input
const rollDiceBtn = document.querySelector("#roll-dice"); // grab button
const displayDice = document.querySelector("#dice-para"); // display roll result
const displaySum = document.querySelector("#sum-para"); // display sum result
let rollResult = "";
let sum = 0;

const diceRoll = (event) => {
    event.preventDefault();
    rollResult = "";
    sum = 0;
    const userInput = Number(numOfDice.value);
    for(let i = 0; i < userInput; i++) {
        const randNum = Math.floor(Math.random() * 6);
        rollResult += randNum;
        sum += randNum;
    }
displayDice.textContent = `${rollResult}`;
displaySum.textContent = `Sum = ${sum}`;
}


rollDiceBtn.addEventListener("submit", diceRoll);