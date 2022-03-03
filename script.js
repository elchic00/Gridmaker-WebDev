let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    let grid = document.getElementById('grid')
    if (numRows == 0 && numCols == 0) {
        let row = document.createElement('tr')
        let col = document.createElement("td");
        col.style.background = "white"
        col.onclick = function () { 
            if(this.style.background == 'white')
                this.style.background = colorSelected
            else
                this.style.background = 'white'
         }
        row.appendChild(col)
        grid.appendChild(row)
        numRows++
        numCols++
    }
    else if (numRows >= 1 && numCols == 0) {
        let row = document.createElement('tr')
        let col = document.createElement("td");
        col.style.background = "white"
        col.onclick = function () { 
            if(this.style.background == 'white')
                this.style.background = colorSelected
            else
                this.style.background = 'white'
         }
         row.appendChild(col)
        grid.appendChild(row)
        numRows++
    }
    else {
        let row = document.createElement('tr')
        for (let i = 0; i < numCols; i++) {
            let col = document.createElement("td");
            col.style.background = "white"
            col.onclick = function () { 
                if(this.style.background == 'white')
                    this.style.background = colorSelected
                else
                    this.style.background = 'white'
             }
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
        col.style.background = "white"
        col.onclick = function () { 
            if(this.style.background == 'white')
                this.style.background = colorSelected
            else
                this.style.background = 'white'
         }  
         row.appendChild(col)
        grid.appendChild(row)
        numRows++
        numCols++
    }
    else if (numRows == 1 && numCols >= 1) {
        let col = document.createElement("td");
        col.style.background = "white"
        col.onclick = function () { 
            if(this.style.background == 'white')
                this.style.background = colorSelected
            else
                this.style.background = 'white'
         }  
          grid.children[0].appendChild(col)
        numCols++;
    }
    else {
        for (let i = 0; i < numRows; i++) {
            let col = document.createElement("td");
            col.style.background = "white"
            col.onclick = function () { 
                if(this.style.background == 'white')
                    this.style.background = colorSelected
                else
                    this.style.background = 'white'
             }      
             grid.children[i].appendChild(col)
            console.log(grid.children[i])
        }
        numCols++;
    }
}

//Remove a row. If you try to remove an empty board it will reset col and row count.
function removeR() {
    let table = document.querySelector("table");
    let lastRow = table.lastElementChild;
    table.removeChild(lastRow);
    numRows--;
    if(numRows == 0 || numCols == 0){
        numCols = 0
        numRows = 0
    }
}
//Remove a column
function removeC() {
    let grid = document.getElementById('grid')
    let row = grid.rows
    let i = 0
    for (let j = 0; j < row.length; j++) {
       row[j].deleteCell(i)
    }
    numCols--
    if(numCols == 0 || numRows == 0 ){
        for (let j = 0; j < row.length;) {
            let lastRow = grid.lastElementChild;
            grid.removeChild(lastRow);
        }    
        numCols = 0
        numRows = 0
    }
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
    for (let i = 0; i < document.querySelectorAll('tr').length; i++) {
        for (j = 0; j < grid.children[i].children.length; j++) {
            grid.children[i].children[j].style.background = 'white';
        }
    }
}


function fillU() {
    let grid = document.getElementById('grid')
    for (let row = 0; row < document.querySelectorAll('tr').length; row++) {
        for (j = 0; j < grid.children[row].children.length; j++) {
            if(grid.children[row].children[j].style.background == 'white')
                grid.children[row].children[j].style.background = colorSelected;
        }
    }
}
