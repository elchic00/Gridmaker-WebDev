let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    let grid = document.getElementById('grid')

    if (numRows == 0 && numCols == 0) {
        let row = document.createElement('tr')
        let col = document.createElement("td");
        col.onclick = function () { this.style.background = colorSelected }
        row.appendChild(col)
        grid.appendChild(row)
        numRows++
        numCols++
    }
    else if (numRows >= 1 && numCols == 0) {
        let row = document.createElement('tr')
        let col = document.createElement("td");
        col.onclick = function () { this.style.background = colorSelected }
        row.appendChild(col)
        grid.appendChild(row)
        numRows++
    }
    else {
        let row = document.createElement('tr')
        for (let i = 0; i < numCols; i++) {
            let col = document.createElement("td");
            col.onclick = function () { this.style.background = colorSelected }
            row.appendChild(col)
        }
        grid.appendChild(row)
        numRows++
    }
}
//Add a column
function addC() {
    let grid = document.getElementById('grid')

    if (numRows == 0 && numCols == 0) {
        let row = document.createElement('tr')
        let col = document.createElement("td");
        col.onclick = function () { this.style.background = colorSelected }
        row.appendChild(col)
        grid.appendChild(row)
        numRows++
        numCols++
    }
    else if (numRows == 1 && numCols >= 1) {
        let start = document.createElement("td");
        start.onclick = function () { this.style.background = colorSelected }
        document.querySelector("tr").appendChild(start)
        numCols++;
    }
    else {
        for (let i = 0; i < numRows; i++) {
            let col = document.createElement("td");
            col.onclick = function () { this.style.background = colorSelected }
            grid.children[i].appendChild(col)
        }
        numCols++;
    }
}

//Remove a row
function removeR() {
    if(numRows <= 0 || numCols <= 0){
        numCols = 0
        numRows = 0
        return
    }
    let table = document.querySelector("table");
    let lastRow = table.lastElementChild;
    table.removeChild(lastRow);
    numRows--;
}
//Remove a column
function removeC() {
    if(numRows <= 0 || numCols <= 0){
        numCols = 0
        numRows = 0
    }
    let grid = document.getElementById('grid')
    for (let i = 0; i < numRows; i++) {
        grid.children[i].lastElementChild.remove()
    }
    numCols--

}
//sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() {
    let grid = document.getElementById('grid')
    for (let i = 0; i < document.querySelectorAll('tr').length; i++) {
        for (j = 0; j < grid.children[i].children.length; j++) {
            grid.children[i].children[j].style.background = colorSelected;
        }
    }
}

function clearAll() {
    let grid = document.getElementById('grid')
    for (let i = 0; i < numRows;){
        grid.deleteRow(i)
        numRows --
    }
    numCols = 0
}


function fillU() {
    alert("Clicked Fill All Uncolored")
}
