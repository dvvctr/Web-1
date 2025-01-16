let balance = 100;
const minNumber = 1;
const maxNumber = 5;
const maxAttempts = 3;
let coinsEarned = 0;
const coinsToPlay = 30;

function startGame() {
    if (balance < 30) {
        alert("You don't have enough coins to play the game.");
        return;
    }
    alert("You have " + balance + " coins. Game started!");
    balance -= 30;

    const randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;

    for (let i = 1; i <= maxAttempts; i++) {
        let userNumber = Number(prompt("Attempt " + i + ": Guess the number between " + minNumber + " and " + maxNumber));

        if (userNumber === randomNumber) {
            switch (i) {
                case 1:
                    coinsEarned = 50;
                    break;
                case 2:
                    coinsEarned = 40;
                    break;
                case 3:
                    coinsEarned = 30;
                    break;
            }

            balance += coinsEarned;
            alert("Congratulations! You have won " + coinsEarned + " coins. Your balance is " + balance + " coins.");
            break;
        } else {
            alert("You didn't guess, try again");
        }
    }

    if (balance >= 30) {
        askToRestart();
    } else {
        alert("YOU LOST!. Unfortunately you cant play again because your balance is " + balance + " coins.");
    }
}

function askToRestart() {
    const restart = confirm("Do you want to play again?");
    if (restart) {
        startGame();
    } else {
        alert("Thanks for playing! Your final balance is " + balance + " coins.");
    }
}

startGame();


