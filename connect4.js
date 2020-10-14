var player;
var gameOver;

initializeVariables();

document.addEventListener("DOMContentLoaded", function (event) {
    attachEventListeners();
});

function attachEventListeners() {
    var elements = document.getElementsByClassName("col");
    var aElements = [].slice.call(elements);
    aElements.forEach(e => e.addEventListener("click", handleColClick));
}

function handleColClick(oEv) {
    if (gameOver) {
        return;
    }

    var field = addToken(this);

    if (field) {
        if (!checkWon(field)) {
            switchPlayer();
        }

    }
}

function addToken(col) {
    fields = col.children;
    for (let i = 1; i < fields.length + 1; i++) {
        const e = fields[fields.length - i];
        if (!e.classList.contains("p1") && !e.classList.contains("p2")) {
            e.classList.add(player);
            return e;
        }
    }
}

function switchPlayer() {
    if (player === "p1") {
        player = "p2";
        switchBackgroundColor("yellow");
    } else if (player === "p2") {
        player = "p1";
        switchBackgroundColor("red");
    }
}

function switchBackgroundColor(col) {
    var html = document.getElementsByTagName("html")[0];
    html.style.backgroundColor = col;
}

function checkWon(field) {
    const fieldPos = getPosition(field);
    console.log("row: " + fieldPos[0] + ", col: " + fieldPos[1])

    if (false) {
        gameOver = true;
    }
}

function getPosition(field) {
    debugger
    var fieldRow = [].indexOf.call(field.parentElement.children, field) + 1;
    var fieldCol = [].indexOf.call(field.parentElement.parentElement.children, field.parentElement) + 1;
    return [fieldRow, fieldCol];
}

function initializeVariables() {
    player = "p1";
    gameOver = false;

}