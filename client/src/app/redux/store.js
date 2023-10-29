import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer";
import lobbyReducer from "./lobbyReducer";

const store = configureStore({
  reducer: {
    session: sessionReducer,
    lobby: lobbyReducer,
  },
});

export default store;
