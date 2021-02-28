const numOfDice = document.querySelector("#num-of-dice"); // grab user input
const rollDiceBtn = document.querySelector("#roll-dice"); // grab button
const displayDice = document.querySelector("#dice-para"); // display roll result
let rollResult = "";

const diceRoll = (event) => {
    event.preventDefault();
    rollResult = 0;
    const userInput = Number(numOfDice.value);
    for(let i = 0; i < userInput; i++) {
        const randNum = Math.floor(Math.random() * 6);
        rollResult += randNum;
    }
displayDice.textContent = rollResult;
}


rollDiceBtn.addEventListener("submit", diceRoll);