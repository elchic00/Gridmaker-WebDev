let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let grid = document.getElementById('grid')
    let rows = document.getElementsByTagName('tr')

    if(rows.length == 0){
        let row = document.createElement('tr')
        let col = document.createElement("td");
        col.onclick = function(){ this.style.background = colorSelected }
        row.appendChild(col)
        grid.appendChild(row)
        numRows++
    }
    else if(rows.length >= 0 && numCols == 0){
        let row = document.createElement('tr')
        let col = document.createElement("td");
        col.onclick = function(){ this.style.background = colorSelected }
        row.appendChild(col)
        grid.appendChild(row)
        numRows++
    }
    else{
        let size = document.getElementsByTagName('table').lastElementChild
        let row = document.createElement('tr')
        for(let i=0; i < numCols; i++){
            let data = document.createElement("td");
            row.appendChild(data)
        }
        numRows++
        grid.appendChild(row)
    }
}
//Add a column
function addC() {
    let data = document.createElement("td");
    document.querySelector("table").appendChild(data)
    numCols++;
}

//Remove a row
function removeR() {
    let table = document.querySelector("table");
    let lastRow = table.lastElementChild;
    document.querySelector("table").removeChild(lastRow);
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
