// color of each tetromino
const colors = {
  I: "cyan",
  O: "yellow",
  T: "purple",
  S: "green",
  Z: "red",
  J: "blue",
  L: "orange",
};

const initPlayField = () => {
  let result = [];
  for (let row = -2; row < 20; row++) {
    result[row] = [];

    for (let col = 0; col < 10; col++) {
      result[row][col] = 0;
    }
  }
  return result;
};

/**
 * Class representing a Tetromino Dispenser.
 * @param {function} callback - The function to call when a sequence is generated. This callback function is necessary to synchronize tetrominos between two players.
 */
export class TetrominoDispenser {
  /**
   * Create a Tetromino Dispenser.
   * @param {function} callback - The function to call when a sequence is generated.
   */
  constructor(callback) {
    this.callback = callback;
    return this;
  }
  /**
   * Get a random integer between min and max.
   * @param {number} min - The minimum value.
   * @param {number} max - The maximum value.
   * @return {number} A random integer.
   */
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /**
   * Generate a sequence of Tetrominos.
   * @return {Array} The generated sequence.
   */
  generateSequence() {
    const sequence = ["I", "J", "L", "O", "S", "T", "Z"];
    let result = [];

    while (sequence.length) {
      const rand = this.getRandomInt(0, sequence.length - 1);
      const name = sequence.splice(rand, 1)[0];
      result.push(name);
    }
    return result;
  }
  /**
   * Dispense a sequence of Tetrominos.
   * @return {TetrominoDispenser} The Tetromino Dispenser instance.
   */
  async dispense() {
    const sequence = this.generateSequence();
    this.callback(sequence);
    return sequence;
  }
}

const fps = 30;
/**
 * Class representing a Tetris game.
 * @param {function} onGameOver - The function to call when the game is over.
 * @param {function} onDrawing - The function to call when drawing the game.
 */
export class Tetris {
  tetrominos = {
    I: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    J: [
      [1, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    L: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ],
    O: [
      [1, 1],
      [1, 1],
    ],
    S: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
    ],
    Z: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    T: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
  };
  onGameOver;
  onDrawing;
  keyStroke = [];
  onTick;
  playfield;
  tetrominoSequence = [];
  tetromino;
  intervalIds = -1;
  score = 0;
  totalLineClear = 0;
  count = 0;
  tetrominoDispenser;

  /**
   * Create a Tetris game.
   * @param {function} onGameOver - The function to call when the game is over.
   * @param {function} onDrawing - The function to call when drawing the game.
   */
  constructor(onGameOver, onDrawing, onScoreUpdate) {
    console.log("++++++++++ Tetris init");
    this.onGameOver = onGameOver;
    this.onDrawing = onDrawing;
    this.onScoreUpdate = onScoreUpdate;
    return this;
  }

  setTetrominoDispenser(dispenser) {
    this.tetrominoDispenser = dispenser;
    return this;
  }

  RegisterKeyStroke(key) {
    this.keyStroke = [...this.keyStroke, key];
  }

  ExecuteKeyStroke() {
    if (!this.keyStroke.length) return;
    console.log("need to execute", this.keyStroke);
    const key = this.keyStroke.pop();
    switch (key) {
      case "ArrowLeft":
      case "ArrowRight":
        const col =
          key === "ArrowLeft" ? this.tetromino.col - 1 : this.tetromino.col + 1;
        if (this.isValidMove(this.tetromino.matrix, this.tetromino.row, col)) {
          this.tetromino.col = col;
        }
        break;
      case "ArrowUp":
        const matrix = this.rotate(this.tetromino.matrix);
        if (this.isValidMove(matrix, this.tetromino.row, this.tetromino.col)) {
          this.tetromino.matrix = matrix;
        }
        break;
      case "ArrowDown":
        const row = this.tetromino.row + 1;
        if (!this.isValidMove(this.tetromino.matrix, row, this.tetromino.col)) {
          this.tetromino.row = row - 1;
          this.placetetromino();
          return;
        }
        this.tetromino.row = row;
        break;
      default:
        break;
    }
    // console.log("execute key: " + key);
  }

  startGame() {
    this.playfield = initPlayField();
    this.tetromino = this.getNextTetromino();
    this.intervalIds = [
      setInterval(() => this.loop(), 1000 / fps),
      setInterval(() => this.ExecuteKeyStroke(), 1000 / (fps * 2)),
    ];
    return this;
  }
  stopGame() {
    if (this.intervalIds[0] != -1) return -1;
    this.intervalIds.forEach((id) => clearInterval(id));
  }

  appendSequence(sequence) {
    this.tetrominoSequence = [...this.tetrominoSequence, ...sequence];
  }

  getNextTetromino() {
    if (this.tetrominoSequence.length === 0) {
      this.tetrominoDispenser.dispense();
    }

    const name = this.tetrominoSequence.pop();
    const matrix = this.tetrominos[name];

    const col = this.playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);

    const row = name === "I" ? -1 : -2;

    return {
      name: name,
      matrix: matrix,
      row: row,
      col: col,
    };
  }

  // rotate an NxN matrix 90deg
  // @see https://codereview.stackexchange.com/a/186834
  rotate(matrix) {
    const N = matrix.length - 1;
    const result = matrix.map((row, i) =>
      row.map((val, j) => matrix[N - j][i])
    );

    return result;
  }

  // check to see if the new matrix/row/col is valid
  isValidMove(matrix, cellRow, cellCol) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (
          matrix[row][col] &&
          // outside the game bounds
          (cellCol + col < 0 ||
            cellCol + col >= this.playfield[0].length ||
            cellRow + row >= this.playfield.length ||
            // collides with another piece
            this.playfield[cellRow + row][cellCol + col])
        ) {
          return false;
        }
      }
    }

    return true;
  }

  placetetromino() {
    let lineClears = 0;
    for (let row = 0; row < this.tetromino.matrix.length; row++) {
      for (let col = 0; col < this.tetromino.matrix[row].length; col++) {
        if (this.tetromino.matrix[row][col]) {
          // game over if piece has any part offscreen
          if (this.tetromino.row + row < 0) {
            if (this.stopGame() == -1) return;
            return this.onGameOver();
          }

          this.playfield[this.tetromino.row + row][this.tetromino.col + col] =
            this.tetromino.name;
        }
      }
    }

    // check for line clears starting from the bottom and working our way up
    for (let row = this.playfield.length - 1; row >= 0; ) {
      if (this.playfield[row].every((cell) => !!cell)) {
        // drop every row above this one
        for (let r = row; r >= 0; r--) {
          for (let c = 0; c < this.playfield[r].length; c++) {
            this.playfield[r][c] = this.playfield[r - 1][c];
          }
        }
        lineClears++;
      } else {
        row--;
      }
    }

    // Add points based on the number of lines cleared
    switch (lineClears) {
      case 1:
        this.score += 100;
        break;
      case 2:
        this.score += 300;
        break;
      case 3:
        this.score += 500;
        break;
      case 4:
        this.score += 800;
        break;
    }
    if (lineClears) {
      this.totalLineClear += lineClears;
      this.onScoreUpdate({
        points: this.score,
        lineClears: this.totalLineClear,
      });
    }
    this.tetromino = this.getNextTetromino();
  }

  loop() {
    let piece = [];
    // draw the this.playfield
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 10; col++) {
        if (this.playfield[row][col]) {
          const name = this.playfield[row][col];
          piece.push({
            kind: "spectre",
            row: row + 1,
            col: col + 1,
            color: colors[name],
          });
        }
      }
    }

    // draw the active this.tetromino
    if (this.tetromino) {
      if (++this.count > 35) {
        this.tetromino.row++;
        this.count = 0;

        // place piece if it runs into anything
        if (
          !this.isValidMove(
            this.tetromino.matrix,
            this.tetromino.row,
            this.tetromino.col
          )
        ) {
          this.tetromino.row--;
          this.placetetromino();
        }
      }

      function isHidden(row, col) {
        // Define the grid boundaries
        const minRow = 0;
        const maxRow = 19;
        const minCol = 0;
        const maxCol = 9;

        // Check if the current piece's row and col are outside the boundaries
        if (row < minRow || row > maxRow || col < minCol || col > maxCol) {
          return true;
        }

        return false;
      }

      function isInsideOfGameGrid(row, col) {
        // Define the grid boundaries
        const minRow = 0;
        const maxRow = 19; // As the grid's height is 20
        const minCol = 0;
        const maxCol = 9; // As the grid's width is 10

        // Check if the current piece's row and col are inside the boundaries
        return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;
      }
      for (let row = 0; row < this.tetromino.matrix.length; row++) {
        for (let col = 0; col < this.tetromino.matrix[row].length; col++) {
          if (this.tetromino.matrix[row][col]) {
            const display = isInsideOfGameGrid(
              this.tetromino.row + row,
              this.tetromino.col + col
            );
            if (!display) continue;
            piece.push({
              kind: "piece",
              row: this.tetromino.row + row + 1,
              col: this.tetromino.col + col + 1,
              color: colors[this.tetromino.name],
            });
          }
        }
      }
      if (piece.length) this.onDrawing(piece);
    }
  }
}
