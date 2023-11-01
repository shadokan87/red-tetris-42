import { useEffect } from "react";
import { Button, Flex, Typography } from "antd";
import "./tetris.css";

const grid = 32;
export const drawPieceAt = (gameGrid, data) => {
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

export const createPieceElement = (data) => {
  const { row, col, color } = data;
  const onePiece = document.createElement("div");
  onePiece.style.width = `${grid}px`;
  onePiece.style.height = `${grid}px`;
  onePiece.style.backgroundColor = color;
  onePiece.style.border = "1px solid black";
  onePiece.style.gridColumnStart = col;
  onePiece.style.gridRowStart = row;
  onePiece.setAttribute("id", `currentPiece`);
  return onePiece;
};

export const clearGrid = (gameGrid) => {
  while (gameGrid.current.firstChild) {
    gameGrid.current.removeChild(gameGrid.current.firstChild);
  }
};

export const GameInfo = ({ title, info }) => {
  return (
    <Flex vertical className="gameInfo">
      <Typography>{title}</Typography>
      <Typography>{info}</Typography>
    </Flex>
  );
};

export const RenderTetris = ({ gameGridRef }) => {
  return (
    <div className="playground" id="playGround">
      <div className="game-grid" id="gameGrid" ref={gameGridRef}></div>
    </div>
  );
};
