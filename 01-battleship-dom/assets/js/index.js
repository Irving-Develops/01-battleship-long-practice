import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

const boardArea = document.createElement("div");
boardArea.id = "board";
document.body.appendChild(boardArea);
boardArea.append(board);

// access the cell to make them squares
// for (let i = 0; i < board.grid.length; i++) {
//     for (let j = 0; j < board.grid[0].length; j++)  {
//         board.grid[i].style.height = "30px";

//     }
// }

// Your code here
