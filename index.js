var diceResults = [];
diceResults.push("images/dice1.png");
diceResults.push("images/dice2.png");
diceResults.push("images/dice3.png");
diceResults.push("images/dice4.png");
diceResults.push("images/dice5.png");
diceResults.push("images/dice6.png");


function rollDice() {

    var randomnumber1 = Math.floor(Math.random() * 6);
    var randomnumber2 = Math.floor(Math.random() * 6);

    document.querySelectorAll("img")[0].setAttribute("src", diceResults[randomnumber1]);
    document.querySelectorAll("img")[1].setAttribute("src", diceResults[randomnumber2]);

    if (randomnumber1 > randomnumber2) {

        document.querySelector("h1").innerHTML = " Player 1 Wins!";
        document.querySelectorAll("p")[0].textContent = "Player 1 🚩";
        document.querySelectorAll("p")[1].textContent = "Player 2";

    } else if (randomnumber2 > randomnumber1) {

        document.querySelector("h1").innerHTML = "Player 2 Wins!";
        document.querySelectorAll("p")[1].textContent = "Player 2 🚩";
        document.querySelectorAll("p")[0].textContent = "Player 1";

    } else if (randomnumber1 = randomnumber2) {

        document.querySelector("h1").innerHTML = "Draw!";
        document.querySelectorAll("p")[0].textContent = "Player 1";
        document.querySelectorAll("p")[1].textContent = "Player 2";
    }
}