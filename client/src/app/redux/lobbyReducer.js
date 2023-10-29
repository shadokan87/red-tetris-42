import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOwnedRoom = createAsyncThunk(
  "lobby/fetchOwnedRoom",
  async (_, { getState }) => {
    const axiosConfig = getState().session.axiosConfig;
    if (!axiosConfig) return;
    const axiosInstance = axios.create(axiosConfig);
    const room = await axiosInstance
      .get("/game/room/")
      .then(({ data }) => data.room)
      .catch((e) => {
        console.error("Failed to fetch owned room", e);
      });
    return room;
  }
);

const lobbySlice = createSlice({
  name: "lobby",
  initialState: {
    room: null,
  },
  reducers: {
    setRoom: (state, action) => {
      state.room = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOwnedRoom.fulfilled, (state, action) => {
      state.room = action.payload;
    });
  },
});

export const { setRoom } = lobbySlice.actions;
export const lobbyInitialState = lobbySlice.initialState;
export const roomSelector = (state) => state.lobby.room;

export default lobbySlice.reducer;
