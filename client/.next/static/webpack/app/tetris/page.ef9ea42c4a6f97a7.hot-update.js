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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tetris: function() { return /* binding */ Tetris; }\n/* harmony export */ });\n// const tetrominoSequence = [];\n// // keep track of what is in every cell of the game using a 2d array\n// // tetris playfield is 10x20, with a few rows offscreen\n// const playfield = [];\n// // populate the empty state\n// for (let row = -2; row < 20; row++) {\n//   playfield[row] = [];\n//   for (let col = 0; col < 10; col++) {\n//     playfield[row][col] = 0;\n//   }\n// }\n// tetris.js?87f6:252 Uncaught TypeError: Cannot read properties of undefined (reading '0')\n//     at loop (webpack-internal:///(app-pages-browser)/./src/app/tetris/tetris.js:251:35)\n// color of each tetromino\nconst colors = {\n    I: \"cyan\",\n    O: \"yellow\",\n    T: \"purple\",\n    S: \"green\",\n    Z: \"red\",\n    J: \"blue\",\n    L: \"orange\"\n};\nconst initPlayField = ()=>{\n    let result = [];\n    for(let row = -2; row < 20; row++){\n        result[row] = [];\n        for(let col = 0; col < 10; col++){\n            result[row][col] = 0;\n        }\n    }\n    return result;\n};\nconst printResult = (result)=>{\n    for(let row = -2; row < 20; row++){\n        for(let col = 0; col < 10; col++){\n            console.log(result[row][col]);\n        }\n    }\n};\nconst fps = 30;\n/**\n * Class representing a Tetris game.\n * @param {function} onGameOver - The function to call when the game is over.\n * @param {function} onDrawing - The function to call when drawing the game.\n */ class Tetris {\n    RegisterKeyStroke(key) {\n        this.keyStroke = [\n            ...this.keyStroke,\n            key\n        ];\n        console.log(\"keys\", this.keyStroke);\n    }\n    ExecuteKeyStroke() {\n        if (!this.keyStroke.length) return;\n    // const key = this.keyStroke[this.keyStroke.length - 1];\n    // this.keyStroke = this.keyStroke.pop() || [];\n    // console.log(\"execute key: \" + key);\n    }\n    startGame() {\n        this.playfield = initPlayField();\n        this.tetromino = this.getNextTetromino();\n        this.intervalIds = [\n            setInterval(()=>this.loop(), 1000 / fps),\n            setInterval(()=>this.ExecuteKeyStroke(), 1000 / (fps * 2))\n        ];\n        return this;\n    }\n    stopGame() {\n        if (this.intervalIds[0] != -1) return -1;\n        this.intervalIds.forEach((id)=>clearInterval(id));\n    }\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min + 1)) + min;\n    }\n    generateSequence() {\n        const sequence = [\n            \"I\",\n            \"J\",\n            \"L\",\n            \"O\",\n            \"S\",\n            \"T\",\n            \"Z\"\n        ];\n        while(sequence.length){\n            const rand = this.getRandomInt(0, sequence.length - 1);\n            const name = sequence.splice(rand, 1)[0];\n            this.tetrominoSequence.push(name);\n        }\n    }\n    getNextTetromino() {\n        if (this.tetrominoSequence.length === 0) {\n            this.generateSequence();\n        }\n        const name = this.tetrominoSequence.pop();\n        const matrix = this.tetrominos[name];\n        const col = this.playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);\n        const row = name === \"I\" ? -1 : -2;\n        return {\n            name: name,\n            matrix: matrix,\n            row: row,\n            col: col\n        };\n    }\n    // rotate an NxN matrix 90deg\n    // @see https://codereview.stackexchange.com/a/186834\n    rotate(matrix) {\n        const N = matrix.length - 1;\n        const result = matrix.map((row, i)=>row.map((val, j)=>matrix[N - j][i]));\n        return result;\n    }\n    // check to see if the new matrix/row/col is valid\n    isValidMove(matrix, cellRow, cellCol) {\n        for(let row = 0; row < matrix.length; row++){\n            for(let col = 0; col < matrix[row].length; col++){\n                if (matrix[row][col] && // outside the game bounds\n                (cellCol + col < 0 || cellCol + col >= this.playfield[0].length || cellRow + row >= this.playfield.length || // collides with another piece\n                this.playfield[cellRow + row][cellCol + col])) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n    placetetromino() {\n        for(let row = 0; row < this.tetromino.matrix.length; row++){\n            for(let col = 0; col < this.tetromino.matrix[row].length; col++){\n                if (this.tetromino.matrix[row][col]) {\n                    // game over if piece has any part offscreen\n                    if (this.tetromino.row + row < 0) {\n                        this.stopGame();\n                        return this.onGameOver();\n                    }\n                    this.playfield[this.tetromino.row + row][this.tetromino.col + col] = this.tetromino.name;\n                }\n            }\n        }\n        // check for line clears starting from the bottom and working our way up\n        for(let row = this.playfield.length - 1; row >= 0;){\n            if (this.playfield[row].every((cell)=>!!cell)) {\n                // drop every row above this one\n                for(let r = row; r >= 0; r--){\n                    for(let c = 0; c < this.playfield[r].length; c++){\n                        this.playfield[r][c] = this.playfield[r - 1][c];\n                    }\n                }\n            } else {\n                row--;\n            }\n        }\n        this.tetromino = this.getNextTetromino();\n    }\n    loop() {\n        this.onTick();\n        // context.clearRect(0, 0, canvas.width, canvas.height);\n        // draw the this.playfield\n        for(let row = 0; row < 20; row++){\n            for(let col = 0; col < 10; col++){\n                if (this.playfield[row][col]) {\n                    const name = this.playfield[row][col];\n                    //   context.fillStyle = colors[name];\n                    // drawing 1 px smaller than the grid creates a grid effect\n                    this.onDrawing({\n                        row: row + 1,\n                        col: col + 1,\n                        color: colors[name]\n                    });\n                //   drawPieceAt(row + 1, col + 1, colors[name]);\n                //   context.fillRect(col * grid, row * grid, grid - 1, grid - 1);\n                }\n            }\n        }\n        // draw the active this.tetromino\n        if (this.tetromino) {\n            // console.log(\"!draw\" + JSON.stringify(this.tetromino));\n            // this.tetromino falls every 35 frames\n            if (++this.count > 35) {\n                this.tetromino.row++;\n                this.count = 0;\n                // place piece if it runs into anything\n                if (!this.isValidMove(this.tetromino.matrix, this.tetromino.row, this.tetromino.col)) {\n                    this.tetromino.row--;\n                    this.placetetromino();\n                }\n            }\n            function isHidden(row, col) {\n                // Define the grid boundaries\n                const minRow = 0;\n                const maxRow = 19;\n                const minCol = 0;\n                const maxCol = 9;\n                // Check if the current piece's row and col are outside the boundaries\n                if (row < minRow || row > maxRow || col < minCol || col > maxCol) {\n                    return true;\n                }\n                return false;\n            }\n            function isInsideOfGameGrid(row, col) {\n                // Define the grid boundaries\n                const minRow = 0;\n                const maxRow = 19; // As the grid's height is 20\n                const minCol = 0;\n                const maxCol = 9; // As the grid's width is 10\n                // Check if the current piece's row and col are inside the boundaries\n                return row >= minRow && row <= maxRow && col >= minCol && col <= maxCol;\n            }\n            for(let row = 0; row < this.tetromino.matrix.length; row++){\n                for(let col = 0; col < this.tetromino.matrix[row].length; col++){\n                    if (this.tetromino.matrix[row][col]) {\n                        const display = isInsideOfGameGrid(this.tetromino.row + row, this.tetromino.col + col);\n                        if (!display) continue;\n                        this.onDrawing({\n                            row: this.tetromino.row + row + 1,\n                            col: this.tetromino.col + col + 1,\n                            color: colors[this.tetromino.name]\n                        });\n                    // drawPieceAt(\n                    //   this.tetromino.row + row + 1,\n                    //   this.tetromino.col + col + 1,\n                    //   colors[this.tetromino.name]\n                    // );\n                    }\n                }\n            }\n        }\n    }\n    /**\n   * Create a Tetris game.\n   * @param {function} onGameOver - The function to call when the game is over.\n   * @param {function} onDrawing - The function to call when drawing the game.\n   */ constructor(onGameOver, onDrawing, onTick){\n        this.tetrominos = {\n            I: [\n                [\n                    0,\n                    0,\n                    0,\n                    0\n                ],\n                [\n                    1,\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0,\n                    0\n                ],\n                [\n                    0,\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            J: [\n                [\n                    1,\n                    0,\n                    0\n                ],\n                [\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            L: [\n                [\n                    0,\n                    0,\n                    1\n                ],\n                [\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            O: [\n                [\n                    1,\n                    1\n                ],\n                [\n                    1,\n                    1\n                ]\n            ],\n            S: [\n                [\n                    0,\n                    1,\n                    1\n                ],\n                [\n                    1,\n                    1,\n                    0\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            Z: [\n                [\n                    1,\n                    1,\n                    0\n                ],\n                [\n                    0,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ],\n            T: [\n                [\n                    0,\n                    1,\n                    0\n                ],\n                [\n                    1,\n                    1,\n                    1\n                ],\n                [\n                    0,\n                    0,\n                    0\n                ]\n            ]\n        };\n        this.keyStroke = [];\n        this.tetrominoSequence = [];\n        this.intervalIds = -1;\n        this.count = 0;\n        console.log(\"++++++++++ Tetris init\");\n        this.onGameOver = onGameOver;\n        this.onDrawing = onDrawing;\n        this.onTick = onTick;\n        return this;\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL3RldHJpcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsZ0NBQWdDO0FBRWhDLHNFQUFzRTtBQUN0RSwwREFBMEQ7QUFDMUQsd0JBQXdCO0FBRXhCLDhCQUE4QjtBQUM5Qix3Q0FBd0M7QUFDeEMseUJBQXlCO0FBRXpCLHlDQUF5QztBQUN6QywrQkFBK0I7QUFDL0IsTUFBTTtBQUNOLElBQUk7QUFFSiwyRkFBMkY7QUFDM0YsMEZBQTBGO0FBRTFGLDBCQUEwQjtBQUMxQixNQUFNQSxTQUFTO0lBQ2JDLEdBQUc7SUFDSEMsR0FBRztJQUNIQyxHQUFHO0lBQ0hDLEdBQUc7SUFDSEMsR0FBRztJQUNIQyxHQUFHO0lBQ0hDLEdBQUc7QUFDTDtBQUVBLE1BQU1DLGdCQUFnQjtJQUNwQixJQUFJQyxTQUFTLEVBQUU7SUFDZixJQUFLLElBQUlDLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLElBQUlBLE1BQU87UUFDbENELE1BQU0sQ0FBQ0MsSUFBSSxHQUFHLEVBQUU7UUFFaEIsSUFBSyxJQUFJQyxNQUFNLEdBQUdBLE1BQU0sSUFBSUEsTUFBTztZQUNqQ0YsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUksR0FBRztRQUNyQjtJQUNGO0lBQ0EsT0FBT0Y7QUFDVDtBQUVBLE1BQU1HLGNBQWMsQ0FBQ0g7SUFDbkIsSUFBSyxJQUFJQyxNQUFNLENBQUMsR0FBR0EsTUFBTSxJQUFJQSxNQUFPO1FBQ2xDLElBQUssSUFBSUMsTUFBTSxHQUFHQSxNQUFNLElBQUlBLE1BQU87WUFDakNFLFFBQVFDLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDQyxJQUFJLENBQUNDLElBQUk7UUFDOUI7SUFDRjtBQUNGO0FBQ0EsTUFBTUksTUFBTTtBQUNaOzs7O0NBSUMsR0FDTSxNQUFNQztJQTZEWEMsa0JBQWtCQyxHQUFHLEVBQUU7UUFDckIsSUFBSSxDQUFDQyxTQUFTLEdBQUc7ZUFBSSxJQUFJLENBQUNBLFNBQVM7WUFBRUQ7U0FBSTtRQUN6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O29CQUFHO2lCQUFFO2dCQUNUO29CQUFDO29CQUFHO29CQUFHO2lCQUFFO2FBQ1Y7WUFDREMsR0FBRztnQkFDRDtvQkFBQztvQkFBRztvQkFBRztpQkFBRTtnQkFDVDtvQkFBQztvQkFBRztvQkFBRztpQkFBRTtnQkFDVDtvQkFBQztvQkFBRztvQkFBRztpQkFBRTthQUNWO1lBQ0RMLEdBQUc7Z0JBQ0Q7b0JBQUM7b0JBQUc7aUJBQUU7Z0JBQ047b0JBQUM7b0JBQUc7aUJBQUU7YUFDUDtZQUNERSxHQUFHO2dCQUNEO29CQUFDO29CQUFHO29CQUFHO2lCQUFFO2dCQUNUO29CQUFDO29CQUFHO29CQUFHO2lCQUFFO2dCQUNUO29CQUFDO29CQUFHO29CQUFHO2lCQUFFO2FBQ1Y7WUFDREMsR0FBRztnQkFDRDtvQkFBQztvQkFBRztvQkFBRztpQkFBRTtnQkFDVDtvQkFBQztvQkFBRztvQkFBRztpQkFBRTtnQkFDVDtvQkFBQztvQkFBRztvQkFBRztpQkFBRTthQUNWO1lBQ0RGLEdBQUc7Z0JBQ0Q7b0JBQUM7b0JBQUc7b0JBQUc7aUJBQUU7Z0JBQ1Q7b0JBQUM7b0JBQUc7b0JBQUc7aUJBQUU7Z0JBQ1Q7b0JBQUM7b0JBQUc7b0JBQUc7aUJBQUU7YUFDVjtRQUNIO2FBR0FnQixZQUFZLEVBQUU7YUFHZDBCLG9CQUFvQixFQUFFO2FBRXRCbkIsY0FBYyxDQUFDO2FBQ2YwQyxRQUFRO1FBUU52RCxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJLENBQUM4QyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ00sU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNELE1BQU0sR0FBR0E7UUFDZCxPQUFPLElBQUk7SUFDYjtBQTZORiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3RldHJpcy90ZXRyaXMuanM/ODdmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB0ZXRyb21pbm9TZXF1ZW5jZSA9IFtdO1xuXG4vLyAvLyBrZWVwIHRyYWNrIG9mIHdoYXQgaXMgaW4gZXZlcnkgY2VsbCBvZiB0aGUgZ2FtZSB1c2luZyBhIDJkIGFycmF5XG4vLyAvLyB0ZXRyaXMgcGxheWZpZWxkIGlzIDEweDIwLCB3aXRoIGEgZmV3IHJvd3Mgb2Zmc2NyZWVuXG4vLyBjb25zdCBwbGF5ZmllbGQgPSBbXTtcblxuLy8gLy8gcG9wdWxhdGUgdGhlIGVtcHR5IHN0YXRlXG4vLyBmb3IgKGxldCByb3cgPSAtMjsgcm93IDwgMjA7IHJvdysrKSB7XG4vLyAgIHBsYXlmaWVsZFtyb3ddID0gW107XG5cbi8vICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4vLyAgICAgcGxheWZpZWxkW3Jvd11bY29sXSA9IDA7XG4vLyAgIH1cbi8vIH1cblxuLy8gdGV0cmlzLmpzPzg3ZjY6MjUyIFVuY2F1Z2h0IFR5cGVFcnJvcjogQ2Fubm90IHJlYWQgcHJvcGVydGllcyBvZiB1bmRlZmluZWQgKHJlYWRpbmcgJzAnKVxuLy8gICAgIGF0IGxvb3AgKHdlYnBhY2staW50ZXJuYWw6Ly8vKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdGV0cmlzL3RldHJpcy5qczoyNTE6MzUpXG5cbi8vIGNvbG9yIG9mIGVhY2ggdGV0cm9taW5vXG5jb25zdCBjb2xvcnMgPSB7XG4gIEk6IFwiY3lhblwiLFxuICBPOiBcInllbGxvd1wiLFxuICBUOiBcInB1cnBsZVwiLFxuICBTOiBcImdyZWVuXCIsXG4gIFo6IFwicmVkXCIsXG4gIEo6IFwiYmx1ZVwiLFxuICBMOiBcIm9yYW5nZVwiLFxufTtcblxuY29uc3QgaW5pdFBsYXlGaWVsZCA9ICgpID0+IHtcbiAgbGV0IHJlc3VsdCA9IFtdO1xuICBmb3IgKGxldCByb3cgPSAtMjsgcm93IDwgMjA7IHJvdysrKSB7XG4gICAgcmVzdWx0W3Jvd10gPSBbXTtcblxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgcmVzdWx0W3Jvd11bY29sXSA9IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCBwcmludFJlc3VsdCA9IChyZXN1bHQpID0+IHtcbiAgZm9yIChsZXQgcm93ID0gLTI7IHJvdyA8IDIwOyByb3crKykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0W3Jvd11bY29sXSk7XG4gICAgfVxuICB9XG59O1xuY29uc3QgZnBzID0gMzA7XG4vKipcbiAqIENsYXNzIHJlcHJlc2VudGluZyBhIFRldHJpcyBnYW1lLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25HYW1lT3ZlciAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIGdhbWUgaXMgb3Zlci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uRHJhd2luZyAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gZHJhd2luZyB0aGUgZ2FtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRldHJpcyB7XG4gIHRldHJvbWlub3MgPSB7XG4gICAgSTogW1xuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzEsIDEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgICAgWzAsIDAsIDAsIDBdLFxuICAgIF0sXG4gICAgSjogW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgTDogW1xuICAgICAgWzAsIDAsIDFdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgTzogW1xuICAgICAgWzEsIDFdLFxuICAgICAgWzEsIDFdLFxuICAgIF0sXG4gICAgUzogW1xuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgWjogW1xuICAgICAgWzEsIDEsIDBdLFxuICAgICAgWzAsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gICAgVDogW1xuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzEsIDEsIDFdLFxuICAgICAgWzAsIDAsIDBdLFxuICAgIF0sXG4gIH07XG4gIG9uR2FtZU92ZXI7XG4gIG9uRHJhd2luZztcbiAga2V5U3Ryb2tlID0gW107XG4gIG9uVGljaztcbiAgcGxheWZpZWxkO1xuICB0ZXRyb21pbm9TZXF1ZW5jZSA9IFtdO1xuICB0ZXRyb21pbm87XG4gIGludGVydmFsSWRzID0gLTE7XG4gIGNvdW50ID0gMDtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgVGV0cmlzIGdhbWUuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uR2FtZU92ZXIgLSBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSBnYW1lIGlzIG92ZXIuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uRHJhd2luZyAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gZHJhd2luZyB0aGUgZ2FtZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9uR2FtZU92ZXIsIG9uRHJhd2luZywgb25UaWNrKSB7XG4gICAgY29uc29sZS5sb2coXCIrKysrKysrKysrIFRldHJpcyBpbml0XCIpO1xuICAgIHRoaXMub25HYW1lT3ZlciA9IG9uR2FtZU92ZXI7XG4gICAgdGhpcy5vbkRyYXdpbmcgPSBvbkRyYXdpbmc7XG4gICAgdGhpcy5vblRpY2sgPSBvblRpY2s7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBSZWdpc3RlcktleVN0cm9rZShrZXkpIHtcbiAgICB0aGlzLmtleVN0cm9rZSA9IFsuLi50aGlzLmtleVN0cm9rZSwga2V5XTtcbiAgICBjb25zb2xlLmxvZyhcImtleXNcIiwgdGhpcy5rZXlTdHJva2UpO1xuICB9XG5cbiAgRXhlY3V0ZUtleVN0cm9rZSgpIHtcbiAgICBpZiAoIXRoaXMua2V5U3Ryb2tlLmxlbmd0aCkgcmV0dXJuO1xuICAgIC8vIGNvbnN0IGtleSA9IHRoaXMua2V5U3Ryb2tlW3RoaXMua2V5U3Ryb2tlLmxlbmd0aCAtIDFdO1xuICAgIC8vIHRoaXMua2V5U3Ryb2tlID0gdGhpcy5rZXlTdHJva2UucG9wKCkgfHwgW107XG4gICAgLy8gY29uc29sZS5sb2coXCJleGVjdXRlIGtleTogXCIgKyBrZXkpO1xuICB9XG5cbiAgc3RhcnRHYW1lKCkge1xuICAgIHRoaXMucGxheWZpZWxkID0gaW5pdFBsYXlGaWVsZCgpO1xuICAgIHRoaXMudGV0cm9taW5vID0gdGhpcy5nZXROZXh0VGV0cm9taW5vKCk7XG4gICAgdGhpcy5pbnRlcnZhbElkcyA9IFtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMubG9vcCgpLCAxMDAwIC8gZnBzKSxcbiAgICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuRXhlY3V0ZUtleVN0cm9rZSgpLCAxMDAwIC8gKGZwcyAqIDIpKSxcbiAgICBdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHN0b3BHYW1lKCkge1xuICAgIGlmICh0aGlzLmludGVydmFsSWRzWzBdICE9IC0xKSByZXR1cm4gLTE7XG4gICAgdGhpcy5pbnRlcnZhbElkcy5mb3JFYWNoKChpZCkgPT4gY2xlYXJJbnRlcnZhbChpZCkpO1xuICB9XG4gIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICB9XG5cbiAgZ2VuZXJhdGVTZXF1ZW5jZSgpIHtcbiAgICBjb25zdCBzZXF1ZW5jZSA9IFtcIklcIiwgXCJKXCIsIFwiTFwiLCBcIk9cIiwgXCJTXCIsIFwiVFwiLCBcIlpcIl07XG5cbiAgICB3aGlsZSAoc2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICBjb25zdCByYW5kID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgc2VxdWVuY2UubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCBuYW1lID0gc2VxdWVuY2Uuc3BsaWNlKHJhbmQsIDEpWzBdO1xuICAgICAgdGhpcy50ZXRyb21pbm9TZXF1ZW5jZS5wdXNoKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldE5leHRUZXRyb21pbm8oKSB7XG4gICAgaWYgKHRoaXMudGV0cm9taW5vU2VxdWVuY2UubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlU2VxdWVuY2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lID0gdGhpcy50ZXRyb21pbm9TZXF1ZW5jZS5wb3AoKTtcbiAgICBjb25zdCBtYXRyaXggPSB0aGlzLnRldHJvbWlub3NbbmFtZV07XG5cbiAgICBjb25zdCBjb2wgPSB0aGlzLnBsYXlmaWVsZFswXS5sZW5ndGggLyAyIC0gTWF0aC5jZWlsKG1hdHJpeFswXS5sZW5ndGggLyAyKTtcblxuICAgIGNvbnN0IHJvdyA9IG5hbWUgPT09IFwiSVwiID8gLTEgOiAtMjtcblxuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgbWF0cml4OiBtYXRyaXgsXG4gICAgICByb3c6IHJvdyxcbiAgICAgIGNvbDogY29sLFxuICAgIH07XG4gIH1cblxuICAvLyByb3RhdGUgYW4gTnhOIG1hdHJpeCA5MGRlZ1xuICAvLyBAc2VlIGh0dHBzOi8vY29kZXJldmlldy5zdGFja2V4Y2hhbmdlLmNvbS9hLzE4NjgzNFxuICByb3RhdGUobWF0cml4KSB7XG4gICAgY29uc3QgTiA9IG1hdHJpeC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHJlc3VsdCA9IG1hdHJpeC5tYXAoKHJvdywgaSkgPT5cbiAgICAgIHJvdy5tYXAoKHZhbCwgaikgPT4gbWF0cml4W04gLSBqXVtpXSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGUgbmV3IG1hdHJpeC9yb3cvY29sIGlzIHZhbGlkXG4gIGlzVmFsaWRNb3ZlKG1hdHJpeCwgY2VsbFJvdywgY2VsbENvbCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IG1hdHJpeC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBtYXRyaXhbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBtYXRyaXhbcm93XVtjb2xdICYmXG4gICAgICAgICAgLy8gb3V0c2lkZSB0aGUgZ2FtZSBib3VuZHNcbiAgICAgICAgICAoY2VsbENvbCArIGNvbCA8IDAgfHxcbiAgICAgICAgICAgIGNlbGxDb2wgKyBjb2wgPj0gdGhpcy5wbGF5ZmllbGRbMF0ubGVuZ3RoIHx8XG4gICAgICAgICAgICBjZWxsUm93ICsgcm93ID49IHRoaXMucGxheWZpZWxkLmxlbmd0aCB8fFxuICAgICAgICAgICAgLy8gY29sbGlkZXMgd2l0aCBhbm90aGVyIHBpZWNlXG4gICAgICAgICAgICB0aGlzLnBsYXlmaWVsZFtjZWxsUm93ICsgcm93XVtjZWxsQ29sICsgY29sXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwbGFjZXRldHJvbWlubygpIHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnRldHJvbWluby5tYXRyaXgubGVuZ3RoOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy50ZXRyb21pbm8ubWF0cml4W3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICBpZiAodGhpcy50ZXRyb21pbm8ubWF0cml4W3Jvd11bY29sXSkge1xuICAgICAgICAgIC8vIGdhbWUgb3ZlciBpZiBwaWVjZSBoYXMgYW55IHBhcnQgb2Zmc2NyZWVuXG4gICAgICAgICAgaWYgKHRoaXMudGV0cm9taW5vLnJvdyArIHJvdyA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uR2FtZU92ZXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnBsYXlmaWVsZFt0aGlzLnRldHJvbWluby5yb3cgKyByb3ddW3RoaXMudGV0cm9taW5vLmNvbCArIGNvbF0gPVxuICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8ubmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNoZWNrIGZvciBsaW5lIGNsZWFycyBzdGFydGluZyBmcm9tIHRoZSBib3R0b20gYW5kIHdvcmtpbmcgb3VyIHdheSB1cFxuICAgIGZvciAobGV0IHJvdyA9IHRoaXMucGxheWZpZWxkLmxlbmd0aCAtIDE7IHJvdyA+PSAwOyApIHtcbiAgICAgIGlmICh0aGlzLnBsYXlmaWVsZFtyb3ddLmV2ZXJ5KChjZWxsKSA9PiAhIWNlbGwpKSB7XG4gICAgICAgIC8vIGRyb3AgZXZlcnkgcm93IGFib3ZlIHRoaXMgb25lXG4gICAgICAgIGZvciAobGV0IHIgPSByb3c7IHIgPj0gMDsgci0tKSB7XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLnBsYXlmaWVsZFtyXS5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgdGhpcy5wbGF5ZmllbGRbcl1bY10gPSB0aGlzLnBsYXlmaWVsZFtyIC0gMV1bY107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3ctLTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy50ZXRyb21pbm8gPSB0aGlzLmdldE5leHRUZXRyb21pbm8oKTtcbiAgfVxuXG4gIGxvb3AoKSB7XG4gICAgdGhpcy5vblRpY2soKTtcbiAgICAvLyBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgLy8gZHJhdyB0aGUgdGhpcy5wbGF5ZmllbGRcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAyMDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IDEwOyBjb2wrKykge1xuICAgICAgICBpZiAodGhpcy5wbGF5ZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucGxheWZpZWxkW3Jvd11bY29sXTtcbiAgICAgICAgICAvLyAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JzW25hbWVdO1xuXG4gICAgICAgICAgLy8gZHJhd2luZyAxIHB4IHNtYWxsZXIgdGhhbiB0aGUgZ3JpZCBjcmVhdGVzIGEgZ3JpZCBlZmZlY3RcbiAgICAgICAgICB0aGlzLm9uRHJhd2luZyh7XG4gICAgICAgICAgICByb3c6IHJvdyArIDEsXG4gICAgICAgICAgICBjb2w6IGNvbCArIDEsXG4gICAgICAgICAgICBjb2xvcjogY29sb3JzW25hbWVdLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vICAgZHJhd1BpZWNlQXQocm93ICsgMSwgY29sICsgMSwgY29sb3JzW25hbWVdKTtcbiAgICAgICAgICAvLyAgIGNvbnRleHQuZmlsbFJlY3QoY29sICogZ3JpZCwgcm93ICogZ3JpZCwgZ3JpZCAtIDEsIGdyaWQgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGRyYXcgdGhlIGFjdGl2ZSB0aGlzLnRldHJvbWlub1xuICAgIGlmICh0aGlzLnRldHJvbWlubykge1xuICAgICAgLy8gY29uc29sZS5sb2coXCIhZHJhd1wiICsgSlNPTi5zdHJpbmdpZnkodGhpcy50ZXRyb21pbm8pKTtcbiAgICAgIC8vIHRoaXMudGV0cm9taW5vIGZhbGxzIGV2ZXJ5IDM1IGZyYW1lc1xuICAgICAgaWYgKCsrdGhpcy5jb3VudCA+IDM1KSB7XG4gICAgICAgIHRoaXMudGV0cm9taW5vLnJvdysrO1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcblxuICAgICAgICAvLyBwbGFjZSBwaWVjZSBpZiBpdCBydW5zIGludG8gYW55dGhpbmdcbiAgICAgICAgaWYgKFxuICAgICAgICAgICF0aGlzLmlzVmFsaWRNb3ZlKFxuICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8ubWF0cml4LFxuICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8ucm93LFxuICAgICAgICAgICAgdGhpcy50ZXRyb21pbm8uY29sXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnRldHJvbWluby5yb3ctLTtcbiAgICAgICAgICB0aGlzLnBsYWNldGV0cm9taW5vKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaXNIaWRkZW4ocm93LCBjb2wpIHtcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBncmlkIGJvdW5kYXJpZXNcbiAgICAgICAgY29uc3QgbWluUm93ID0gMDtcbiAgICAgICAgY29uc3QgbWF4Um93ID0gMTk7XG4gICAgICAgIGNvbnN0IG1pbkNvbCA9IDA7XG4gICAgICAgIGNvbnN0IG1heENvbCA9IDk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcGllY2UncyByb3cgYW5kIGNvbCBhcmUgb3V0c2lkZSB0aGUgYm91bmRhcmllc1xuICAgICAgICBpZiAocm93IDwgbWluUm93IHx8IHJvdyA+IG1heFJvdyB8fCBjb2wgPCBtaW5Db2wgfHwgY29sID4gbWF4Q29sKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGlzSW5zaWRlT2ZHYW1lR3JpZChyb3csIGNvbCkge1xuICAgICAgICAvLyBEZWZpbmUgdGhlIGdyaWQgYm91bmRhcmllc1xuICAgICAgICBjb25zdCBtaW5Sb3cgPSAwO1xuICAgICAgICBjb25zdCBtYXhSb3cgPSAxOTsgLy8gQXMgdGhlIGdyaWQncyBoZWlnaHQgaXMgMjBcbiAgICAgICAgY29uc3QgbWluQ29sID0gMDtcbiAgICAgICAgY29uc3QgbWF4Q29sID0gOTsgLy8gQXMgdGhlIGdyaWQncyB3aWR0aCBpcyAxMFxuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IHBpZWNlJ3Mgcm93IGFuZCBjb2wgYXJlIGluc2lkZSB0aGUgYm91bmRhcmllc1xuICAgICAgICByZXR1cm4gcm93ID49IG1pblJvdyAmJiByb3cgPD0gbWF4Um93ICYmIGNvbCA+PSBtaW5Db2wgJiYgY29sIDw9IG1heENvbDtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy50ZXRyb21pbm8ubWF0cml4Lmxlbmd0aDsgcm93KyspIHtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy50ZXRyb21pbm8ubWF0cml4W3Jvd10ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICAgIGlmICh0aGlzLnRldHJvbWluby5tYXRyaXhbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gaXNJbnNpZGVPZkdhbWVHcmlkKFxuICAgICAgICAgICAgICB0aGlzLnRldHJvbWluby5yb3cgKyByb3csXG4gICAgICAgICAgICAgIHRoaXMudGV0cm9taW5vLmNvbCArIGNvbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICghZGlzcGxheSkgY29udGludWU7XG4gICAgICAgICAgICB0aGlzLm9uRHJhd2luZyh7XG4gICAgICAgICAgICAgIHJvdzogdGhpcy50ZXRyb21pbm8ucm93ICsgcm93ICsgMSxcbiAgICAgICAgICAgICAgY29sOiB0aGlzLnRldHJvbWluby5jb2wgKyBjb2wgKyAxLFxuICAgICAgICAgICAgICBjb2xvcjogY29sb3JzW3RoaXMudGV0cm9taW5vLm5hbWVdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBkcmF3UGllY2VBdChcbiAgICAgICAgICAgIC8vICAgdGhpcy50ZXRyb21pbm8ucm93ICsgcm93ICsgMSxcbiAgICAgICAgICAgIC8vICAgdGhpcy50ZXRyb21pbm8uY29sICsgY29sICsgMSxcbiAgICAgICAgICAgIC8vICAgY29sb3JzW3RoaXMudGV0cm9taW5vLm5hbWVdXG4gICAgICAgICAgICAvLyApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvbG9ycyIsIkkiLCJPIiwiVCIsIlMiLCJaIiwiSiIsIkwiLCJpbml0UGxheUZpZWxkIiwicmVzdWx0Iiwicm93IiwiY29sIiwicHJpbnRSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZnBzIiwiVGV0cmlzIiwiUmVnaXN0ZXJLZXlTdHJva2UiLCJrZXkiLCJrZXlTdHJva2UiLCJFeGVjdXRlS2V5U3Ryb2tlIiwibGVuZ3RoIiwic3RhcnRHYW1lIiwicGxheWZpZWxkIiwidGV0cm9taW5vIiwiZ2V0TmV4dFRldHJvbWlubyIsImludGVydmFsSWRzIiwic2V0SW50ZXJ2YWwiLCJsb29wIiwic3RvcEdhbWUiLCJmb3JFYWNoIiwiaWQiLCJjbGVhckludGVydmFsIiwiZ2V0UmFuZG9tSW50IiwibWluIiwibWF4IiwiTWF0aCIsImNlaWwiLCJmbG9vciIsInJhbmRvbSIsImdlbmVyYXRlU2VxdWVuY2UiLCJzZXF1ZW5jZSIsInJhbmQiLCJuYW1lIiwic3BsaWNlIiwidGV0cm9taW5vU2VxdWVuY2UiLCJwdXNoIiwicG9wIiwibWF0cml4IiwidGV0cm9taW5vcyIsInJvdGF0ZSIsIk4iLCJtYXAiLCJpIiwidmFsIiwiaiIsImlzVmFsaWRNb3ZlIiwiY2VsbFJvdyIsImNlbGxDb2wiLCJwbGFjZXRldHJvbWlubyIsIm9uR2FtZU92ZXIiLCJldmVyeSIsImNlbGwiLCJyIiwiYyIsIm9uVGljayIsIm9uRHJhd2luZyIsImNvbG9yIiwiY291bnQiLCJpc0hpZGRlbiIsIm1pblJvdyIsIm1heFJvdyIsIm1pbkNvbCIsIm1heENvbCIsImlzSW5zaWRlT2ZHYW1lR3JpZCIsImRpc3BsYXkiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/tetris/tetris.js\n"));

/***/ })

});