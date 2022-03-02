let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let row = document.createElement("tr");
    if(numCols == 0){
        let data = document.createElement("td");
        row.appendChild(data)
        numRows += 1
    }
    else{
        for(let i=0; i < numCols; i++){
            let data = document.createElement("td");
            row.appendChild(data)
            numRows++
        }
    }
    document.querySelector("table").appendChild(row)
}
//Add a column
function addC() {
    let data = document.createElement("td");
    document.querySelector("table").appendChild(data)
    numCols++;
}

//Remove a row
function removeR() {
    let row = document.querySelector("tr");
    let lastRow = row.lastElementChild;
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
