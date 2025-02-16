class Hangman {
  constructor(words,secretWord,errorsLeft,letters,guessedLetters) {
    this.words = words;
    this.secretWord = this.pickWord();
    this.errorsLeft = 10;
    this.letters = []
    this.guessedLetters = '';
  }

  pickWord() {
   let randomIndex = Math.floor(Math.random()*this.words.length)
   let randomWord = this.words[randomIndex]
   return randomWord
  }

  checkIfLetter(keyCode) {
    if (keyCode >= 65 && keyCode <=90){
      return true
    } else {
      return false
    } 
    
  }

  checkClickedLetters(letter) {
    if(this.letters.includes(letter)){
      return false
    }else{
      return true
    }
      
  }

  addCorrectLetter(letter) {
    this.guessedLetters += letter

    this.checkWinner()
  }

  addWrongLetter(letter) {
  if (!this.letters.includes(letter)){
    this.letters.push(letter)
  }

  return this.errorsLeft--

  }

  

  checkGameOver() {
    if (this.errorsLeft === 0){
      return true
    } else {
      return false
    }
  }

  checkWinner() {
  if (this.secretWord.length === this.guessedLetters.length){
    return true
  }else{
    return false
  }
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
