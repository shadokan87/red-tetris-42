import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import Cookies from "js-cookie";

export const fetchAuthUser = createAsyncThunk(
  "session/fetchAuthUser",
  async (_, { getState }) => {
    const axiosConfig = getState().session.axiosConfig;
    if (!axiosConfig) return;
    const axiosInstance = axios.create(axiosConfig);
    const user = await axiosInstance
      .get("/auth/user")
      .then(({ data }) => data)
      .catch((e) => {
        console.error("Failed to fetch user", e);
      });
    return user;
  }
);

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: null,
    user: null,
    axiosConfig: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload.token;
      if (action.payload.remember) Cookies.set("token", action.payload.token); // Save token in js-cookie
      state.axiosConfig = {
        baseURL: "http://localhost:3000",
        withCredentials: true,
        timeout: 10000,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${action.payload.token}`,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setUser, setToken } = sessionSlice.actions;
export const sessionInitialState = sessionSlice.initialState;
export const tokenSelector = (state) => state.session.token;
export const userSelector = (state) => state.session.user;
export const axiosConfigSelector = (state) => state.session.axiosConfig;

export default sessionSlice.reducer;
