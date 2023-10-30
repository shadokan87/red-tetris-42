import { useEffect, useRef } from "react";
import { Button } from "antd";
import "./tetris.css";

const grid = 32;
const drawPieceAt = (gameGrid, data) => {
  const { row, col, color } = data;
  const onePiece = document.createElement("div");
  onePiece.style.width = `${grid}px`;
  onePiece.style.height = `${grid}px`;
  onePiece.style.backgroundColor = color;
  onePiece.style.border = "1px solid black";
  onePiece.style.gridColumnStart = col;
  onePiece.style.gridRowStart = row;
  onePiece.setAttribute("id", `currentPiece`);
  gameGrid.current.appendChild(onePiece);
};
export const RenderTetris = ({ children, onGridReady }) => {
  const gameGrid = useRef(null);

  useEffect(() => {
    if (!gameGrid || !gameGrid.current) return;
    onGridReady(gameGrid);
  }, [gameGrid]);

  useEffect(() => {
    console.log("draw");
    if (children) drawPieceAt(gameGrid, children);
  }, [children]);

  return (
    <main id="main">
      <Button onClick={() => clearInterval(intervalId)}>{"stop game"}</Button>
      <div className="playground" id="playGround">
        <div className="game-grid" id="gameGrid" ref={gameGrid}></div>
      </div>
    </main>
  );
};
