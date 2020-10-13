var player = "p1";

document.addEventListener("DOMContentLoaded", function (event) {
    attachEventListeners();
});

function attachEventListeners() {
    var elements = document.getElementsByClassName("row");
    var aElements = [].slice.call(elements);
    aElements.forEach(e => e.addEventListener("click", handleRowClick));
}

function handleRowClick(oEv) {
    addToken(this)
}

function addToken(row) {
    fields = row.children;
    for (let i = 1; i < fields.length + 1; i++) {
        const e = fields[fields.length - i];
        if (!e.classList.contains("p1") && !e.classList.contains("p2")) {
            e.classList.add(player);
            switchPlayer();
            return;
        }
    }
}

function switchPlayer() {
    if (player === "p1") {
        player = "p2";
    } else if (player === "p2") {
        player = "p1";
    }
}