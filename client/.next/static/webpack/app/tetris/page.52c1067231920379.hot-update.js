"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tetris/page",{

/***/ "(app-pages-browser)/./src/app/tetris/tetris.js":
/*!**********************************!*\
  !*** ./src/app/tetris/tetris.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tetris: function() { return /* binding */ Tetris; }\n/* harmony export */ });\n// const tetrominoSequence = [];\n// // keep track of what is in every cell of the game using a 2d array\n// // tetris playfield is 10x20, with a few rows offscreen\n// const playfield = [];\n// // populate the empty state\n// for (let row = -2; row < 20; row++) {\n//   playfield[row] = [];\n//   for (let col = 0; col < 10; col++) {\n//     playfield[row][col] = 0;\n//   }\n// }\n// tetris.js?87f6:252 Uncaught TypeError: Cannot read properties of undefined (reading '0')\n//     at loop (webpack-internal:///(app-pages-browser)/./src/app/tetris/tetris.js:251:35)\n// color of each tetromino\nconst colors = {\n    I: \"cyan\",\n    O: \"yellow\",\n    T: \"purple\",\n    S: \"green\",\n    Z: \"red\",\n    J: \"blue\",\n    L: \"orange\"\n};\nconst initPlayField = ()=>{\n    let result = [];\n    for(let row = -2; row < 20; row++){\n        result[row] = [];\n        for(let col = 0; col < 10; col++){\n            result[row][col] = 0;\n        }\n    }\n    return result;\n};\nconst printResult = (result)=>{\n    for(let row = -2; row < 20; row++){\n        for(let col = 0; col < 10; col++){\n            console.log(result[row][col]);\n        }\n    }\n};\nconst fps = 30;\n/**\n * Class representing a Tetris game.\n * @param {function} onGameOver - The function to call when the game is over.\n * @param {function} onDrawing - The function to call when drawing the game.\n */ class Tetris {\n    RegisterKeyStroke(key) {\n        this.keyStroke = [\n            ...this.keyStroke,\n            key\n        ];\n    }\n    ExecuteKeyStroke() {\n        if (!this.keyStroke.length) return;\n        console.log(\"need to execute\", this.keyStroke);\n        const key = this.keyStroke.pop();\n        this.keyStroke = this.keyStroke.pop();\n    // console.log(\"execute key: \" + key);\n    }\n    startGame() {\n        this.keyStroke = [];\n        this.playfield = initPlayField();\n        this.tetromino = this.getNextTetromino();\n        this.intervalIds = [\n            setInterval(()=>this.loop(), 1000 / fps),\n            setInterval(()=>this.ExecuteKeyStroke(), 1000 / (fps * 2))\n        ];\n        return this;\n    }\n    stopGame() {\n        if (this.intervalIds[0] != -1) return -1;\n        this.intervalIds.forEach((id)=>clearInterval(id));\n    }\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    }\n    generateSequence() {\n        const sequence = [\n            \"I\",\n            \"J\",\n            \"L\",\n            \"O\",\n            \"S\",\n            \"T\",\n            \"Z\"\n        ];\n        while(sequence.length){\n            const rand = this.getRandomInt(0, sequence.length - 1);\n            const name = sequence.splice(rand, 1)[0];\n            this.tetrominoSequence.push(name);\n        }\n    }\n    getNextTetromino() {\n        if (this.tetrominoSequence.length === 0) {\n            this.generateSequence();\n        }\n        const name = this.tetrominoSequence.pop();\n        const matrix = this.tetrominos[name];\n        const col = this.playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);\n        const row = name === \"I\" ? -1 : -2;\n        return {\n            name: name,\n            matrix: matrix,\n            row: row,\n            col: col\n        };\n    }\n    // rotate an NxN matrix 90deg\n    // @see https://codereview.stackexchange.com/a/186834\n    rotate(matrix) {\n        const N = matrix.length - 1;\n        const result = matrix.map((row, i)=>row.map((val, j)=>matrix[N - j][i]));\n        return result;\n    }\n    // check to see if the new matrix/row/col is valid\n    isValidMove(matrix, cellRow, cellCol) {\n        for(let row = 0; row < matrix.length; row++){\n            for(let col = 0; col < matrix[row].length; col++){\n                if (matrix[row][col] && // outside the game bounds\n                (cellCol + col < 0 || cellCol + col >= this.playfield[0].length || cellRow + row >= this.playfield.length || // collides with another piece\n                this.playfield[cellRow + row][cellCol + col])) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    placetetromino() {\n        for(let row = 0; row < this.tetromino.matrix.length; row++){\n            for(let col = 0; col < this.tetromino.matrix[row].length; col++){\n                if (this.tetromino.matrix[row][col]) {\n                    // game over if piece has any part offscreen\n                    if (this.tetromino.row + row < 0) {\n                        this.stopGame();\n                        return this.onGameOver();\n                    }\n                    this.playfield[this.tetromino.row + row][this.tetromino.col + col] = this.tetromino.name;\n                }\n            }\n        }\n        // check for line clears starting from the bottom and working our way up\n        for(let row = this.playfield.length - 1; row >= 0;){\n            if (this.playfield[row].every((cell)=>!!cell)) {\n                // drop every row above this one\n                for(let r = row; r >= 0; r--){\n                    for(let c = 0; c < this.playfield[r].length; c++){\n                        this.playfield[r][c] = this.playfield[r - 1][c];\n                    }\n                }\n            } else {\n                row--;\n            }\n        }\n        this.tetromino = this.getNextTetromino();\n    }\n    loop() {\n        this.onTick();\n        // context.clearRect(0, 0, canvas.width, canvas.height);\n        // draw the this.playfield\n        for(let row = 0; row < 20; row++){\n            for(let col = 0; col < 10; col++){\n                if (this.playfield[row][col]) {\n                    const name = this.playfield[row][col];\n                    //   context.fillStyle = colors[name];\n                    // drawing 1 px smaller than the grid creates a grid effect\n                    this.onDrawing({\n                        row: row + 1,\n                        col: col + 1,\n                        color: colors[name]\n                    });\n                //   drawPieceAt(row + 1, col + 1, colors[name]);\n                //   context.fillRect(col * grid, row * grid, grid - 1, grid - 1);\n                }\n            }\n        }\n        // draw the active this.tetromino\n        if (this.tetromino) {\n            // console.log(\"!draw\" + JSON.stringify(this.tetromino));\n            // this.tetromino falls every 35 frames\n            if (++this.count > 35) {\n                this.tetromino.row++;\n                this.count = 0;\n                // place piece if it runs into anything\n                if (!this.isValidMove(this.tetromino.matrix, this.tetromino.row, this.tetromino.col)) {\n                    this.tetromino.row--;\n                    this.placetetromino();\n                }\n            }\n            function isHidden(row, col) {\n                // Define the grid boundaries\n                const minRow = 0;\n                const maxRow = 19;\n                const minCol = 0;\n                const maxCol = 9;\n                // Check if the current piece's row and col are outside the boundaries\n                if (row < minRow || row > maxRow || col < minCol || col > maxCol) {\n                    return true;\n                }\n                return false;\n            }\n            function isInsideOfGameGrid(row, col) {\n                // Define the grid boundaries\n                const minRow = 0;\n                const maxRow = 19; // As the grid's height is 20\n                const minCol = 0;\n                const maxCol = 9; // As the grid's width is 10\n                // Check if the current piece's row and col are inside the boundaries\n                return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;\n            }\n            for(let row = 0; row < this.tetromino.matrix.length; row++){\n                for(let col = 0; col < this.tetromino.matrix[row].length; col++){\n                    if (this.tetromino.matrix[row][col]) {\n                        const display = isInsideOfGameGrid(this.tetromino.row + row, this.tetromino.col + col);\n                        if (!display) continue;\n                        this.onDrawing({\n                            row: this.tetromino.row + row + 1,\n                            col: this.tetromino.col + col + 1,\n                            color: colors[this.tetromino.name]\n                        });\n                    // drawPieceAt(\n                    //   this.tetromino.row + row + 1,\n                    //   this.tetromino.col + col + 1,\n                    //   colors[this.tetromino.name]\n                    // );\n                    }\n                }\n            }\n        }\n    }\n    /**\n   * Create a Tetris game.\n   * @param {function} onGameOver - The function to call when the game is over.\n   * @param {function} onDrawing - The function to call when drawing the game.\n   */ constructor(onGameOver, onDrawing, onTick){\n        this.tetrominos = {\n            I: [\n                [\n                    0,\n                    0,\n                    0,\n                    0\n                ],\n                [\n                    1,\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0,\n                    0\n                ],\n                [\n                    0,\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            J: [\n                [\n                    1,\n                    0,\n                    0\n                ],\n                [\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            L: [\n                [\n                    0,\n                    0,\n                    1\n                ],\n                [\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            O: [\n                [\n                    1,\n                    1\n                ],\n                [\n                    1,\n                    1\n                ]\n            ],\n            S: [\n                [\n                    0,\n                    1,\n                    1\n                ],\n                [\n                    1,\n                    1,\n                    0\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            Z: [\n                [\n                    1,\n                    1,\n                    0\n                ],\n                [\n                    0,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            T: [\n                [\n                    0,\n                    1,\n                    0\n                ],\n                [\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ]\n        };\n        this.tetrominoSequence = [];\n        this.intervalIds = -1;\n        this.count = 0;\n        console.log(\"++++++++++ Tetris init\");\n        this.onGameOver = onGameOver;\n        this.onDrawing = onDrawing;\n        this.onTick = onTick;\n        return this;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL3RldHJpcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0NBQWdDO0FBRWhDLHNFQUFzRTtBQUN0RSwwREFBMEQ7QUFDMUQsd0JBQXdCO0FBRXhCLDhCQUE4QjtBQUM5Qix3Q0FBd0M7QUFDeEMseUJBQXlCO0FBRXpCLHlDQUF5QztBQUN6QywrQkFBK0I7QUFDL0IsTUFBTTtBQUNOLElBQUk7QUFFSiwyRkFBMkY7QUFDM0YsMEZBQTBGO0FBRTFGLDBCQUEwQjtBQUMxQixNQUFNQSxTQUFTO0lBQ2JDLEdBQUc7SUFDSEMsR0FBRztJQUNIQyxHQUFHO0lBQ0hDLEdBQUc7SUFDSEMsR0FBRztJQUNIQyxHQUFHO0lBQ0hDLEdBQUc7QUFDTDtBQUVBLE1BQU1DLGdCQUFnQjtJQUNwQixJQUFJQyxTQUFTLEVBQUU7SUFDZixJQUFLLElBQUlDLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLElBQUlBLE1BQU87UUFDbENELE1BQU0sQ0FBQ0MsSUFBSSxHQUFHLEVBQUU7UUFFaEIsSUFBSyxJQUFJQyxNQUFNLEdBQUdBLE1BQU0sSUFBSUEsTUFBTztZQUNqQ0YsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksR0FBRztRQUNyQjtJQUNGO0lBQ0EsT0FBT0Y7QUFDVDtBQUVBLE1BQU1HLGNBQWMsQ0FBQ0g7SUFDbkIsSUFBSyxJQUFJQyxNQUFNLENBQUMsR0FBR0EsTUFBTSxJQUFJQSxNQUFPO1FBQ2xDLElBQUssSUFBSUMsTUFBTSxHQUFHQSxNQUFNLElBQUlBLE1BQU87WUFDakNFLFFBQVFDLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUk7UUFDOUI7SUFDRjtBQUNGO0FBQ0EsTUFBTUksTUFBTTtBQUNaOzs7O0NBSUMsR0FDTSxNQUFNQztJQTZEWEMsa0JBQWtCQyxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDQyxTQUFTLEdBQUc7ZUFBSSxJQUFJLENBQUNBLFNBQVM7WUFBRUQ7U0FBSTtJQUMz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Y2VzQ29udGVudCI6WyIvLyBjb25zdCB0ZXRyb21pbm9TZXF1ZW5jZSA9IFtdO1xuXG4vLyAvLyBrZWVwIHRyYWNrIG9mIHdoYXQgaXMgaW4gZXZlcnkgY2VsbCBvZiB0aGUgZ2FtZSB1c2luZyBhIDJkIGFycmF5XG4vLyAvLyB0ZXRyaXMgcGxheWZpZWxkIGlzIDEweDIwLCB3aXRoIGEgZmV3IHJvd3Mgb2Zmc2NyZWVuXG4vLyBjb25zdCBwbGF5ZmllbGQgPSBbXTtcblxuLy8gLy8gcG9wdWxhdGUgdGhlIGVtcHR5IHN0YXRlXG4vLyBmb3IgKGxldCByb3cgPSAtMjsgcm93IDwgMjA7IHJvdysrKSB7XG4vLyAgIHBsYXlmaWVsZFtyb3ddID0gW107XG5cbi8vICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4vLyAgICAgcGxheWZpZWxkW3Jvd11bY29sXSA9IDA7XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV0cmlzLmpzPzg3ZjY6MjUyIFVuY2F1Z2h0IFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiB1bmRlZmluZWQgKHJlYWRpbmcgJzAnKVxuLy8gICAgIGF0IGxvb3AgKHdlYnBhY2staW50ZXJuYWw6Ly8vKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL3RldHJpcy5qczoyNTE6MzUpXG5cbi8vIGNvbG9yIG9mIGVhY2ggdGV0cm9taW5vXG5jb25zdCBjb2xvcnMgPSB7XG4gIEk6IFwiY3lhblwiLFxuICBPOiBcInllbGxvd1wiLFxuICBUOiBcInB1cnBsZVwiLFxuICBTOiBcImdyZWVuXCIsXG4gIFo6IFwicmVkXCIsXG4gIEo6IFwiYmx1ZVwiLFxuICBMOiBcIm9yYW5nZVwiLFxufTtcblxuY29uc3QgaW5pdFBsYXlGaWVsZCA9ICgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCByb3cgPSAtMjsgcm93IDwgMjA7IHJvdysrKSB7XG4gICAgcmVzdWx0W3Jvd10gPSBbXTtcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgcmVzdWx0W3Jvd11bY29sXSA9IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBwcmludFJlc3VsdCA9IChyZXN1bHQpID0+IHtcbiAgZm9yIChsZXQgcm93ID0gLTI7IHJvdyA8IDIwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0W3Jvd11bY29sXSk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgZnBzID0gMzA7XG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFRldHJpcyBnYW1lLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25HYW1lT3ZlciAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGdhbWUgaXMgb3Zlci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uRHJhd2luZyAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gZHJhd2luZyB0aGUgZ2FtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRldHJpcyB7XG4gIHRldHJvbWlub3MgPSB7XG4gICAgSTogW1xuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgIF0sXG4gICAgSjogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgTDogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgTzogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgIF0sXG4gICAgUzogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgWjogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgVDogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gIH07XG4gIG9uR2FtZU92ZXI7XG4gIG9uRHJhd2luZztcbiAga2V5U3Ryb2tlO1xuICBvblRpY2s7XG4gIHBsYXlmaWVsZDtcbiAgdGV0cm9taW5vU2VxdWVuY2UgPSBbXTtcbiAgdGV0cm9taW5vO1xuICBpbnRlcnZhbElkcyA9IC0xO1xuICBjb3VudCA9IDA7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIFRldHJpcyBnYW1lLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkdhbWVPdmVyIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgZ2FtZSBpcyBvdmVyLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkRyYXdpbmcgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGRyYXdpbmcgdGhlIGdhbWUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvbkdhbWVPdmVyLCBvbkRyYXdpbmcsIG9uVGljaykge1xuICAgIGNvbnNvbGUubG9nKFwiKysrKysrKysrKyBUZXRyaXMgaW5pdFwiKTtcbiAgICB0aGlzLm9uR2FtZU92ZXIgPSBvbkdhbWVPdmVyO1xuICAgIHRoaXMub25EcmF3aW5nID0gb25EcmF3aW5nO1xuICAgIHRoaXMub25UaWNrID0gb25UaWNrO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgUmVnaXN0ZXJLZXlTdHJva2Uoa2V5KSB7XG4gICAgdGhpcy5rZXlTdHJva2UgPSBbLi4udGhpcy5rZXlTdHJva2UsIGtleV07XG4gIH1cblxuICBFeGVjdXRlS2V5U3Ryb2tlKCkge1xuICAgIGlmICghdGhpcy5rZXlTdHJva2UubGVuZ3RoKSByZXR1cm47XG4gICAgY29uc29sZS5sb2coXCJuZWVkIHRvIGV4ZWN1dGVcIiwgdGhpcy5rZXlTdHJva2UpO1xuICAgIGNvbnN0IGtleSA9IHRoaXMua2V5U3Ryb2tlLnBvcCgpO1xuICAgIHRoaXMua2V5U3Ryb2tlID0gdGhpcy5rZXlTdHJva2UucG9wKCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJleGVjdXRlIGtleTogXCIgKyBrZXkpO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMua2V5U3Ryb2tlID0gW107XG4gICAgdGhpcy5wbGF5ZmllbGQgPSBpbml0UGxheUZpZWxkKCk7XG4gICAgdGhpcy50ZXRyb21pbm8gPSB0aGlzLmdldE5leHRUZXRyb21pbm8oKTtcbiAgICB0aGlzLmludGVydmFsSWRzID0gW1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5sb29wKCksIDEwMDAgLyBmcHMpLFxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5FeGVjdXRlS2V5U3Ryb2tlKCksIDEwMDAgLyAoZnBzICogMikpLFxuICAgIF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgc3RvcEdhbWUoKSB7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWxJZHNbMF0gIT0gLTEpIHJldHVybiAtMTtcbiAgICB0aGlzLmludGVydmFsSWRzLmZvckVhY2goKGlkKSA9PiBjbGVhckludGVydmFsKGlkKSk7XG4gIH1cbiAgZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cblxuICBnZW5lcmF0ZVNlcXVlbmNlKCkge1xuICAgIGNvbnN0IHNlcXVlbmNlID0gW1wiSVwiLCBcIkpcIiwgXCJMXCIsIFwiT1wiLCBcIlNcIiwgXCJUXCIsIFwiWlwiXTtcblxuICAgIHdoaWxlIChzZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJhbmQgPSB0aGlzLmdldFJhbmRvbUludCgwLCBzZXF1ZW5jZS5sZW5ndGggLSAxKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzZXF1ZW5jZS5zcGxpY2UocmFuZCwgMSlbMF07XG4gICAgICB0aGlzLnRldHJvbWlub1NlcXVlbmNlLnB1c2gobmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0TmV4dFRldHJvbWlubygpIHtcbiAgICBpZiAodGhpcy50ZXRyb21pbm9TZXF1ZW5jZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVTZXF1ZW5jZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnRldHJvbWlub1NlcXVlbmNlLnBvcCgpO1xuICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMudGV0cm9taW5vc1tuYW1lXTtcblxuICAgIGNvbnN0IGNvbCA9IHRoaXMucGxheWZpZWxkWzBdLmxlbmd0aCAvIDIgLSBNYXRoLmNlaWwobWF0cml4WzBdLmxlbmd0aCAvIDIpO1xuXG4gICAgY29uc3Qgcm93ID0gbmFtZSA9PT0gXCJJXCIgPyAtMSA6IC0yO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBtYXRyaXg6IG1hdHJpeCxcbiAgICAgIHJvdzogcm93LFxuICAgICAgY29sOiBjb2wsXG4gICAgfTtcbiAgfVxuXG4gIC8vIHJvdGF0ZSBhbiBOeE4gbWF0cml4IDkwZGVnXG4gIC8vIEBzZWUgaHR0cHM6Ly9jb2RlcmV2aWV3LnN0YWNrZXhjaGFuZ2UuY29tL2EvMTg2ODM0XG4gIHJvdGF0ZShtYXRyaXgpIHtcbiAgICBjb25zdCBOID0gbWF0cml4Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcmVzdWx0ID0gbWF0cml4Lm1hcCgocm93LCBpKSA9PlxuICAgICAgcm93Lm1hcCgodmFsLCBqKSA9PiBtYXRyaXhbTiAtIGpdW2ldKVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBuZXcgbWF0cml4L3Jvdy9jb2wgaXMgdmFsaWRcbiAgaXNWYWxpZE1vdmUobWF0cml4LCBjZWxsUm93LCBjZWxsQ29sKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgbWF0cml4Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IG1hdHJpeFtyb3ddLmxlbmd0aDsgY29sKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1hdHJpeFtyb3ddW2NvbF0gJiZcbiAgICAgICAgICAvLyBvdXRzaWRlIHRoZSBnYW1lIGJvdW5kc1xuICAgICAgICAgIChjZWxsQ29sICsgY29sIDwgMCB8fFxuICAgICAgICAgICAgY2VsbENvbCArIGNvbCA+PSB0aGlzLnBsYXlmaWVsZFswXS5sZW5ndGggfHxcbiAgICAgICAgICAgIGNlbGxSb3cgKyByb3cgPj0gdGhpcy5wbGF5ZmllbGQubGVuZ3RoIHx8XG4gICAgICAgICAgICAvLyBjb2xsaWRlcyB3aXRoIGFub3RoZXIgcGllY2VcbiAgICAgICAgICAgIHRoaXMucGxheWZpZWxkW2NlbGxSb3cgKyByb3ddW2NlbGxDb2wgKyBjb2xdKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNldGV0cm9taW5vKCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMudGV0cm9taW5vLm1hdHJpeC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnRldHJvbWluby5tYXRyaXhbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLnRldHJvbWluby5tYXRyaXhbcm93XVtjb2xdKSB7XG4gICAgICAgICAgLy8gZ2FtZSBvdmVyIGlmIHBpZWNlIGhhcyBhbnkgcGFydCBvZmZzY3JlZW5cbiAgICAgICAgICBpZiAodGhpcy50ZXRyb21pbm8ucm93ICsgcm93IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wR2FtZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub25HYW1lT3ZlcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMucGxheWZpZWxkW3RoaXMudGV0cm9taW5vLnJvdyArIHJvd11bdGhpcy50ZXRyb21pbm8uY29sICsgY29sXSA9XG4gICAgICAgICAgICB0aGlzLnRldHJvbWluby5uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIGxpbmUgY2xlYXJzIHN0YXJ0aW5nIGZyb20gdGhlIGJvdHRvbSBhbmQgd29ya2luZyBvdXIgd2F5IHVwXG4gICAgZm9yIChsZXQgcm93ID0gdGhpcy5wbGF5ZmllbGQubGVuZ3RoIC0gMTsgcm93ID49IDA7ICkge1xuICAgICAgaWYgKHRoaXMucGxheWZpZWxkW3Jvd10uZXZlcnkoKGNlbGwpID0+ICEhY2VsbCkpIHtcbiAgICAgICAgLy8gZHJvcCBldmVyeSByb3cgYWJvdmUgdGhpcyBvbmVcbiAgICAgICAgZm9yIChsZXQgciA9IHJvdzsgciA+PSAwOyByLS0pIHtcbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMucGxheWZpZWxkW3JdLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlmaWVsZFtyXVtjXSA9IHRoaXMucGxheWZpZWxkW3IgLSAxXVtjXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdy0tO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRldHJvbWlubyA9IHRoaXMuZ2V0TmV4dFRldHJvbWlubygpO1xuICB9XG5cbiAgbG9vcCgpIHtcbiAgICB0aGlzLm9uVGljaygpO1xuICAgIC8vIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cbiAgICAvLyBkcmF3IHRoZSB0aGlzLnBsYXlmaWVsZFxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDIwOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXlmaWVsZFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5wbGF5ZmllbGRbcm93XVtjb2xdO1xuICAgICAgICAgIC8vICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcnNbbmFtZV07XG5cbiAgICAgICAgICAvLyBkcmF3aW5nIDEgcHggc21hbGxlciB0aGFuIHRoZSBncmlkIGNyZWF0ZXMgYSBncmlkIGVmZmVjdFxuICAgICAgICAgIHRoaXMub25EcmF3aW5nKHtcbiAgICAgICAgICAgIHJvdzogcm93ICsgMSxcbiAgICAgICAgICAgIGNvbDogY29sICsgMSxcbiAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbbmFtZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gICBkcmF3UGllY2VBdChyb3cgKyAxLCBjb2wgKyAxLCBjb2xvcnNbbmFtZV0pO1xuICAgICAgICAgIC8vICAgY29udGV4dC5maWxsUmVjdChjb2wgKiBncmlkLCByb3cgKiBncmlkLCBncmlkIC0gMSwgZ3JpZCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gZHJhdyB0aGUgYWN0aXZlIHRoaXMudGV0cm9taW5vXG4gICAgaWYgKHRoaXMudGV0cm9taW5vKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIiFkcmF3XCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnRldHJvbWlubykpO1xuICAgICAgLy8gdGhpcy50ZXRyb21pbm8gZmFsbHMgZXZlcnkgMzUgZnJhbWVzXG4gICAgICBpZiAoKyt0aGlzLmNvdW50ID4gMzUpIHtcbiAgICAgICAgdGhpcy50ZXRyb21pbm8ucm93Kys7XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuXG4gICAgICAgIC8vIHBsYWNlIHBpZWNlIGlmIGl0IHJ1bnMgaW50byBhbnl0aGluZ1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIXRoaXMuaXNWYWxpZE1vdmUoXG4gICAgICAgICAgICB0aGlzLnRldHJvbWluby5tYXRyaXgsXG4gICAgICAgICAgICB0aGlzLnRldHJvbWluby5yb3csXG4gICAgICAgICAgICB0aGlzLnRldHJvbWluby5jb2xcbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudGV0cm9taW5vLnJvdy0tO1xuICAgICAgICAgIHRoaXMucGxhY2V0ZXRyb21pbm8oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpc0hpZGRlbihyb3csIGNvbCkge1xuICAgICAgICAvLyBEZWZpbmUgdGhlIGdyaWQgYm91bmRhcmllc1xuICAgICAgICBjb25zdCBtaW5Sb3cgPSAwO1xuICAgICAgICBjb25zdCBtYXhSb3cgPSAxOTtcbiAgICAgICAgY29uc3QgbWluQ29sID0gMDtcbiAgICAgICAgY29uc3QgbWF4Q29sID0gOTtcblxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBwaWVjZSdzIHJvdyBhbmQgY29sIGFyZSBvdXRzaWRlIHRoZSBib3VuZGFyaWVzXG4gICAgICAgIGlmIChyb3cgPCBtaW5Sb3cgfHwgcm93ID4gbWF4Um93IHx8IGNvbCA8IG1pbkNvbCB8fCBjb2wgPiBtYXhDb2wpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXNJbnNpZGVPZkdhbWVHcmlkKHJvdywgY29sKSB7XG4gICAgICAgIC8vIERlZmluZSB0aGUgZ3JpZCBib3VuZGFyaWVzXG4gICAgICAgIGNvbnN0IG1pblJvdyA9IDA7XG4gICAgICAgIGNvbnN0IG1heFJvdyA9IDE5OyAvLyBBcyB0aGUgZ3JpZCdzIGhlaWdodCBpcyAyMFxuICAgICAgICBjb25zdCBtaW5Db2wgPSAwO1xuICAgICAgICBjb25zdCBtYXhDb2wgPSA5OyAvLyBBcyB0aGUgZ3JpZCdzIHdpZHRoIGlzIDEwXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcGllY2UncyByb3cgYW5kIGNvbCBhcmUgaW5zaWRlIHRoZSBib3VuZGFyaWVzXG4gICAgICAgIHJldHVybiByb3cgPj0gbWluUm93ICYmIHJvdyA8PSBtYXhSb3cgJiYgY29sID49IG1pbkNvbCAmJiBjb2wgPD0gbWF4Q29sO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnRldHJvbWluby5tYXRyaXgubGVuZ3RoOyByb3crKykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLnRldHJvbWluby5tYXRyaXhbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGV0cm9taW5vLm1hdHJpeFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSBpc0luc2lkZU9mR2FtZUdyaWQoXG4gICAgICAgICAgICAgIHRoaXMudGV0cm9taW5vLnJvdyArIHJvdyxcbiAgICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8uY29sICsgY29sXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFkaXNwbGF5KSBjb250aW51ZTtcbiAgICAgICAgICAgIHRoaXMub25EcmF3aW5nKHtcbiAgICAgICAgICAgICAgcm93OiB0aGlzLnRldHJvbWluby5yb3cgKyByb3cgKyAxLFxuICAgICAgICAgICAgICBjb2w6IHRoaXMudGV0cm9taW5vLmNvbCArIGNvbCArIDEsXG4gICAgICAgICAgICAgIGNvbG9yOiBjb2xvcnNbdGhpcy50ZXRyb21pbm8ubmFtZV0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGRyYXdQaWVjZUF0KFxuICAgICAgICAgICAgLy8gICB0aGlzLnRldHJvbWluby5yb3cgKyByb3cgKyAxLFxuICAgICAgICAgICAgLy8gICB0aGlzLnRldHJvbWluby5jb2wgKyBjb2wgKyAxLFxuICAgICAgICAgICAgLy8gICBjb2xvcnNbdGhpcy50ZXRyb21pbm8ubmFtZV1cbiAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiY29sb3JzIiwiSSIsIk8iLCJUIiwiUyIsIloiLCJKIiwiTCIsImluaXRQbGF5RmllbGQiLCJyZXN1bHQiLCJyb3ciLCJjb2wiLCJwcmludFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJmcHMiLCJUZXRyaXMiLCJSZWdpc3RlcktleVN0cm9rZSIsImtleSIsImtleVN0cm9rZSIsIkV4ZWN1dGVLZXlTdHJva2UiLCJsZW5ndGgiLCJwb3AiLCJzdGFydEdhbWUiLCJwbGF5ZmllbGQiLCJ0ZXRyb21pbm8iLCJnZXROZXh0VGV0cm9taW5vIiwiaW50ZXJ2YWxJZHMiLCJzZXRJbnRlcnZhbCIsImxvb3AiLCJzdG9wR2FtZSIsImZvckVhY2giLCJpZCIsImNsZWFySW50ZXJ2YWwiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiY2VpbCIsImZsb29yIiwicmFuZG9tIiwiZ2VuZXJhdGVTZXF1ZW5jZSIsInNlcXVlbmNlIiwicmFuZCIsIm5hbWUiLCJzcGxpY2UiLCJ0ZXRyb21pbm9TZXF1ZW5jZSIsInB1c2giLCJtYXRyaXgiLCJ0ZXRyb21pbm9zIiwicm90YXRlIiwiTiIsIm1hcCIsImkiLCJ2YWwiLCJqIiwiaXNWYWxpZE1vdmUiLCJjZWxsUm93IiwiY2VsbENvbCIsInBsYWNldGV0cm9taW5vIiwib25HYW1lT3ZlciIsImV2ZXJ5IiwiY2VsbCIsInIiLCJjIiwib25UaWNrIiwib25EcmF3aW5nIiwiY29sb3IiLCJjb3VudCIsImlzSGlkZGVuIiwibWluUm93IiwibWF4Um93IiwibWluQ29sIiwibWF4Q29sIiwiaXNJbnNpZGVPZkdhbWVHcmlkIiwiZGlzcGxheSIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/tetris.js\n"));

/***/ })

});