// if (!instance) {
//   logger.info(`No tetris instance for room: ${room.id}, creating one.`);
//   if (room.solo) {
//     // socket.emit;
//   } else {
//     // const firstInstance = new Tetris(
//     //   () => {
//     //     logger.info(`Tetris: gameOver for ${userInfo.user.username}`);
//     //     endVersusGame(socket);
//     //   },
//     //   (drawingData) => {
//     //     socket.volatile.emit("data", drawingData);
//     //   },
//     //   (score) => socket.emit("score", score)
//     // );
//     // if (userInfo.user.id == room.owner)
//     //   tetrisInstances.set(room.id, { owner: firstInstance });
//     // else tetrisInstances.set(room.id, { opponent: firstInstance });
//   }
// } else {
//   // const firstInstance = instance.owner
//   //   ? instance.owner
//   //   : instance.opponent;
//   // const secondInstance = new Tetris(
//   //   () => {
//   //     logger.info(`Tetris: gameOver for ${userInfo.user.username}`);
//   //     endVersusGame(socket);
//   //   },
//   //   (drawingData) => {
//   //     socket.volatile.emit("data", drawingData);
//   //   },
//   //   (score) => socket.emit("score", score)
//   // );
//   // if (instance.owner)
//   //   tetrisInstances.set(room.id, {
//   //     ...instance,
//   //     opponent: secondInstance,
//   //   });
//   // else
//   //   tetrisInstances.set(room.id, { ...instance, owner: secondInstance });
//   // const allInstances = [firstInstance, secondInstance];
//   // const dispenser = new TetrominoDispenser((sequence) =>
//   //   allInstances.map((instance) => instance.appendSequence(sequence))
//   // );
//   // allInstances.map((instance) => {
//   //   instance.setTetrominoDispenser(dispenser).startGame();
//   // });
// }

// socket.on("disconnect", () => {
//   socket.removeAllListeners();
//   const socketGame = getSocketGame(socket);
//   if (!socketGame) return;
//   const { instance, userInfo, room } = socketGame;

//   if (room.solo) {
//     // instance.owner.stopGame();
//     // tetrisInstances.delete(room.id);
//     // services.room.destroy(userInfo.user.id);
//     // logger.info(`cleared solo instance for ${userInfo.user.username}`);
//   } else {
//     // endVersusGame(socket);
//   }
//   logger.info(`game: user ${userInfo.user} disconnected.`);
// });
// socket.on("RegisterKeyStroke", (k) => {
//   const { room, instance } = getPlayerData(socket);
//   if (!room || !instance || !room.gameStarted) return;
//   if (room.solo) {
//     console.log("[KEY]", k);
//     instance.owner.RegisterKeyStroke(k);
//   } else {
//   }
//   // const socketGame = getSocketGame(socket);
//   // if (!socketGame) return;
//   // const instanceIndex =
//   //   socketGame.userInfo.user.id == socketGame.room.owner
//   //     ? "owner"
//   //     : "opponent";
//   // const instance = socketGame.instance[instanceIndex];
//   // instance && instance.RegisterKeyStroke(k);
// });
