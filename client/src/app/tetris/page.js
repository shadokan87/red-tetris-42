"use client";
import { useEffect, useRef, useState } from "react";
import "./tetris.css";
import { Tetris as TetrisGame } from "./tetris";
import { Button } from "antd";
import { RenderTetris } from "./RenderTetris";

const keyStokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

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

const Tetris = () => {
  const [intervalId, setIntervalId] = useState(-1);
  const [drawingData, setDrawingData] = useState(null);
  const [gridRef, setGridRef] = useState(null);
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    if (gridRef) {
      setInstance(
        new TetrisGame(
          () => {
            alert("game over");
          },
          (data) => {
            setDrawingData(data);
            // drawPieceAt(data);
          },
          () => {
            console.log("!tick");
            while (gridRef.current.firstChild) {
              gridRef.current.removeChild(gridRef.current.firstChild);
            }
          }
        ).startGame()
      );
    }
  }, [gridRef]);

  useEffect(() => {
    console.log("++++++++++++++++++++_@__@");
  }, [gridRef]);

  // useEffect(() => {
  //   if (gridRef && gridRef.current && instance) {
  //     instance.startGame();
  //   }
  // }, [gridRef]);

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
    <RenderTetris onGridReady={(ref) => setGridRef(ref)}>
      {drawingData}
    </RenderTetris>
  );
};

export default Tetris;
