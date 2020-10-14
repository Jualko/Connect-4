var player;
var gameOver;
var container;

document.addEventListener("DOMContentLoaded", function (event) {
    initializeVariables();
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
    const pos = getPosition(field);
    console.log("row: " + pos.row + ", col: " + pos.col);
    if (checkWonHorizontal(pos) || checkWonDiagonal2(pos) || checkWonDiagonal1(pos) || checkWonVertical(pos)) {
        gameOver = true;
        return true;
    }

    return false;
}

function getPosition(field) {
    var row = [].indexOf.call(field.parentElement.children, field);
    var col = [].indexOf.call(container.children, field.parentElement);
    return { 'row': row, 'col': col };
}

function checkWonHorizontal(pos) {
    var tokens = 0;
    var i = 1;

    while (container.children[pos.col - i]) {
        if (container.children[pos.col - i].children[pos.row].classList.contains(player)) {
            tokens++;
            console.log("found left")
        } else {
            break;
        }
        i++;

    }

    i = 1;

    while (container.children[pos.col + i]) {
        if (container.children[pos.col + i].children[pos.row].classList.contains(player)) {
            tokens++;
            console.log("found right")
        } else {
            break;
        }
        i++;
    }

    console.log("tokens " + tokens)
    if (tokens >= 3) {
        return true;
    }
    return false;
}

function checkWonVertical(fieldPos) {
    return false;
}

function checkWonDiagonal1(fieldPos) {
    return false;
}

function checkWonDiagonal2(fieldPos) {
    return false;
}

function initializeVariables() {
    player = "p1";
    gameOver = false;
    container = document.getElementsByClassName("container")[0];
}