var player;
var gameOver;
var container;

document.addEventListener("DOMContentLoaded", function (event) {
    initializeVariables();
    attachEventListeners();
});

function attachEventListeners() {
    const elements = document.getElementsByClassName("col");
    const aElements = [].slice.call(elements);
    aElements.forEach(e => e.addEventListener("click", handleColClick));
}

function handleColClick(oEv) {
    if (gameOver) {
        return;
    }

    const field = addToken(this);

    if (field) {
        if (!checkWon(field)) {
            switchPlayer();
        } else {
            console.log(player + " won");
            console.log(checkWon(field));
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
    const html = document.getElementsByTagName("html")[0];
    html.style.backgroundColor = col;
}

function checkWon(field) {
    const pos = getPosition(field);
    if (checkWonHorizontal(pos) || checkWonDiagonal2(pos) || checkWonDiagonal1(pos) || checkWonVertical(pos)) {
        gameOver = true;
        return checkWonHorizontal(pos) || checkWonDiagonal2(pos) || checkWonDiagonal1(pos) || checkWonVertical(pos);
    }

    return gameOver;
}

function getPosition(field) {
    const row = [].indexOf.call(field.parentElement.children, field);
    const col = [].indexOf.call(container.children, field.parentElement);
    return { 'row': row, 'col': col };
}

function checkWonHorizontal(pos) {
    let fields = [];
    let i = 1;
    let col;
    let field = [];

    //left of pos
    while (col = container.children[pos.col - i]) {
        field = col.children[pos.row];
        if (field.classList.contains(player)) {
            fields.push(field);
        } else {
            break;
        }
        i++;

    }

    //right of pos
    i = 1;
    while (col = container.children[pos.col + i]) {
        field = col.children[pos.row];
        if (field.classList.contains(player)) {
            fields.push(field);
        } else {
            break;
        }
        i++;
    }

    if (fields.length === 3) {
        return fields;
    }
    return false;
}

function checkWonVertical(pos) {
    let tokens = 0;
    let i = 1;
    let field;
    let fields = [];

    //below pos
    while (field = container.children[pos.col].children[pos.row + i]) {
        if (field.classList.contains(player)) {
            fields.push(field);;
        } else {
            break;
        }
        i++;
    }

    if (fields.length === 3) {
        return fields;
    }
    return false;
}

function checkWonDiagonal1(pos) {
    return false;
}

function checkWonDiagonal2(pos) {
    return false;
}

function initializeVariables() {
    player = "p1";
    gameOver = false;
    container = document.getElementsByClassName("container")[0];
}