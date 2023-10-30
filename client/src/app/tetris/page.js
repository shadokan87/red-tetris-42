"use client";
import { useEffect, useRef, useState } from "react";
import "./tetris.css";
import { Tetris as TetrisGame } from "./tetris";
import { Button } from "antd";
import { RenderTetris, clearGrid, drawPieceAt } from "./RenderTetris";
import { Mutex } from "../utils";

const keyStokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

const Tetris = () => {
  const gameGrid = useRef(null);
  const [intervalId, setIntervalId] = useState(-1);
  const [drawingData, setDrawingData] = useState(null);
  const [instance, setInstance] = useState(
    new TetrisGame(
      () => {
        alert("game over");
      },
      (data) => {
        drawPieceAt(gameGrid, data);
      },
      () => {
        clearGrid(gameGrid);
      }
    )
  );

  useEffect(() => {
    if (gameGrid && instance) {
      instance.startGame();
    }
  }, [gameGrid]);

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

  return <RenderTetris gameGridRef={gameGrid}>{drawingData}</RenderTetris>;
};

export default Tetris;
