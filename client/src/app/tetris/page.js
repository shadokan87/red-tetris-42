"use client";
import { useEffect, useRef, useState } from "react";
import "./tetris.css";
import { Button, Typography } from "antd";
import {
  RenderTetris,
  clearGrid,
  createPieceElement,
  drawPieceAt,
} from "./RenderTetris";
import { Mutex } from "../utils";
import { tokenSelector } from "../redux/sessionReducer";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import withAuth from "../withAuth";
import { Flex } from "antd";
import { GameInfo } from "./RenderTetris";
import { useRouter } from "next/navigation";
import { roomSelector, setRoom } from "../redux/lobbyReducer";
import { useRoomMembers } from "../page";

const keyStokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

const useTetrisClient = (gameGrid) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const room = useSelector(roomSelector);
  const [owner, opponent] = useRoomMembers(room);
  const token = useSelector(tokenSelector);
  const [socket, setSocket] = useState(null);
  const [score, setScore] = useState({
    points: 0,
    lineClears: 0,
  });

  useEffect(() => {
    if (!owner || !token) return;
    if (socket) {
      socket.disconnect();
    }

    const newSocket = io("http://localhost:3000/game", {
      query: { token },
      reconnectionAttempts: 10,
      reconnection: true,
      reconnectionDelay: 2000,
    })
      .on("data", (data) => {
        console.log("data", data);
        clearGrid(gameGrid);
        let pieces = [];
        for (let i = 0; i < data.length; i++) {
          pieces.push(createPieceElement(data[i]));
        }
        for (let i = 0; i < pieces.length; i++) {
          gameGrid.current.appendChild(pieces[i]);
        }
      })
      .on("score", (newScore) => setScore(newScore))
      .on("gameOver", (newRoomData) => {
        dispatch(setRoom(newRoomData));
        router.push(`/#${newRoomData.name}[${owner.displayname}]`, undefined, {
          shallow: true,
        });
      });

    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [token, room, owner]);

  return [socket, score];
};

const useControls = (socket) => {
  useEffect(() => {
    const mutex = new Mutex(10);

    const handleKeyDown = (e) => {
      if (socket) {
        if (keyStokes.includes(e.key)) {
          mutex.trigger(() => {
            console.log("emit key ", e.key);
            socket.emit("RegisterKeyStroke", e.key);
          });
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [socket]);
};

const Tetris = () => {
  const gameGrid = useRef(null);
  const [socket, score] = useTetrisClient(gameGrid);
  const router = useRouter();
  useControls(socket);

  if (!socket) return <></>;
  return (
    <>
      <Flex justify={"center"} align="center" className="main" gap={"0.5em"}>
        <RenderTetris gameGridRef={gameGrid} />
        <Flex
          justify="flex-start"
          className="gameInfoSection"
          vertical
          gap={"0.5em"}
        >
          <GameInfo title={"score"} info={score.points} />
          <GameInfo title={"line"} info={score.lineClears} />
        </Flex>
      </Flex>
    </>
  );
};

export default withAuth(Tetris);
