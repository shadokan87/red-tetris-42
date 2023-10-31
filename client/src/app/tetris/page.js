"use client";
import { useEffect, useRef, useState } from "react";
import "./tetris.css";
import { Tetris as TetrisGame, TetrominoDispenser } from "./tetris";
import { Button } from "antd";
import { RenderTetris, clearGrid, drawPieceAt } from "./RenderTetris";
import { Mutex } from "../utils";
import { tokenSelector } from "../redux/sessionReducer";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import withAuth from "../withAuth";

const keyStokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

const Tetris = () => {
  const gameGrid = useRef(null);
  const [intervalId, setIntervalId] = useState(-1);
  const [drawingData, setDrawingData] = useState(null);
  const [instance, setInstance] = useState(
    new TetrisGame(
      () => {
        console.log("game over");
      },
      (data) => {
        drawPieceAt(gameGrid, data);
      },
      () => {
        clearGrid(gameGrid);
      }
    )
  );
  const token = useSelector(tokenSelector);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket) {
      socket.disconnect();
    }

    const newSocket = io("http://localhost:3000/game", {
      query: { token },
      reconnectionAttempts: 5,
    });

    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [token]);

  // useEffect(() => {
  //   if (!token) return;
  //   if (socket) {
  //     socket.disconnect();
  //   }
  //   {
  //     alert("connection with " + token);
  //     const newSocket = io("http://localhost:3000/game", {
  //       query: { token },
  //       reconnectionAttempts: 5,
  //     });

  //     setSocket(newSocket);
  //   }

  //   return () => newSocket.disconnect();
  // }, [token]);

  useEffect(() => {
    if (gameGrid && instance) {
      const dispenser = new TetrominoDispenser((seqeunce) => {
        instance.appendSequence(seqeunce);
      });
      instance.setTetrominoDispenser(dispenser).startGame();
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

export default withAuth(Tetris);
