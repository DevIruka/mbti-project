import { createSlice } from "@reduxjs/toolkit";

const isLoginSlice = createSlice({
  name: "isLoginSlice",
  initialState: { isLogin: !!localStorage.getItem("accessToken") },
  reducers: {
    setLogin: (state) => {
      state.isLogin = true;
    },
    setLogout: (state) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
});

export const { setLogin, setLogout } = isLoginSlice.actions;
export default isLoginSlice.reducer;
