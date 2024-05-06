/**
 * @jest-environment jsdom
 */

const { game, newGame, showScore } = require("../game");

// This will be always the same for any HTML you want to load in to the DOM (except changing the file name)
beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exist", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    //We create additional beforeAll function, because we want to set up the game state 
    //with some fake values to see if the new game function resets them.
    beforeAll(() => {   
        game.score = 42; //set fake score to 42
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerText = "42";
        newGame(); //call new game function and it should reset the score
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear the playerMoves array", () => {
        expect(game.playerMoves.length).toEqual(0); //can use .toBe too
    });
    test("should clear the currentGame array", () => {
        expect(game.currentGame.length).toEqual(0);
    });
    test("shoukd display zero for the element with id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});