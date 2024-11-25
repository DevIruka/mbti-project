import { createSlice } from "@reduxjs/toolkit";

const isLoginSlice = createSlice({
  name: "isLoginSlice",
  initialState: { isLogin: false },
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
    },
  },
});

export const { setLogin, setLogout } = isLoginSlice.actions;
export default isLoginSlice.reducer;
