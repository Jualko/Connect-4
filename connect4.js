document.addEventListener("DOMContentLoaded", function (event) {
    attachEventListeners();
});

function attachEventListeners() {
    var elements = document.getElementsByClassName("row");
    var aElements = [].slice.call(elements);
    aElements.forEach(e => e.addEventListener("click", handleRoClick));
}

function handleRoClick(){
   var elements= this.children;
   debugger
}