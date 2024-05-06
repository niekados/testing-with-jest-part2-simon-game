let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
};

function showScore () {
    document.getElementById("score").innerText = game.score;
}

// we use currly braces, as we will be exporting more than one object from this file
module.exports = { game, newGame, showScore };

