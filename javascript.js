const gameButtons = document.querySelectorAll('.gameButton');
gameButtons.forEach((button) => {
    button.addEventListener('click', () => {
        x = button.id;
        if ((button.classList.contains('activeX') == false) 
        && (button.classList.contains('activeO') == false)) {
            if (activePlayer == 0) {
                gameBoard[x] = "X";
                button.classList.add('activeX')
                button.textContent = ("X");
                activePlayer += 1;
                console.log(checkVictory("X"))
                checkVictory("X");
                console.log(gameBoard[0]);
                checkDraw();
            } else if (activePlayer == 1) {
                gameBoard[x] = "O";
                button.classList.add('activeO')
                button.textContent = ("O");
                activePlayer -= 1;
                console.log(checkVictory("O"))
                checkVictory("O");
                console.log(gameBoard[0]);
                checkDraw();
            }
        }
    });
});

///     global code

let activePlayer = 0;

///     abstracted functions and modules

const gameBoard = (() => {
    const gameArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return {
        gameArray
    };
})();

const gameDisplay = document.querySelector('.gameDisplay');
function displayVictory(y) {
    gameDisplay.textContent = (y + " has won!")
}
function displayDraw() {
    gameDisplay.textContent = ("It's a draw.")
}

function checkVictory(y) {
    if (diagonalVictory(y) == true) {
        displayVictory(y);
        return true;
    } else if (rowVictory(y) == true) {
        displayVictory(y);
    } else if (columnVictory(y) == true) {
        displayVictory(y);
    } else {
        return false;
    }
}

function rowVictory(y) {
    if ((gameBoard[0] == y) && (gameBoard[1] == y) && (gameBoard[2] == y)) {
        return true;
    } else if ((gameBoard[3] == y) && (gameBoard[4] == y) && (gameBoard[5] == y)) {
        return true;
    } else if ((gameBoard[6] == y) && (gameBoard[7] == y) && (gameBoard[8] == y)) {
        return true;
    } else {
        return false;
    }
}

function columnVictory(y) {
    if ((gameBoard[0] == y) && (gameBoard[3] == y) && (gameBoard[6] == y)) {
        return true;
    } else if ((gameBoard[1] == y) && (gameBoard[4] == y) && (gameBoard[7] == y)) {
        return true;
    } else if ((gameBoard[2] == y) && (gameBoard[5] == y) && (gameBoard[8] == y)) {
        return true;
    } else {
        return false;
    }
}

function diagonalVictory(y) {
    if ((gameBoard[0] == y) && (gameBoard[4] == y) && (gameBoard[8] == y)) {
        return true;
    } else if ((gameBoard[6] == y) && (gameBoard[4] == y) && (gameBoard[2] == y)) {
        return true;
    } else {
        return false;
    }
}

function checkDraw() {
    if ((gameBoard[0] != undefined) &&
        (gameBoard[1] != undefined) &&
        (gameBoard[2] != undefined) &&
        (gameBoard[3] != undefined) &&
        (gameBoard[4] != undefined) &&
        (gameBoard[5] != undefined) &&
        (gameBoard[6] != undefined) &&
        (gameBoard[7] != undefined) &&
        (gameBoard[8] != undefined)) {
        displayDraw();
    }
}

/* All victory possibilities

ROWS

0 1 2
3 4 5
6 7 8

COLUMNS

0 3 6
1 4 7
2 5 8

DIAGONALS

0 4 8
6 4 2

*/