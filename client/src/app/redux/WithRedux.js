import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { useEffect, useState } from "react";
import { tokenSelector } from "./sessionReducer";
import { io } from "socket.io-client";
import { AxiosProvider } from "../contexts/axios";
import { setRoom } from "./lobbyReducer";

const SocketHandler = ({ children }) => {
  const token = useSelector(tokenSelector);
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket) {
      socket.disconnect();
    }

    const newSocket = io("http://localhost:3000", {
      query: { token },
      reconnectionAttempts: 5,
    });

    newSocket.on("roomUpdate", (data) => {
      // console.log("roomUpdate", data);
      dispatch(setRoom(data.room));
    });
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [token]);

  return <>{children}</>;
};

export const WithRedux = ({ children }) => {
  return (
    <Provider store={store}>
      <AxiosProvider>
        <SocketHandler>{children}</SocketHandler>
      </AxiosProvider>
    </Provider>
  );
};
