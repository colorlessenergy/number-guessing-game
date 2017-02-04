var amountOfNumber = [1, 10];
var guessInput = document.getElementById("guess");
var sendButton = document.getElementById("data");
var output = document.getElementById("output");
var showGuess = document.getElementById("showGuess");
var number = Math.floor(Math.random() * amountOfNumber[1]) + 1;
console.log(number)
sendButton.addEventListener("click", function () {
  if (parseInt(guessInput.value) === number) {
    output.innerHTML = "That's right!  My secret number was " + number + "!";
  } else {
    output.innerHTML = "Sorry, but I was really thinking of " + number;
  }
  showGuess.innerHTML = "your guess: " + guessInput.value;
});
