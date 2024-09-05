"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Answer";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".guess").value = number;

// console.log(document.querySelector(".guess").value);
let score = 20;
// document.querySelector(".number").textContent = secretNumber;

//check btn handling
document.querySelector(".check").addEventListener("click", function () {
  const number = Number(document.querySelector(".guess").value);
  if (!number) {
    // document.querySelector(".message").textContent = "No Number...";
    displayMessage("No Number...");
  }
  //guess is correct
  else if (number === secretNumber) {
    // document.querySelector(".message").textContent = "correct answer....";
    displayMessage("correct answer...");
    document.querySelector(".number").textContent = secretNumber;
    const highscore = Number(document.querySelector(".highscore").textContent);
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
    //changing styles always must be specified within the quotes
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30%";
  }
  //the guess is wrong
  else if (number !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //   number > secretNumber ? "too high..." : "too low...";
      displayMessage(number > secretNumber ? "too High" : "too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "You lost the game...🙄";
      displayMessage("you lost the game...🙄");
      document.querySelector(".score").textContent = 0;
    }
  }

  //refactoring --means eliminating the duplicate code without changing the working of the code
  //   else if (number > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too High";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector(".message").textContent = "you Lost the game";
  //     }
  //   }
  //   //
  //   else if (number < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "too low";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector(".message").textContent = "you Lost the game";
  //     }
  //   }
});

//again button handling
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//we can write functions rather than writing multiple times repetetive code which is refactoring the code

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
