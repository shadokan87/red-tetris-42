"use client";
import { useEffect, useRef, useState } from "react";
import "./tetris.css";
import { Tetris as TetrisGame } from "./tetris";
import { Button } from "antd";

const keyStokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

const Tetris = () => {
  const grid = 32;

  const gameGrid = useRef(null);
  const drawPieceAt = (data) => {
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
  const [intervalId, setIntervalId] = useState(-1);
  const [instance, setInstance] = useState(
    new TetrisGame(
      () => {
        alert("game over");
      },
      (data) => {
        drawPieceAt(data);
      },
      () => {
        while (gameGrid.current.firstChild) {
          gameGrid.current.removeChild(gameGrid.current.firstChild);
        }
      }
    )
  );

  useEffect(() => {
    if (gameGrid && instance) {
      instance.startGame();
    }
  }, [gameGrid]);

  class Mutex {
    constructor(delay) {
      this.delay = delay;
      this.mutex = false;
    }

    trigger(callback) {
      if (!this.mutex) {
        this.mutex = true;
        callback();
        setTimeout(() => {
          this.mutex = false;
        }, this.delay);
      }
    }
  }

  useEffect(() => {
    const mutex = new Mutex(10);

    const handleKeyDown = (e) => {
      if (instance) {
        if (keyStokes.includes(e.key)) {
          mutex.trigger(() => {
            instance.RegisterKeyStroke(e.key);
          });
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [instance]);

  return (
    <main id="main">
      <Button onClick={() => clearInterval(intervalId)}>{"stop game"}</Button>
      <div className="playground" id="playGround">
        <div className="game-grid" id="gameGrid" ref={gameGrid}></div>
      </div>
    </main>
  );
};

export default Tetris;
