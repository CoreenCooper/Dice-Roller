const dice = [
    { die:"&#9856", value: 1},
    { die:"&#9857", value: 2},
    { die:"&#9858", value: 3},
    { die:"&#9859", value: 4},
    { die:"&#9860", value: 5},
    { die:"&#9861", value: 6},
]

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
        rollResult += dice[randNum]["die"];
        sum += dice[randNum]["value"];
    }
rollCount++
displayDice.innerHTML = rollResult;
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

