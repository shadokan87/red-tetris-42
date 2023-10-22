import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: null,
    user: null,
    axiosInstance: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
      state.axiosInstance = axios.create({
        baseURL: "http://localhost:3000",
        withCredentials: true,
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload}`,
        },
      });
    },
  },
});

export const { setUser, setToken } = sessionSlice.actions;
export const sessionInitialState = sessionSlice.initialState;
export const tokenSelector = (state) => state.session.token;
export const userSelector = (state) => state.session.user;
export default sessionSlice.reducer;
