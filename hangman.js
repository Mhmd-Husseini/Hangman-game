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
const jresult = document.getElementById("result");

function guessLetter(letter) {
  guessedLetters[letter] = true;
  if ((!word.includes(letter)) && (remainingGuesses >0 )) {
  remainingGuesses--;
   } 
  if (remainingGuesses===0){jresult.textContent ="Sorry!! You Lost";}
}

function checkGameOver() {
  if (remainingGuesses <= 0) {
    return true;
  }
  for (const letter of word) {
    if (!guessedLetters[letter]) {
      return false;
    }
  }
  return true;
}

function displayGameState() {
  let wordString = "";
  for (const letter of word) {
    if (guessedLetters[letter]) {
      wordString += letter;
    } else {
      wordString += "_";
    }
    wordString += " ";
  }
  jword.textContent = wordString;
  jremainingGuesses.textContent = `Remaining guesses: ${remainingGuesses}`;
  jguessedLetters.textContent = `Guessed letters: ${Object.keys(guessedLetters).filter(letter => guessedLetters[letter]).join(", ")}`;
  if (gameOver) {
    jguessInput.disabled = true;
    jguessButton.disabled = true;
  }
}
displayGameState();
jguessButton.addEventListener("click", () => {
  const letter = jguessInput.value.trim().toLowerCase();

  if (!letter || gameOver) {
    return;
  }

  if (guessedLetters[letter]) {
    jguessInput.value = "";
    return;
  }
  guessLetter(letter);
  displayGameState();

if (checkGameOver()) {
jgameOver = true;
}

jguessInput.value = "";
});
