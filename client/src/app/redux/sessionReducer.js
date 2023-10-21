import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    token: null,
    user: null,
  },
  reducers: {
    setUser: (state, action) => (state.user = action.payload),
    setToken: (state, action) => (state.token = action.payload),
  },
});

export const { setUser, setToken } = sessionSlice.actions;
export const sessionInitialState = sessionSlice.initialState;
export const tokenSelector = (state) => state.session.token;
export const userSelector = (state) => state.session.user;
export default sessionSlice.reducer;
