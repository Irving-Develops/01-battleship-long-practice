import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const boardArea = document.createElement("div");
boardArea.id = "board";
document.body.appendChild(boardArea);

// access the cell to make them squares
for (let i = 0; i < board.grid.length; i++) {

    const row =  document.createElement("div");
    row.className = "row"
    for (let j = 0; j < board.grid[0].length; j++)  {

        const cell = document.createElement("div");
        cell.className = "col";
        cell.dataset.row = i;
        cell.dataset.col = j;
        row.appendChild(cell);
    }
    boardArea.appendChild(row);
}

// link that square HTML element with the cell in the grid by storing the data about the row
// and the column of the cell on the HTML element.

// Your code here








// let alphaVal = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// for (let i = 0; i < board.grid.length; i++) {

//     for (let j = 0; j < board.grid[0].length; j++)  {

//         let letter = alphaVal[j];
//         let cell =  document.createElement("div");
//         boardArea.appendChild(cell);
//         // cell.id = `${letter}-${i+1}`;

//         cell.id = `${i},${j}`;

//         cell.dataset.id = board.grid[i][j];
//     }
// }
