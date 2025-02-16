let randomNumber;
let attempts;
let maxAttempts;

function startGame() {
    const difficulty = document.getElementById("difficulty").value;
    let range;

    switch (difficulty) {
        case "easy":
            range = 10;
            maxAttempts = 5;
            break;
        case "medium":
            range = 50;
            maxAttempts = 7;
            break;
        case "hard":
            range = 100;
            maxAttempts = 10;
            break;
    }

    randomNumber = Math.floor(Math.random() * range) + 1;
    attempts = 0;

    document.getElementById("guessInput").classList.remove("hidden");
    document.getElementById("checkBtn").classList.remove("hidden");
    displayMessage(`Le jeu commence ! Vous avez ${maxAttempts} essais.`);
}

function checkGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    attempts++;

    if (isNaN(guess)) {
        displayMessage("Veuillez entrer un nombre valide.");
        return;
    }

    if (guess < randomNumber) {
        displayMessage(`Trop bas ! Il vous reste ${maxAttempts - attempts} essais.`);
    } else if (guess > randomNumber) {
        displayMessage(`Trop haut ! Il vous reste ${maxAttempts - attempts} essais.`);
    } else {
        displayMessage(`Bravo ! Vous avez trouvé le nombre ${randomNumber} en ${attempts} essais.`);
        endGame();
        return;
    }

    if (attempts >= maxAttempts) {
        displayMessage(`Dommage ! Le nombre caché était ${randomNumber}.`);
        endGame();
    }
}

function displayMessage(message) {
    document.getElementById("gameMessage").textContent = message;
}

function endGame() {
    document.getElementById("guessInput").classList.add("hidden");
    document.getElementById("checkBtn").classList.add("hidden");
}
