let board = []; // Global variable to represent the game board

function initializeGame() {
  createEmptyBoard();
  drawBoard();
}

function createEmptyBoard() {
  // Create an empty 10x20 grid
  for (let row = 0; row < 20; row++) {
    board[row] = [];
    for (let col = 0; col < 10; col++) {
      board[row][col] = 0;
    }
  }
}

function drawBoard() {
  const gameBoardElement = document.getElementById("game-board");

  // Clear existing content
  gameBoardElement.innerHTML = "";

  // Render the board
  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (board[row][col]) {
        cell.classList.add("filled");
      }
      gameBoardElement.appendChild(cell);
    }
  }
}

// Call initializeGame to start the game
initializeGame();
