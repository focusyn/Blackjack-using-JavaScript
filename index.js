/*
Blackjack web game
Made by: Aarnick Debnath
*/

// Initialize variables here for further use.
let hasBlackJack = false; 
let isAlive = false;
let cards = [];
let sum = 0;
let message = "";
// Storing element ids in a variable.
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// Asking the player to set a value for the Ace card.
let aceValue = window.prompt("What should be the value of the Ace card, type 'a' for 1 or type 'b' for 11: ");
if (aceValue != "a" && aceValue != "b") {
    alert("Invalid entry.");
    alert("Assigning default value of 1.");
    parseInt(aceValue = 1)
} else if (aceValue === "a") {
    parseInt(aceValue = 1)
} else if (aceValue === "b") {
    parseInt(aceValue = 11)
} else {
    alert("Assigning default value of 1.");
    parseInt(aceValue = 1)
};

// function to get a random card everytime for variety
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber === 1) {
        randomNumber = aceValue
        return randomNumber
    } else if (randomNumber === 11){
        randomNumber = 10
        return randomNumber
    } else if (randomNumber === 12) {
        randomNumber = 10
        return randomNumber
    } else if (randomNumber === 13) {
        randomNumber = 10
        return randomNumber
    } else {
        return randomNumber
    }
};        

// Starts the game using the renderGame() function and sets the game variables.
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
};

// function to render the game text and basic logic.
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + ", "
    };
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game!"
        isAlive = false
    } 
    messageEl.textContent = message;     
};

// function to draw a new card.
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum+=card;
        cards.push(card)
        renderGame();
    } else if (isAlive === true && hasBlackJack === true) {
            message = "You've already got Blackjack!"
            messageEl.textContent = message
    } else {
        message = "You cannot draw any new cards!"
        messageEl.textContent = message
    }

};
