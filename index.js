const numOfDice = document.querySelector("#num-of-dice"); // grab user input
const rollDiceBtn = document.querySelector("#roll-dice"); // grab button
const displayDice = document.querySelector("#dice-para"); // display roll result
const displaySum = document.querySelector("#sum-para"); // display sum result
let rollResult = "";
let sum = 0;
let rollCount = 0;

const diceRoller = (event) => {
    event.preventDefault();
    rollResult = "";
    sum = 0;
    const userInput = Number(numOfDice.value);
    for(let i = 0; i < userInput; i++) {
        const randNum = Math.floor(Math.random() * 6);
        rollResult += randNum;
        sum += randNum;
    }
rollCount++
displayDice.textContent = `${rollResult}`;
displaySum.textContent = `Sum = ${sum}`;
history()
}

const ul = document.querySelector("ul");

const history = () => {
    const listItem = document.createElement("li");
    listItem.textContent = displayDice.textContent;
    ul.appendChild(listItem);
}

rollDiceBtn.addEventListener("submit", diceRoller);