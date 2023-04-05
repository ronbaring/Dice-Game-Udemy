var diceResults = [];
diceResults.push("images/dice1.png");
diceResults.push("images/dice2.png");
diceResults.push("images/dice3.png");
diceResults.push("images/dice4.png");
diceResults.push("images/dice5.png");
diceResults.push("images/dice6.png");

var randomnumber1 = Math.floor(Math.random()*6);
var randomnumber2 = Math.floor(Math.random()*6);


document.querySelectorAll("img")[0].setAttribute("src", diceResults[randomnumber1]);
document.querySelectorAll("img")[1].setAttribute("src", diceResults[randomnumber2]);

if(randomnumber1 > randomnumber2) {

    document.querySelector("h1").innerHTML = " 🚩 Player 1 Wins!";

} else if (randomnumber2 > randomnumber1) {

    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩 ";
    
} else if (randomnumber1 = randomnumber2) {

    document.querySelector("h1").innerHTML = "Draw!";
    
}