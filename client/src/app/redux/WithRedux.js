import { Provider, useSelector } from "react-redux";
import store from "./store";
import { useEffect, useState } from "react";
import { tokenSelector } from "./sessionReducer";
import { io } from "socket.io-client";

const SocketHandler = ({ children }) => {
  const token = useSelector(tokenSelector);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (socket) {
      socket.disconnect();
    }

    const newSocket = io("http://localhost:3000", {
      query: { token },
    });
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [token]);

  return <>{children}</>;
};
export const WithRedux = ({ children }) => {
  return (
    <Provider store={store}>
      <SocketHandler>{children}</SocketHandler>
    </Provider>
  );
};
