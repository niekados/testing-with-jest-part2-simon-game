```javascript
    beforeEach(() => {      // beforeEach runs before each test is run
        game.score = 0;
        game.currentGame = [];
        addTurn();
    });
```

```javascript
    afterEach(() => {   // afterEach runs after each test is run

    });
```

```javascript
    beforeAll(() => {   // beforeAll runs before all of the tests

    });
```

## Spy

We can use Jest to  check if an alert has been called.
To do this, we use something called a spy. 
So just like a spy in a movie, a Jest spy  will wait and only report when it sees  
some interesting activity. 

### Example
So the first argument to spyOn is the window and  the second is the name of the method, in this case "alert".
The reason we're doing this is because  alert is actually a method of the window object. 
So we're going to catch it when an alert happens  and divert it harmlessly into an empty function. 
```javascript
jest.spyOn(window, "alert").mockImplementation(() => {});

// ------------------------------------------------------

    test("should call an alert if the move is wrong", () => {
        game.playerMoves.push("wrong");
        playerTurn();
        expect(window.alert).toBeCalledWith("Wrong move!"); // NEW matcher - toBeCalledWith
    });
```