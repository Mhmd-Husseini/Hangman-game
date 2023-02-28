const words = ["lebanon", "banana", "cherry", "adidas", "chair", "partner", "mercedes"];
const word = words[Math.floor(Math.random() * words.length)];

let remainingGuesses = 6;
const guessedLetters = {};
let gameOver = false;
for (const letter of word) {
  guessedLetters[letter] = false;}
const jword = document.getElementById("word");
const jremainingGuesses = document.getElementById("remaining-guesses");
const jguessedLetters = document.getElementById("guessed-letters");
const jgameOver = document.getElementById("game-over");
const jguessInput = document.getElementById("guess-input");
const jguessButton = document.getElementById("guess-button");

