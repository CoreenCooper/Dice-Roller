const addToHistory = (diceHTML, sumHTML) => {
    if (diceHTML.textContent !== "") {
        const ul = document.querySelector("ul");
        const li = document.querySelector("li");
        li.textContent = `${dicePara.textContent} = ${sumHTML.textContent}`;
        ul.appendChild(li);
    }
};

const rollTheDice = () => {
    const dice = { 1: "&#9856", 2: "⚁", 3: "⚂", 4: "⚃", 5: "⚄", 6: "⚅" };
    const input = document.querySelector("input");
    let diceStr = "";
    let sum = 0;
    
    for (let i = 0; i < input.valueAsNumber; i++) {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        sum += randomNum;
        diceStr += dice[randomNum];
    }

    return [sum, diceStr];
};

const formSubmission = (event) => {
    event.preventDefault();
    const sumPara = document.querySelector("#sum-para");
    const dicePara = document.querySelector("#dice-para");
    
    addToHistory(dicePara, sumPara);
    // const [sum, diceStr] = rollTheDice(); // destructoring

    const res = rollTheDice();
    const sum = res[0]
    const diceStr = res[1]
    
    dicePara.innerHTML = diceStr; // .innerHTML
    sumPara.textContent = sum;
};


const form = document.querySelector("form");
form.addEventListener("submit", formSubmission);
